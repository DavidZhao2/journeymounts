package com.factionvoid.journeymount.util;

import net.minecraft.entity.Entity;
import net.minecraft.entity.player.PlayerEntity;

import java.lang.reflect.Method;
import java.util.*;

public final class CobblemonRideStatMaxer {
    private CobblemonRideStatMaxer() {}

    private static final String POKEMON_ENTITY_CLASS = "com.cobblemon.mod.common.entity.pokemon.PokemonEntity";
    private static final String RIDING_STAT_ENUM_CLASS = "com.cobblemon.mod.common.api.riding.stats.RidingStat";

    // Super juice uses a huge number; Cobblemon clamps internally.
    private static final int BIG = 999999;

    public enum ApplyResult {
        SUCCESS,
        ALREADY_MAXED,
        NOT_A_POKEMON,
        NOT_OWNED,
        NO_API
    }

    // ------------------------------------------------------------
    // Public: SUPER JUICE (MAX ALL)
    // ------------------------------------------------------------
    public static ApplyResult maxAllModes(Entity maybePokemonEntity, PlayerEntity user) {
        try {
            Object pokemon = resolvePokemon(maybePokemonEntity);
            if (pokemon == null) return ApplyResult.NOT_A_POKEMON;

            // block wild + other players
            if (!isOwnedByUser(pokemon, user)) return ApplyResult.NOT_OWNED;

            return maxRidingStatPoints(pokemon);

        } catch (Throwable t) {
            System.out.println("[JourneyMount] MaxRideJuice failed: " + t.getClass().getSimpleName() + " - " + t.getMessage());
            t.printStackTrace();
            return ApplyResult.NO_API;
        }
    }

    // ------------------------------------------------------------
    // Public: +amount ONE STAT (your 5 juices)
    // NEVER uses set(). Only true increment paths.
    // ------------------------------------------------------------
    public static ApplyResult addToOneRidingStat(Entity maybePokemonEntity, PlayerEntity user, String statName, int amount) {
        try {
            Object pokemon = resolvePokemon(maybePokemonEntity);
            if (pokemon == null) return ApplyResult.NOT_A_POKEMON;

            // block wild + other players
            if (!isOwnedByUser(pokemon, user)) return ApplyResult.NOT_OWNED;

            Class<?> ridingStatEnum = Class.forName(RIDING_STAT_ENUM_CLASS);
            Object statConst = getEnumConstByName(ridingStatEnum, statName);
            if (statConst == null) return ApplyResult.NO_API;

            // 1) best: Map increment (we can clamp + detect max)
            ApplyResult r1 = tryMapIncrement(pokemon, ridingStatEnum, statConst, amount);
            if (r1 != null) return r1;

            // 2) next: real add/increment method (NOT set)
            ApplyResult r2 = tryAddMethodOnly(pokemon, ridingStatEnum, statConst, amount);
            if (r2 != null) return r2;

            // 3) holder object fallback
            Object holder = findRidingStatsHolder(pokemon);
            if (holder != null) {
                ApplyResult r3 = tryMapIncrement(holder, ridingStatEnum, statConst, amount);
                if (r3 != null) return r3;

                ApplyResult r4 = tryAddMethodOnly(holder, ridingStatEnum, statConst, amount);
                if (r4 != null) return r4;
            }

            return ApplyResult.NO_API;

        } catch (Throwable t) {
            System.out.println("[JourneyMount] addToOneRidingStat failed: " + t.getClass().getSimpleName() + " - " + t.getMessage());
            return ApplyResult.NO_API;
        }
    }

    // ------------------------------------------------------------
    // Ownership (blocks wild + other players)
    // ------------------------------------------------------------
    private static boolean isOwnedByUser(Object pokemon, PlayerEntity user) {
        if (user == null) return false;

        UUID owner = findOwnerUuid(pokemon);
        // owner == null => wild
        if (owner == null) return false;

        return owner.equals(user.getUuid());
    }

    private static UUID findOwnerUuid(Object pokemon) {
        String[] methods = {
                "getOwnerUUID", "getOwnerUuid", "getOwnerId",
                "getOriginalOwnerUUID", "getOriginalOwnerUuid",
                "getOwner"
        };

        for (String m : methods) {
            try {
                Method mm = pokemon.getClass().getMethod(m);
                mm.setAccessible(true);
                Object v = mm.invoke(pokemon);
                if (v == null) continue;

                if (v instanceof UUID uuid) return uuid;

                if (v instanceof Optional<?> opt && opt.isPresent() && opt.get() instanceof UUID uuid) {
                    return uuid;
                }

                // owner object -> getUuid()
                try {
                    Method getUuid = v.getClass().getMethod("getUuid");
                    getUuid.setAccessible(true);
                    Object uuidVal = getUuid.invoke(v);
                    if (uuidVal instanceof UUID uuid) return uuid;
                } catch (NoSuchMethodException ignored) {}

                // owner object -> uuid()
                try {
                    Method uuid = v.getClass().getMethod("uuid");
                    uuid.setAccessible(true);
                    Object uuidVal = uuid.invoke(v);
                    if (uuidVal instanceof UUID uuid2) return uuid2;
                } catch (NoSuchMethodException ignored) {}

            } catch (NoSuchMethodException ignored) {
            } catch (Throwable ignored) {
            }
        }
        return null;
    }

    // ------------------------------------------------------------
    // SUPER JUICE max logic (detects already maxed; no consume if no change)
    // ------------------------------------------------------------
    private static ApplyResult maxRidingStatPoints(Object pokemon) {
        try {
            Class<?> ridingStatEnum = Class.forName(RIDING_STAT_ENUM_CLASS);
            Object[] stats = ridingStatEnum.getEnumConstants();
            if (stats == null || stats.length == 0) return ApplyResult.NO_API;

            // We try to read before/after to detect "already maxed"
            boolean anyChanged = false;

            // Prefer direct setter (set/add/put/apply) for super juice
            Method directSetter = findBestRidingStatSetterAnyNumeric(pokemon.getClass(), ridingStatEnum);
            if (directSetter != null) {
                for (Object stat : stats) {
                    Integer before = tryGetPoints(pokemon, ridingStatEnum, stat);
                    invokeSetter(directSetter, pokemon, stat, BIG);
                    Integer after = tryGetPoints(pokemon, ridingStatEnum, stat);

                    if (before != null && after != null && after > before) anyChanged = true;
                    if (before == null || after == null) anyChanged = true; // can't verify, assume changed
                }
                return anyChanged ? ApplyResult.SUCCESS : ApplyResult.ALREADY_MAXED;
            }

            // Map path
            Object mapObj = findRidingStatMap(pokemon, ridingStatEnum);
            if (mapObj instanceof Map<?, ?> map) {
                for (Object stat : stats) {
                    Integer before = tryGetPointsFromMap(map, stat);
                    if (before == null) before = 0;

                    // super juice sets huge; clamp if we can
                    Integer cap = tryGetMaxPoints(stat);
                    int target = (cap != null) ? cap : BIG;

                    if (before < target) anyChanged = true;
                    tryPutIntoMap(map, stat, target);
                }
                return anyChanged ? ApplyResult.SUCCESS : ApplyResult.ALREADY_MAXED;
            }

            // Holder path
            Object holder = findRidingStatsHolder(pokemon);
            if (holder != null) {
                Method holderSetter = findBestRidingStatSetterAnyNumeric(holder.getClass(), ridingStatEnum);
                if (holderSetter != null) {
                    for (Object stat : stats) {
                        Integer before = tryGetPoints(holder, ridingStatEnum, stat);
                        invokeSetter(holderSetter, holder, stat, BIG);
                        Integer after = tryGetPoints(holder, ridingStatEnum, stat);

                        if (before != null && after != null && after > before) anyChanged = true;
                        if (before == null || after == null) anyChanged = true;
                    }
                    return anyChanged ? ApplyResult.SUCCESS : ApplyResult.ALREADY_MAXED;
                }

                Object holderMapObj = findRidingStatMap(holder, ridingStatEnum);
                if (holderMapObj instanceof Map<?, ?> holderMap) {
                    for (Object stat : stats) {
                        Integer before = tryGetPointsFromMap(holderMap, stat);
                        if (before == null) before = 0;

                        Integer cap = tryGetMaxPoints(stat);
                        int target = (cap != null) ? cap : BIG;

                        if (before < target) anyChanged = true;
                        tryPutIntoMap(holderMap, stat, target);
                    }
                    return anyChanged ? ApplyResult.SUCCESS : ApplyResult.ALREADY_MAXED;
                }
            }

            return ApplyResult.NO_API;

        } catch (Throwable t) {
            System.out.println("[JourneyMount] maxRidingStatPoints failed: " + t.getClass().getSimpleName() + " - " + t.getMessage());
            t.printStackTrace();
            return ApplyResult.NO_API;
        }
    }

    // ------------------------------------------------------------
    // +amount SAFE helpers (returns null if path not available)
    // ------------------------------------------------------------
    private static ApplyResult tryMapIncrement(Object target, Class<?> ridingStatEnum, Object statConst, int amount) {
        Object mapObj = findRidingStatMap(target, ridingStatEnum);
        if (!(mapObj instanceof Map<?, ?> raw)) return null;

        try {
            Integer cap = tryGetMaxPoints(statConst);

            int before = 0;
            Integer curObj = tryGetPointsFromMap(raw, statConst);
            if (curObj != null) before = curObj;

            if (cap != null && before >= cap) return ApplyResult.ALREADY_MAXED;

            int afterTarget = before + amount;
            if (cap != null) afterTarget = Math.min(afterTarget, cap);

            // write
            tryPutIntoMap(raw, statConst, afterTarget);

            // verify change
            Integer after = tryGetPointsFromMap(raw, statConst);
            if (after != null && after <= before) return ApplyResult.ALREADY_MAXED;

            return ApplyResult.SUCCESS;

        } catch (UnsupportedOperationException ignored) {
            return null; // immutable map -> try add method
        } catch (Throwable ignored) {
            return null;
        }
    }

    // ONLY add/increment-style methods. Never set.
    private static ApplyResult tryAddMethodOnly(Object target, Class<?> ridingStatEnum, Object statConst, int amount) {
        Method add = findBestAddMethod(target.getClass(), ridingStatEnum);
        if (add == null) return null;

        try {
            Integer before = tryGetPoints(target, ridingStatEnum, statConst);

            add.setAccessible(true);
            Class<?> numType = add.getParameterTypes()[1];
            add.invoke(target, statConst, convertNumber(amount, numType));

            Integer after = tryGetPoints(target, ridingStatEnum, statConst);

            // If we can read and nothing increased, treat as maxed
            if (before != null && after != null && after <= before) return ApplyResult.ALREADY_MAXED;

            // If we can't read, assume success (Cobblemon clamps internally)
            return ApplyResult.SUCCESS;

        } catch (Throwable ignored) {
            return null;
        }
    }

    private static Method findBestAddMethod(Class<?> clz, Class<?> ridingStatEnum) {
        List<Method> candidates = new ArrayList<>();

        for (Method m : clz.getMethods()) {
            if (m.getParameterCount() != 2) continue;

            Class<?> p0 = m.getParameterTypes()[0];
            Class<?> p1 = m.getParameterTypes()[1];

            if (!p0.equals(ridingStatEnum)) continue;
            if (!isNumericType(p1)) continue;

            String n = m.getName().toLowerCase(Locale.ROOT);
            if (n.startsWith("set")) continue;

            if (n.startsWith("add") || n.contains("increase") || n.contains("increment") || n.startsWith("apply")) {
                candidates.add(m);
            }
        }

        if (candidates.isEmpty()) return null;

        candidates.sort((a, b) -> Integer.compare(scoreSetterName(b.getName()), scoreSetterName(a.getName())));
        return candidates.get(0);
    }

    // ------------------------------------------------------------
    // Stat read helpers (to detect max / already maxed)
    // ------------------------------------------------------------
    private static Integer tryGetPoints(Object target, Class<?> ridingStatEnum, Object statConst) {
        // 1) map
        Object mapObj = findRidingStatMap(target, ridingStatEnum);
        if (mapObj instanceof Map<?, ?> map) {
            Integer v = tryGetPointsFromMap(map, statConst);
            if (v != null) return v;
        }

        // 2) getter method with (RidingStat) -> int/Integer
        Method getter = findBestPointsGetter(target.getClass(), ridingStatEnum);
        if (getter != null) {
            try {
                getter.setAccessible(true);
                Object out = getter.invoke(target, statConst);
                if (out instanceof Number num) return num.intValue();
            } catch (Throwable ignored) {}
        }

        return null;
    }

    private static Method findBestPointsGetter(Class<?> clz, Class<?> ridingStatEnum) {
        List<Method> candidates = new ArrayList<>();
        for (Method m : clz.getMethods()) {
            if (m.getParameterCount() != 1) continue;
            if (!m.getParameterTypes()[0].equals(ridingStatEnum)) continue;

            Class<?> rt = m.getReturnType();
            if (!(rt == int.class || rt == Integer.class || Number.class.isAssignableFrom(rt))) continue;

            String n = m.getName().toLowerCase(Locale.ROOT);
            if (!(n.startsWith("get") || n.startsWith("has") || n.contains("point") || n.contains("stat"))) continue;

            candidates.add(m);
        }
        if (candidates.isEmpty()) return null;

        candidates.sort((a, b) -> Integer.compare(scoreGetterName(b.getName()), scoreGetterName(a.getName())));
        return candidates.get(0);
    }

    private static Integer tryGetPointsFromMap(Map<?, ?> map, Object statConst) {
        try {
            Object v = map.get(statConst);
            if (v instanceof Number num) return num.intValue();
        } catch (Throwable ignored) {}
        return null;
    }

    private static void tryPutIntoMap(Map<?, ?> mapRaw, Object statConst, int value) {
        @SuppressWarnings("unchecked")
        Map<Object, Object> map = (Map<Object, Object>) mapRaw;
        map.put(statConst, value);
    }

    // Try to read a max cap from the enum constant itself
    private static Integer tryGetMaxPoints(Object statEnumConst) {
        String[] names = {
                "getMaxPoints", "maxPoints",
                "getMax", "max",
                "getCap", "cap",
                "getLimit", "limit"
        };
        for (String n : names) {
            try {
                Method m = statEnumConst.getClass().getMethod(n);
                m.setAccessible(true);
                Object out = m.invoke(statEnumConst);
                if (out instanceof Number num) return num.intValue();
            } catch (NoSuchMethodException ignored) {
            } catch (Throwable ignored) {
            }
        }
        return null;
    }

    // ------------------------------------------------------------
    // Shared reflection utilities
    // ------------------------------------------------------------
    private static Object resolvePokemon(Entity maybePokemonEntity) throws Exception {
        Class<?> pokemonEntityClz = Class.forName(POKEMON_ENTITY_CLASS);
        if (!pokemonEntityClz.isInstance(maybePokemonEntity)) return null;
        return pokemonEntityClz.getMethod("getPokemon").invoke(maybePokemonEntity);
    }

    private static Method findBestRidingStatSetterAnyNumeric(Class<?> clz, Class<?> ridingStatEnum) {
        List<Method> candidates = new ArrayList<>();

        for (Method m : clz.getMethods()) {
            if (m.getParameterCount() != 2) continue;

            Class<?> p0 = m.getParameterTypes()[0];
            Class<?> p1 = m.getParameterTypes()[1];

            if (!p0.equals(ridingStatEnum)) continue;
            if (!isNumericType(p1)) continue;

            String n = m.getName().toLowerCase(Locale.ROOT);
            if (!(n.startsWith("set") || n.startsWith("add") || n.startsWith("put") || n.startsWith("apply"))) continue;

            candidates.add(m);
        }

        if (candidates.isEmpty()) return null;

        candidates.sort((a, b) -> Integer.compare(scoreSetterName(b.getName()), scoreSetterName(a.getName())));
        Method best = candidates.get(0);
        best.setAccessible(true);
        return best;
    }

    private static int scoreSetterName(String name) {
        String n = name.toLowerCase(Locale.ROOT);
        int s = 0;
        if (n.contains("point")) s += 20;
        if (n.contains("riding")) s += 10;
        if (n.contains("ride")) s += 8;
        if (n.contains("stat")) s += 8;
        if (n.startsWith("add")) s += 10;
        if (n.startsWith("apply")) s += 6;
        if (n.startsWith("set")) s += 3; // super juice only
        return s;
    }

    private static int scoreGetterName(String name) {
        String n = name.toLowerCase(Locale.ROOT);
        int s = 0;
        if (n.contains("point")) s += 20;
        if (n.contains("riding")) s += 10;
        if (n.contains("ride")) s += 8;
        if (n.contains("stat")) s += 8;
        return s;
    }

    private static void invokeSetter(Method m, Object target, Object statEnumConst, int value) {
        try {
            Class<?> numType = m.getParameterTypes()[1];
            m.invoke(target, statEnumConst, convertNumber(value, numType));
        } catch (Throwable ignored) {}
    }

    private static Object findRidingStatMap(Object obj, Class<?> ridingStatEnum) {
        List<Method> getters = new ArrayList<>();
        for (Method m : obj.getClass().getMethods()) {
            if (m.getParameterCount() != 0) continue;
            if (m.getReturnType() == void.class) continue;

            String n = m.getName().toLowerCase(Locale.ROOT);
            if (!(n.startsWith("get") || n.startsWith("is") || n.startsWith("has"))) continue;

            if ((n.contains("ride") || n.contains("riding")) && (n.contains("stat") || n.contains("point") || n.contains("value"))) {
                getters.add(m);
            }
        }

        getters.sort((a, b) -> Integer.compare(scoreGetterName(b.getName()), scoreGetterName(a.getName())));

        for (Method m : getters) {
            try {
                m.setAccessible(true);
                Object v = m.invoke(obj);
                if (v instanceof Map<?, ?> map) {
                    if (map.isEmpty()) return map;
                    for (Object k : map.keySet()) {
                        if (k != null && k.getClass().equals(ridingStatEnum)) return map;
                    }
                }
            } catch (Throwable ignored) {}
        }

        return null;
    }

    private static Object findRidingStatsHolder(Object pokemon) {
        for (Method m : pokemon.getClass().getMethods()) {
            if (m.getParameterCount() != 0) continue;
            if (m.getReturnType() == void.class) continue;

            String mn = m.getName().toLowerCase(Locale.ROOT);
            if (!(mn.startsWith("get") || mn.startsWith("is") || mn.startsWith("has"))) continue;

            if (!(mn.contains("ride") || mn.contains("riding"))) continue;
            if (!(mn.contains("stat") || mn.contains("point") || mn.contains("value"))) continue;

            try {
                m.setAccessible(true);
                Object v = m.invoke(pokemon);
                if (v == null) continue;

                String cn = v.getClass().getName().toLowerCase(Locale.ROOT);
                if (cn.contains("ridingproperties")) continue;

                if (v instanceof Map || v instanceof Collection) continue;

                return v;
            } catch (Throwable ignored) {}
        }
        return null;
    }

    private static Object getEnumConstByName(Class<?> enumClz, String name) {
        try {
            Object[] consts = enumClz.getEnumConstants();
            if (consts == null) return null;
            for (Object c : consts) {
                if (((Enum<?>) c).name().equalsIgnoreCase(name)) return c;
            }
        } catch (Throwable ignored) {}
        return null;
    }

    private static boolean isNumericType(Class<?> c) {
        return c == int.class || c == Integer.class ||
                c == float.class || c == Float.class ||
                c == double.class || c == Double.class ||
                c == long.class || c == Long.class ||
                c == short.class || c == Short.class ||
                c == byte.class || c == Byte.class;
    }

    private static Object convertNumber(int v, Class<?> numType) {
        if (numType == int.class || numType == Integer.class) return v;
        if (numType == float.class || numType == Float.class) return (float) v;
        if (numType == double.class || numType == Double.class) return (double) v;
        if (numType == long.class || numType == Long.class) return (long) v;
        if (numType == short.class || numType == Short.class) return (short) v;
        if (numType == byte.class || numType == Byte.class) return (byte) v;
        return v;
    }
}

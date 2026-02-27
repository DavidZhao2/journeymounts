package com.factionvoid.journeymount.item;

import com.factionvoid.journeymount.util.CobblemonRideStatMaxer;
import net.minecraft.entity.Entity;
import net.minecraft.entity.LivingEntity;
import net.minecraft.entity.player.PlayerEntity;
import net.minecraft.item.Item;
import net.minecraft.item.ItemStack;
import net.minecraft.item.Item.TooltipContext;
import net.minecraft.item.tooltip.TooltipType;
import net.minecraft.text.MutableText;
import net.minecraft.text.Text;
import net.minecraft.util.ActionResult;
import net.minecraft.util.Formatting;
import net.minecraft.util.Hand;
import net.minecraft.util.TypedActionResult;
import net.minecraft.world.World;

import java.util.List;

public class AprijuiceStatItem extends Item {
    private final String statName;     // "SPEED", "ACCELERATION", "SKILL", "JUMP", "STAMINA"
    private final String displayName;  // "Nitro", "Vital", etc
    private final int amount;

    public AprijuiceStatItem(Settings settings, String statName, String displayName, int amount) {
        super(settings);
        this.statName = statName;
        this.displayName = displayName;
        this.amount = amount;
    }

    // Tooltip (Cobblemon-ish style)
    @Override
    public void appendTooltip(ItemStack stack, TooltipContext context, List<Text> tooltip, TooltipType type) {
        // Title line: Riding Stat Boosts (BLUE)
        tooltip.add(Text.literal("Riding Stat Boosts:").formatted(Formatting.BLUE));

        // Stat line: "Stamina" (colored) + ":" (WHITE) + "+5" (GREEN)
        tooltip.add(statLine(displayName, statColor(statName), amount));

        // Quality label in WHITE, value colored
        tooltip.add(Text.literal("Quality: ").formatted(Formatting.WHITE)
                .append(Text.literal("Legendary").formatted(Formatting.GOLD)));
    }

    private static Text statLine(String name, Formatting statColor, int amount) {
        // Example: "Stamina" (YELLOW) + ": " (WHITE) + "+5" (GREEN)
        MutableText t = Text.literal(name).formatted(statColor);
        t.append(Text.literal(": ").formatted(Formatting.WHITE));
        t.append(Text.literal("+" + amount).formatted(Formatting.GREEN));
        return t;
    }

    private static Formatting statColor(String statName) {
        return switch (statName.toUpperCase()) {
            case "ACCELERATION" -> Formatting.RED;
            case "STAMINA" -> Formatting.YELLOW;
            case "JUMP" -> Formatting.GREEN;
            case "SKILL" -> Formatting.AQUA;
            case "SPEED" -> Formatting.LIGHT_PURPLE;
            default -> Formatting.WHITE;
        };
    }

    // Right-click directly on a Pokémon entity
    @Override
    public ActionResult useOnEntity(ItemStack stack, PlayerEntity user, LivingEntity entity, Hand hand) {
        if (user.getWorld().isClient) return ActionResult.SUCCESS;

        CobblemonRideStatMaxer.ApplyResult res =
                CobblemonRideStatMaxer.addToOneRidingStat(entity, user, statName, amount);

        if (res == CobblemonRideStatMaxer.ApplyResult.SUCCESS) {
            consumeOne(user, stack);
            user.sendMessage(Text.literal("§aAprijuice: +" + amount + " " + displayName), true);
            return ActionResult.SUCCESS;
        }

        if (res == CobblemonRideStatMaxer.ApplyResult.ALREADY_MAXED) {
            // Don't consume
            user.sendMessage(Text.literal("§eThat stat is already maxed."), true);
            return ActionResult.SUCCESS;
        }

        user.sendMessage(Text.literal("§cUse this on your Cobblemon Pokémon."), true);
        return ActionResult.PASS;
    }

    // Right-click in air: if you're riding something, apply to your mount
    @Override
    public TypedActionResult<ItemStack> use(World world, PlayerEntity user, Hand hand) {
        ItemStack stack = user.getStackInHand(hand);
        if (world.isClient) return TypedActionResult.success(stack);

        Entity vehicle = user.getVehicle();
        if (vehicle != null) {
            CobblemonRideStatMaxer.ApplyResult res =
                    CobblemonRideStatMaxer.addToOneRidingStat(vehicle, user, statName, amount);

            if (res == CobblemonRideStatMaxer.ApplyResult.SUCCESS) {
                consumeOne(user, stack);
                user.sendMessage(Text.literal("§aAprijuice: +" + amount + " " + displayName + " (mount)"), true);
                return TypedActionResult.success(stack);
            }

            if (res == CobblemonRideStatMaxer.ApplyResult.ALREADY_MAXED) {
                user.sendMessage(Text.literal("§eThat stat is already maxed."), true);
                return TypedActionResult.success(stack);
            }
        }

        user.sendMessage(Text.literal("§eTip: Right-click your Pokémon (or use while riding it)."), true);
        return TypedActionResult.pass(stack);
    }

    private static void consumeOne(PlayerEntity user, ItemStack stack) {
        if (!user.getAbilities().creativeMode) stack.decrement(1);
    }
}

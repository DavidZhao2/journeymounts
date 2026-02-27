package com.factionvoid.journeymount.registry;

import com.factionvoid.journeymount.JourneyMount;
import com.factionvoid.journeymount.item.AprijuiceStatItem;
import com.factionvoid.journeymount.item.MaxRideJuiceItem;
import net.fabricmc.fabric.api.itemgroup.v1.ItemGroupEvents;
import net.minecraft.item.Item;
import net.minecraft.item.ItemGroups;
import net.minecraft.registry.Registries;
import net.minecraft.registry.Registry;
import net.minecraft.util.Identifier;

public class ModItems {

    public static final Item MAX_RIDE_JUICE = register(
            "max_ride_juice",
            new MaxRideJuiceItem(new Item.Settings().maxCount(16))
    );

    public static final Item NITRO_APRIJUICE = register(
            "nitro_aprijuice",
            new AprijuiceStatItem(new Item.Settings().maxCount(16), "ACCELERATION", "Accel.", 10)
    );

    public static final Item VITAL_APRIJUICE = register(
            "vital_aprijuice",
            new AprijuiceStatItem(new Item.Settings().maxCount(16), "STAMINA", "Stamina", 10)
    );

    public static final Item BOUNCE_APRIJUICE = register(
            "bounce_aprijuice",
            new AprijuiceStatItem(new Item.Settings().maxCount(16), "JUMP", "Jump", 10)
    );

    public static final Item TALENT_APRIJUICE = register(
            "talent_aprijuice",
            new AprijuiceStatItem(new Item.Settings().maxCount(16), "SKILL", "Skill", 10)
    );

    public static final Item SWIFT_APRIJUICE = register(
            "swift_aprijuice",
            new AprijuiceStatItem(new Item.Settings().maxCount(16), "SPEED", "Speed", 10)
    );

    private static Item register(String name, Item item) {
        return Registry.register(
                Registries.ITEM,
                Identifier.of(JourneyMount.MOD_ID, name),
                item
        );
    }

    public static void init() {
        ItemGroupEvents.modifyEntriesEvent(ItemGroups.INGREDIENTS).register(entries -> {
            entries.add(MAX_RIDE_JUICE);
            entries.add(NITRO_APRIJUICE);
            entries.add(VITAL_APRIJUICE);
            entries.add(BOUNCE_APRIJUICE);
            entries.add(TALENT_APRIJUICE);
            entries.add(SWIFT_APRIJUICE);
        });
    }
}

package com.factionvoid.journeymount.item;

import com.factionvoid.journeymount.util.CobblemonRideStatMaxer;
import net.minecraft.entity.Entity;
import net.minecraft.entity.LivingEntity;
import net.minecraft.entity.player.PlayerEntity;
import net.minecraft.item.Item;
import net.minecraft.item.ItemStack;
import net.minecraft.item.Item.TooltipContext;
import net.minecraft.item.tooltip.TooltipType;
import net.minecraft.text.Text;
import net.minecraft.util.ActionResult;
import net.minecraft.util.Formatting;
import net.minecraft.util.Hand;
import net.minecraft.util.TypedActionResult;
import net.minecraft.world.World;

import java.util.List;

public class MaxRideJuiceItem extends Item {

    public MaxRideJuiceItem(Settings settings) {
        super(settings);
    }

    @Override
    public void appendTooltip(ItemStack stack, TooltipContext context, List<Text> tooltip, TooltipType type) {
        tooltip.add(Text.literal("Riding Stat Boosts:").formatted(Formatting.BLUE));

        tooltip.add(statLine("Accel.", Formatting.RED, "MAX"));
        tooltip.add(statLine("Jump", Formatting.GREEN, "MAX"));
        tooltip.add(statLine("Speed", Formatting.LIGHT_PURPLE, "MAX"));
        tooltip.add(statLine("Stamina", Formatting.YELLOW, "MAX"));
        tooltip.add(statLine("Skill", Formatting.AQUA, "MAX"));

        tooltip.add(Text.literal("Quality: ").formatted(Formatting.WHITE)
                .append(Text.literal("Legendary").formatted(Formatting.GOLD)));
    }

    private static Text statLine(String name, Formatting color, String value) {
        return Text.literal(name + ": ").formatted(color)
                .append(Text.literal(value).formatted(Formatting.GREEN)); // MAX = GREEN
    }

    @Override
    public ActionResult useOnEntity(ItemStack stack, PlayerEntity user, LivingEntity entity, Hand hand) {
        if (user.getWorld().isClient) return ActionResult.SUCCESS;

        CobblemonRideStatMaxer.ApplyResult res = CobblemonRideStatMaxer.maxAllModes(entity, user);

        if (res == CobblemonRideStatMaxer.ApplyResult.SUCCESS) {
            consumeOne(user, stack);
            user.sendMessage(Text.literal("§aAll mount stats are now maxed."), true);
            return ActionResult.SUCCESS;
        }

        if (res == CobblemonRideStatMaxer.ApplyResult.ALREADY_MAXED) {
            user.sendMessage(Text.literal("§eThese stats are already maxed."), true);
            return ActionResult.SUCCESS;
        }

        user.sendMessage(Text.literal("§cUse this on your Cobblemon Pokémon."), true);
        return ActionResult.PASS;
    }

    @Override
    public TypedActionResult<ItemStack> use(World world, PlayerEntity user, Hand hand) {
        ItemStack stack = user.getStackInHand(hand);
        if (world.isClient) return TypedActionResult.success(stack);

        Entity vehicle = user.getVehicle();
        if (vehicle != null) {
            CobblemonRideStatMaxer.ApplyResult res = CobblemonRideStatMaxer.maxAllModes(vehicle, user);

            if (res == CobblemonRideStatMaxer.ApplyResult.SUCCESS) {
                consumeOne(user, stack);
                user.sendMessage(Text.literal("§aAll mount stats are now maxed."), true);
                return TypedActionResult.success(stack);
            }

            if (res == CobblemonRideStatMaxer.ApplyResult.ALREADY_MAXED) {
                user.sendMessage(Text.literal("§eThese stats are already maxed."), true);
                return TypedActionResult.success(stack);
            }

            user.sendMessage(Text.literal("§cUse this on your Cobblemon Pokémon."), true);
            return TypedActionResult.pass(stack);
        }

        user.sendMessage(Text.literal("§eTip: Right-click your Pokémon (or use while riding it)."), true);
        return TypedActionResult.pass(stack);
    }

    private static void consumeOne(PlayerEntity user, ItemStack stack) {
        if (!user.getAbilities().creativeMode) stack.decrement(1);
    }
}

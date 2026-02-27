package com.factionvoid.journeymount;

import net.fabricmc.api.ModInitializer;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class JourneyMount implements ModInitializer {
    public static final String MOD_ID = "journeymount";
    public static final Logger LOGGER = LoggerFactory.getLogger(MOD_ID);

    @Override
    public void onInitialize() {
        LOGGER.info("Journey Mount initialized!");
        com.factionvoid.journeymount.registry.ModItems.init();
    }
}

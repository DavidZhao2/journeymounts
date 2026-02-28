  const $ = (id) => document.getElementById(id);
const FAKE_RIDE_DATA = [
  {
    name: "Alakazam",
    target: "1 Seat",
    modelFrom: "Base Cobblemon",
    rideStyle: "Horse",
    modes: {
      LAND:  { accel: "65-85", jump: "15-25", skill: "65-95", speed: "40-65", stamina: "45-100" }
    }
  },
  {
    name: "Beedrill",
    target: "1 Seat",
    modelFrom: "Base Cobblemon",
    rideStyle: "Bird",

    modes: {
      AIR:   { accel: "35-70", jump: "35-60",   skill: "55-80", speed: "30-65", stamina: "40-100" }
    }
  },
  {
    name: "Arbok",
    target: "1 Seat",
    modelFrom: "Base Cobblemon",
    rideStyle: "Horse",
    modes: {
      LAND:  { accel: "65-80", jump: "15-35", skill: "15-40", speed: "20-55", stamina: "35-100" }
    }
  },
  {
    name: "Clefable",
    target: "1 Seat",
    modelFrom: "Base Cobblemon",
    rideStyle: "Horse",
    modes: {
      LAND:  { accel: "35-55", jump: "25-35", skill: "35-55", speed: "30-55", stamina: "55-100" }
    }
  },
  {
    name: "Butterfree",
    target: "1 Seat",
    modelFrom: "Base Cobblemon",
    rideStyle: "Bird",
    modes: {
      LAND:  { accel: "40-75", jump: "20-65", skill: "35-65", speed: "40-65", stamina: "30-100" }
    }
  },
  {
    name: "Chansey",
    target: "1 Seat",
    modelFrom: "Base Cobblemon",
    rideStyle: "Horse",
    modes: {
      LAND:  { accel: "35-55", jump: "25-35", skill: "35-55", speed: "30-55", stamina: "50-100" }
    }
  },
  {
    name: "Cloyster",
    target: "1 Seat",
    modelFrom: "Base Cobblemon",
    rideStyle: "Horse & Dolphin",
    modes: {
      LAND:  { accel: "30-50", jump: "5-20", skill: "10-35", speed: "20-45", stamina: "15-50" },
      WATER: { accel: "45-65", jump: "30-50", skill: "50-85", speed: "35-65", stamina: "35-100" }
    }
  },
  {
    name: "Dodrio",
    target: "1 Seat",
    modelFrom: "Base Cobblemon",
    rideStyle: "Horse",
    modes: {
      LAND:  { accel: "60-85", jump: "25-45", skill: "35-75", speed: "55-95", stamina: "50-100" }
    }
  },
    {
    name: "Exeggutor",
    target: "1 Seat",
    modelFrom: "Base Cobblemon",
    rideStyle: "Horse",
    modes: {
      LAND: { accel: "20-40", jump: "5-20", skill: "15-35", speed: "20-35", stamina: "40-100" }
    }
  },
  {
    name: "Fearow",
    target: "1 Seat",
    modelFrom: "Base Cobblemon",
    rideStyle: "Horse & Bird",
    modes: {
      AIR:  { accel: "50-80", jump: "30-70", skill: "60-90", speed: "40-80", stamina: "35-100" },
      LAND: { accel: "45-65", jump: "10-25", skill: "20-40", speed: "30-45", stamina: "25-70" }
    }
  },
  {
    name: "Flareon",
    target: "1 Seat",
    modelFrom: "Base Cobblemon",
    rideStyle: "Horse",
    modes: {
      LAND: { accel: "25-55", jump: "25-40", skill: "30-55", speed: "25-55", stamina: "35-100" }
    }
  },
  {
    name: "Gengar",
    target: "1 Seat",
    modelFrom: "Base Cobblemon",
    rideStyle: "Horse & UFO",
    modes: {
      LAND: { accel: "35-55", jump: "20-35", skill: "45-65", speed: "25-40", stamina: "30-55" },
      AIR:  { accel: "25-45", jump: "25-45", skill: "55-80", speed: "20-65", stamina: "30-100" }
    }
  },
  {
    name: "Golbat",
    target: "1 Seat",
    modelFrom: "Base Cobblemon",
    rideStyle: "Horse & Bird",
    modes: {
      LAND: { accel: "10-40", jump: "10-20", skill: "80-100", speed: "10-30", stamina: "10-20" },
      AIR:  { accel: "45-70", jump: "45-75", skill: "25-55", speed: "35-65", stamina: "25-100" }
    }
  },
  {
  name: "Golem",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse",
  modes: {
    LAND: { accel: "20-35", jump: "10-20", skill: "25-40", speed: "18-28", stamina: "65-95" }
  }
  },
  {
  name: "Jolteon",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse",
  modes: {
    LAND: { accel: "45-75", jump: "25-45", skill: "35-60", speed: "40-70", stamina: "20-40" }
  }
  },
  {
  name: "Kangaskhan",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse",
  modes: {
    LAND: { accel: "50-75", jump: "25-45", skill: "30-50", speed: "45-65", stamina: "55-80" }
  }
  },
  {
  name: "Kingler",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse & Dolphin",
  modes: {
    LAND:  { accel: "25-50", jump: "10-25", skill: "20-40", speed: "20-40", stamina: "30-55" },
    WATER: { accel: "35-60", jump: "15-35", skill: "45-70", speed: "30-55", stamina: "40-75" }
  }
  },
  {
  name: "Lickitung",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse",
  modes: {
    LAND: { accel: "5-20", jump: "10-25", skill: "5-20", speed: "10-25", stamina: "25-45" }
  }
  },
  {
  name: "Machamp",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse",
  modes: {
    LAND: { accel: "50-70", jump: "55-75", skill: "70-90", speed: "45-65", stamina: "80-100" }
  }
  },
  {
  name: "Muk",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse",
  modes: {
    LAND: { accel: "20-40", jump: "10-25", skill: "20-40", speed: "25-45", stamina: "70-95" }
  }
  },
  {
  name: "Nidoking",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse",
  modes: {
    LAND: { accel: "65-75", jump: "30-50", skill: "40-70", speed: "40-55", stamina: "30-45" }
  }
  },
  {
  name: "Nidoqueen",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse",
  modes: {
    LAND: { accel: "50-70", jump: "30-40", skill: "30-60", speed: "30-40", stamina: "70-100" }
  }
  },
  {
  name: "Ninetales",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse",
  modes: {
    LAND: { accel: "65-85", jump: "40-60", skill: "40-75", speed: "45-70", stamina: "30-60" }
  }
  },
  {
  name: "Persian",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse",
  modes: {
    LAND: { accel: "60-80", jump: "35-55", skill: "70-90", speed: "60-80", stamina: "40-60" }
  }
  },
  {
  name: "Pidgeot",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse & Bird",
  modes: {
    LAND: { accel: "55-65", jump: "15-25", skill: "10-25", speed: "25-40", stamina: "20-30" },
    AIR:  { accel: "45-75", jump: "30-65", skill: "55-85", speed: "30-65", stamina: "30-65" }
  }
  },
  {
  name: "Poliwrath",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse",
  modes: {
    LAND: { accel: "35-55", jump: "35-55", skill: "50-70", speed: "30-50", stamina: "80-100" }
  }
  },
  {
  name: "Primeape",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse",
  modes: {
    LAND: { accel: "65-85", jump: "35-55", skill: "60-80", speed: "55-75", stamina: "45-65" }
  }
  },
  {
  name: "Slowbro",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse",
  modes: {
    LAND: { accel: "20-35", jump: "10-20", skill: "20-35", speed: "18-30", stamina: "65-95" }
  }
  },
  {
  name: "Snorlax",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse",
  modes: {
    LAND: { accel: "0-20", jump: "10-25", skill: "0-25", speed: "15-35", stamina: "70-100" }
  }
  },
  {
  name: "Tentacruel",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse & Dolphin",
  modes: {
    LAND:  { accel: "5-20", jump: "0-5", skill: "20-40", speed: "5-20", stamina: "30-60" },
    WATER: { accel: "40-65", jump: "25-55", skill: "45-75", speed: "30-60", stamina: "40-80" }
  }
  },
  {
  name: "Vaporeon",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse & Dolphin",
  modes: {
    LAND:  { accel: "25-50", jump: "20-35", skill: "35-60", speed: "20-45", stamina: "30-60" },
    WATER: { accel: "30-55", jump: "20-40", skill: "40-70", speed: "30-60", stamina: "35-65" }
  }
  },
  {
  name: "Victreebel",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse",
  modes: {
    LAND: { accel: "25-40", jump: "10-20", skill: "30-45", speed: "20-32", stamina: "55-85" }
  }
  },
  {
  name: "Vileplume",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse",
  modes: {
    LAND: { accel: "45-70", jump: "30-45", skill: "30-55", speed: "30-50", stamina: "45-75" }
  }
  },
  {
  name: "Wigglytuff",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse",
  modes: {
    LAND: { accel: "0-15", jump: "40-60", skill: "0-5", speed: "10-25", stamina: "20-40" }
  }
  },
  {
  name: "Ampharos",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse",
  modes: {
    LAND: { accel: "25-45", jump: "10-25", skill: "35-60", speed: "20-40", stamina: "30-55" }
  }
  },
  {
  name: "Azumarill",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse & Dolphin",
  modes: {
    LAND:  { accel: "20-35", jump: "15-30", skill: "25-45", speed: "20-40", stamina: "30-55" },
    WATER: { accel: "30-50", jump: "20-40", skill: "35-60", speed: "30-55", stamina: "35-65" }
  }
  },
  {
  name: "Blissey",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse",
  modes: {
    LAND: { accel: "5-20", jump: "5-15", skill: "10-25", speed: "10-25", stamina: "70-100" }
  }
  },
  {
  name: "Corsola",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Dolphin",
  modes: {
    WATER: { accel: "20-35", jump: "30-55", skill: "50-80", speed: "10-25", stamina: "45-85" }
  }
  },
  {
  name: "Crobat",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Bird",
  modes: {
    AIR: { accel: "45-70", jump: "45-70", skill: "45-70", speed: "55-85", stamina: "35-65" }
  }
  },
  {
  name: "Donphan",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse",
  modes: {
    LAND: { accel: "30-45", jump: "20-35", skill: "25-40", speed: "30-50", stamina: "60-90" }
  }
  },
  {
  name: "Espeon",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse",
  modes: {
    LAND: { accel: "35-60", jump: "20-35", skill: "45-70", speed: "45-75", stamina: "25-45" }
  }
  },
  {
  name: "Feraligatr",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse & Dolphin",
  modes: {
    LAND:  { accel: "30-55", jump: "25-40", skill: "25-45", speed: "30-50", stamina: "45-70" },
    WATER: { accel: "40-65", jump: "30-55", skill: "40-70", speed: "35-60", stamina: "45-80" }
  }
  },
  {
  name: "Furret",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse",
  modes: {
    LAND: { accel: "40-65", jump: "20-35", skill: "40-60", speed: "35-60", stamina: "30-50" }
  }
  },
  {
  name: "Granbull",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse",
  modes: {
    LAND: { accel: "35-55", jump: "20-35", skill: "20-40", speed: "25-45", stamina: "35-65" }
  }
  },
  {
  name: "Houndoom",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse",
  modes: {
    LAND: { accel: "55-80", jump: "25-45", skill: "30-60", speed: "40-65", stamina: "25-55" }
  }
  },
  {
  name: "Jumpluff",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse & Bird",
  modes: {
    LAND: { accel: "20-40", jump: "20-35", skill: "25-45", speed: "15-30", stamina: "20-40" },
    AIR:  { accel: "35-60", jump: "40-70", skill: "45-75", speed: "25-50", stamina: "30-60" }
  }
  },
  {
  name: "Kingdra",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Dolphin",
  modes: {
    WATER: { accel: "45-70", jump: "20-40", skill: "45-75", speed: "40-70", stamina: "35-70" }
  }
  },
  {
  name: "Lanturn",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Dolphin",
  modes: {
    WATER: { accel: "35-60", jump: "25-45", skill: "45-75", speed: "30-55", stamina: "40-80" }
  }
  },
  {
  name: "Ledian",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse & Bird",
  modes: {
    LAND: { accel: "25-40", jump: "10-25", skill: "20-40", speed: "20-35", stamina: "20-40" },
    AIR:  { accel: "30-55", jump: "35-60", skill: "55-85", speed: "25-45", stamina: "25-50" }
  }
  },
  {
  name: "Magcargo",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse",
  modes: {
    LAND: { accel: "0-15", jump: "0-5", skill: "25-45", speed: "1-10", stamina: "70-100" }
  }
  },
  {
  name: "Mantine",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Dolphin",
  modes: {
    WATER: { accel: "35-60", jump: "35-60", skill: "50-80", speed: "30-55", stamina: "40-80" }
  }
  },
  {
  name: "Meganium",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse",
  modes: {
    LAND: { accel: "35-60", jump: "30-55", skill: "20-45", speed: "25-45", stamina: "50-80" }
  }
  },
  {
  name: "Miltank",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse",
  modes: {
    LAND: { accel: "30-55", jump: "20-35", skill: "25-45", speed: "35-60", stamina: "50-80" }
  }
  },
  {
  name: "Misdreavus",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Hover",
  modes: {
    AIR: { accel: "30-50", jump: "10-20", skill: "50-75", speed: "20-35", stamina: "15-30" }
  }
  },
  {
  name: "Noctowl",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse & Bird",
  modes: {
    LAND: { accel: "35-55", jump: "10-25", skill: "15-30", speed: "20-35", stamina: "20-35" },
    AIR:  { accel: "30-55", jump: "30-55", skill: "45-75", speed: "25-55", stamina: "30-60" }
  }
  },
  {
  name: "Porygon2",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Hover",
  modes: {
    AIR: { accel: "20-40", jump: "10-25", skill: "40-60", speed: "25-45", stamina: "30-55" }
  }
  },
  {
  name: "Quagsire",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse & Boat",
  modes: {
    LAND:  { accel: "20-35", jump: "10-25", skill: "20-40", speed: "20-35", stamina: "35-60" },
    WATER: { accel: "30-50", jump: "10-25", skill: "30-50", speed: "25-40", stamina: "45-70" }
  }
  },
  {
  name: "Qwilfish",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Dolphin",
  modes: {
    WATER: { accel: "30-55", jump: "15-35", skill: "25-45", speed: "30-55", stamina: "30-60" }
  }
  },
  {
  name: "Scizor",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse & Bird",
  modes: {
    LAND: { accel: "55-75", jump: "15-30", skill: "45-70", speed: "40-65", stamina: "30-50" },
    AIR:  { accel: "40-60", jump: "25-45", skill: "50-75", speed: "35-55", stamina: "25-45" }
  }
  },
  {
  name: "Skarmory",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse & Bird",
  modes: {
    LAND: { accel: "20-35", jump: "10-25", skill: "20-35", speed: "20-35", stamina: "25-40" },
    AIR:  { accel: "40-70", jump: "35-60", skill: "55-80", speed: "35-65", stamina: "30-55" }
  }
  },
  {
  name: "Slowking",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse",
  modes: {
    LAND: { accel: "15-35", jump: "10-20", skill: "40-60", speed: "20-40", stamina: "55-85" }
  }
  },
  {
  name: "Stantler",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse",
  modes: {
    LAND: { accel: "40-65", jump: "25-45", skill: "30-55", speed: "50-75", stamina: "40-70" }
  }
  },
  {
  name: "Steelix",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse",
  modes: {
    LAND: { accel: "15-35", jump: "0-10", skill: "35-60", speed: "10-30", stamina: "60-100" }
  }
  },
  {
  name: "Typhlosion",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse",
  modes: {
    LAND: { accel: "45-70", jump: "25-40", skill: "25-45", speed: "40-60", stamina: "35-60" }
  }
  },
  {
  name: "Tyranitar",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse",
  modes: {
    LAND: { accel: "30-55", jump: "15-30", skill: "40-60", speed: "20-35", stamina: "70-100" }
  }
  },
  {
  name: "Umbreon",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse",
  modes: {
    LAND: { accel: "25-45", jump: "15-25", skill: "40-65", speed: "25-50", stamina: "45-70" }
  }
  },
  {
  name: "Wobbuffet",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse",
  modes: {
    LAND: { accel: "5-25", jump: "0-10", skill: "20-35", speed: "5-25", stamina: "45-75" }
  }
  },
  {
  name: "Xatu",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse & Bird",
  modes: {
    LAND: { accel: "10-30", jump: "10-25", skill: "30-50", speed: "10-25", stamina: "25-45" },
    AIR:  { accel: "25-45", jump: "30-55", skill: "45-70", speed: "25-50", stamina: "35-65" }
  }
  },
  {
  name: "Yanma",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse & Bird",
  modes: {
    LAND: { accel: "20-40", jump: "15-30", skill: "20-35", speed: "10-25", stamina: "15-30" },
    AIR:  { accel: "40-70", jump: "25-45", skill: "45-75", speed: "30-60", stamina: "20-40" }
  }
  },
  {
  name: "Absol",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse",
  modes: {
    LAND: { accel: "30-55", jump: "25-45", skill: "40-70", speed: "30-55", stamina: "30-60" }
  }
  },
  {
  name: "Aggron",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse",
  modes: {
    LAND: { accel: "20-45", jump: "20-40", skill: "35-65", speed: "20-45", stamina: "45-80" }
  }
  },
  {
  name: "Armaldo",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse & Dolphin",
  modes: {
    LAND:  { accel: "15-35", jump: "15-30", skill: "30-55", speed: "15-35", stamina: "40-70" },
    WATER: { accel: "20-45", jump: "20-40", skill: "30-60", speed: "25-50", stamina: "45-75" }
  }
  },
  {
  name: "Blaziken",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse",
  modes: {
    LAND: { accel: "40-70", jump: "40-70", skill: "40-70", speed: "35-65", stamina: "30-55" }
  }
  },
  {
  name: "Crawdaunt",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse & Dolphin",
  modes: {
    LAND:  { accel: "15-35", jump: "15-30", skill: "25-45", speed: "10-25", stamina: "25-50" },
    WATER: { accel: "30-50", jump: "25-45", skill: "40-70", speed: "30-55", stamina: "40-75" }
  }
  },
  {
  name: "Exploud",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse",
  modes: {
    LAND: { accel: "20-40", jump: "15-30", skill: "25-45", speed: "15-35", stamina: "30-55" }
  }
  },
  {
  name: "Gardevoir",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse",
  modes: {
    LAND: { accel: "25-50", jump: "15-30", skill: "35-65", speed: "20-45", stamina: "25-50" }
  }
  },
  {
  name: "Hariyama",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse",
  modes: {
    LAND: { accel: "15-35", jump: "10-25", skill: "30-55", speed: "15-35", stamina: "45-80" }
  }
  },
  {
  name: "Ludicolo",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse & Dolphin",
  modes: {
    LAND:  { accel: "20-40", jump: "15-30", skill: "25-45", speed: "20-40", stamina: "30-55" },
    WATER: { accel: "30-55", jump: "20-35", skill: "40-70", speed: "30-55", stamina: "35-65" }
  }
  },
  {
  name: "Manectric",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse",
  modes: {
    LAND: { accel: "35-65", jump: "20-40", skill: "30-55", speed: "35-65", stamina: "25-45" }
  }
  },
  {
  name: "Medicham",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse",
  modes: {
    LAND: { accel: "35-60", jump: "25-50", skill: "55-80", speed: "35-65", stamina: "30-55" }
  }
  },
  {
  name: "Mightyena",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse",
  modes: {
    LAND: { accel: "25-50", jump: "20-40", skill: "30-55", speed: "30-55", stamina: "25-45" }
  }
  },
  {
  name: "Milotic",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Dolphin",
  modes: {
    WATER: { accel: "35-65", jump: "25-45", skill: "55-80", speed: "40-70", stamina: "45-85" }
  }
  },
  {
  name: "Pelipper",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse & Bird",
  modes: {
    LAND: { accel: "15-35", jump: "15-30", skill: "25-40", speed: "15-30", stamina: "20-40" },
    AIR:  { accel: "40-70", jump: "30-55", skill: "45-75", speed: "35-65", stamina: "25-50" }
  }
  },
  {
  name: "Regice",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse",
  modes: {
    LAND: { accel: "10-30", jump: "10-25", skill: "35-60", speed: "15-30", stamina: "40-80" }
  }
  },
  {
  name: "Regirock",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse",
  modes: {
    LAND: { accel: "10-30", jump: "10-25", skill: "35-60", speed: "15-30", stamina: "40-80" }
  }
  },
  {
  name: "Registeel",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse",
  modes: {
    LAND: { accel: "10-30", jump: "10-25", skill: "35-60", speed: "15-30", stamina: "40-80" }
  }
  },
  {
  name: "Sceptile",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse",
  modes: {
    LAND: { accel: "40-70", jump: "35-60", skill: "45-75", speed: "40-70", stamina: "30-55" }
  }
  },
  {
  name: "Shiftry",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse",
  modes: {
    LAND: { accel: "25-45", jump: "20-40", skill: "40-70", speed: "25-50", stamina: "30-60" }
  }
  },
  {
  name: "Swampert",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse & Dolphin",
  modes: {
    LAND:  { accel: "35-65", jump: "30-55", skill: "40-70", speed: "35-65", stamina: "40-75" },
    WATER: { accel: "35-65", jump: "25-45", skill: "45-75", speed: "35-65", stamina: "45-80" }
  }
  },
  {
  name: "Swellow",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse & Bird",
  modes: {
    LAND: { accel: "15-35", jump: "15-30", skill: "25-40", speed: "15-30", stamina: "20-40" },
    AIR:  { accel: "40-70", jump: "30-55", skill: "45-75", speed: "35-65", stamina: "25-50" }
  }
  },
  {
  name: "Torkoal",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse",
  modes: {
    LAND: { accel: "10-25", jump: "10-20", skill: "30-55", speed: "10-25", stamina: "50-90" }
  }
  },
  {
  name: "Walrein",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse & Dolphin",
  modes: {
    LAND:  { accel: "15-35", jump: "10-20", skill: "30-55", speed: "10-25", stamina: "40-80" },
    WATER: { accel: "30-55", jump: "25-40", skill: "45-75", speed: "30-60", stamina: "50-90" }
  }
  },
  {
  name: "Whiscash",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Dolphin",
  modes: {
    WATER: { accel: "25-50", jump: "20-40", skill: "35-65", speed: "25-55", stamina: "40-75" }
  }
  },
  {
  name: "Bibarel",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse & Dolphin",
  modes: {
    LAND:  { accel: "20-40", jump: "15-30", skill: "25-45", speed: "15-30", stamina: "35-65" },
    WATER: { accel: "25-45", jump: "15-30", skill: "30-55", speed: "25-45", stamina: "35-65" }
  }
  },
  {
  name: "Drapion",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse",
  modes: {
    LAND: { accel: "20-40", jump: "15-30", skill: "35-60", speed: "20-40", stamina: "40-70" }
  }
  },
  {
  name: "Electivire",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse",
  modes: {
    LAND: { accel: "30-55", jump: "25-40", skill: "40-70", speed: "30-60", stamina: "40-75" }
  }
  },
  {
  name: "Empoleon",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse & Dolphin",
  modes: {
    LAND:  { accel: "15-35", jump: "15-30", skill: "30-55", speed: "15-35", stamina: "30-60" },
    WATER: { accel: "30-60", jump: "25-45", skill: "45-75", speed: "30-60", stamina: "40-80" }
  }
  },
  {
  name: "Floatzel",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Dolphin",
  modes: {
    WATER: { accel: "40-70", jump: "25-45", skill: "45-75", speed: "35-65", stamina: "35-65" }
  }
  },
  {
  name: "Gallade",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse",
  modes: {
    LAND: { accel: "40-65", jump: "30-55", skill: "55-80", speed: "40-70", stamina: "30-55" }
  }
  },
  {
  name: "Glaceon",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse",
  modes: {
    LAND: { accel: "20-45", jump: "20-35", skill: "35-60", speed: "20-45", stamina: "25-50" }
  }
  },
  {
  name: "Gliscor",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse & Bird",
  modes: {
    AIR:  { accel: "45-75", jump: "30-65", skill: "55-85", speed: "30-65", stamina: "30-65" },
    LAND: { accel: "55-65", jump: "15-25", skill: "10-25", speed: "25-40", stamina: "20-30" }
  }
  },
  {
  name: "Hippowdon",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse",
  modes: {
    LAND: { accel: "15-35", jump: "15-30", skill: "25-45", speed: "20-40", stamina: "60-90" }
  }
  },
  {
  name: "Honchkrow",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse & Bird",
  modes: {
    AIR:  { accel: "35-60", jump: "30-55", skill: "50-80", speed: "30-55", stamina: "35-70" },
    LAND: { accel: "10-30", jump: "10-25", skill: "25-45", speed: "10-25", stamina: "20-40" }
  }
  },
  {
  name: "Infernape",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse",
  modes: {
    LAND: { accel: "30-55", jump: "25-45", skill: "35-65", speed: "30-55", stamina: "30-60" }
  }
  },
  {
  name: "Leafeon",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse",
  modes: {
    LAND: { accel: "20-45", jump: "20-35", skill: "35-60", speed: "20-45", stamina: "25-50" }
  }
  },
  {
  name: "Lopunny",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse",
  modes: {
    LAND: { accel: "20-40", jump: "20-40", skill: "45-70", speed: "20-40", stamina: "25-55" }
  }
  },
  {
  name: "Lucario",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse",
  modes: {
    LAND: { accel: "25-50", jump: "25-45", skill: "40-70", speed: "25-50", stamina: "35-65" }
  }
  },
  {
  name: "Lumineon",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Dolphin",
  modes: {
    WATER: { accel: "25-50", jump: "25-45", skill: "40-70", speed: "30-55", stamina: "35-65" }
  }
  },
  {
  name: "Luxray",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse",
  modes: {
    LAND: { accel: "25-50", jump: "20-40", skill: "40-70", speed: "25-50", stamina: "35-65" }
  }
  },
  {
  name: "Magmortar",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse",
  modes: {
    LAND: { accel: "20-45", jump: "15-30", skill: "30-55", speed: "15-40", stamina: "35-65" }
  }
  },
  {
  name: "Probopass",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Bird",
  modes: {
    AIR: { accel: "20-45", jump: "35-60", skill: "35-60", speed: "20-40", stamina: "55-90" }
  }
  },
  {
  name: "Rampardos",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse",
  modes: {
    LAND: { accel: "20-45", jump: "20-35", skill: "35-60", speed: "15-35", stamina: "40-75" }
  }
  },
  {
  name: "Regigigas",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse",
  modes: {
    LAND: { accel: "10-25", jump: "10-22", skill: "60-85", speed: "18-32", stamina: "70-100" }
  }
  },
  {
  name: "Tangrowth",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse",
  modes: {
    LAND: { accel: "15-30", jump: "10-25", skill: "35-60", speed: "15-30", stamina: "45-80" }
  }
  },
  {
  name: "Torterra",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse",
  modes: {
    LAND: { accel: "15-35", jump: "15-30", skill: "35-60", speed: "15-35", stamina: "55-90" }
  }
  },
  {
  name: "Toxicroak",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse",
  modes: {
    LAND: { accel: "20-45", jump: "25-45", skill: "35-60", speed: "20-45", stamina: "30-55" }
  }
  },
  {
  name: "Yanmega",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse & Bird",
  modes: {
    AIR:  { accel: "45-75", jump: "30-55", skill: "55-80", speed: "35-70", stamina: "35-65" },
    LAND: { accel: "20-40", jump: "15-30", skill: "25-45", speed: "12-30", stamina: "20-40" }
  }
  },
  {
  name: "Accelgor",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse",
  modes: {
    LAND: { accel: "30-60", jump: "15-30", skill: "40-70", speed: "30-55", stamina: "25-45" }
  }
  },
  {
  name: "Amoonguss",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse",
  modes: {
    LAND: { accel: "10-25", jump: "10-20", skill: "30-55", speed: "10-25", stamina: "40-70" }
  }
  },
  {
  name: "Archeops",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse & Bird",
  modes: {
    LAND: { accel: "20-40", jump: "20-35", skill: "30-55", speed: "25-45", stamina: "35-65" },
    AIR:  { accel: "35-60", jump: "35-60", skill: "45-75", speed: "35-65", stamina: "30-55" }
  }
  },
  {
  name: "Basculin",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Dolphin",
  modes: {
    WATER: { accel: "35-65", jump: "20-40", skill: "40-70", speed: "35-65", stamina: "35-70" }
  }
  },
  {
  name: "Beartic",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse",
  modes: {
    LAND: { accel: "20-45", jump: "20-35", skill: "30-55", speed: "20-45", stamina: "50-85" }
  }
  },
  {
  name: "Carracosta",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse & Dolphin",
  modes: {
    LAND:  { accel: "15-35", jump: "10-25", skill: "30-55", speed: "15-35", stamina: "45-80" },
    WATER: { accel: "20-40", jump: "20-35", skill: "40-70", speed: "25-50", stamina: "55-90" }
  }
  },
  {
  name: "Chandelure",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Bird",
  modes: {
    AIR: { accel: "25-45", jump: "20-35", skill: "45-70", speed: "20-40", stamina: "35-65" }
  }
  },
  {
  name: "Cofagrigus",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse",
  modes: {
    LAND: { accel: "15-35", jump: "15-30", skill: "30-55", speed: "15-35", stamina: "40-70" }
  }
  },
  {
  name: "Conkeldurr",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse",
  modes: {
    LAND: { accel: "10-25", jump: "10-25", skill: "30-55", speed: "10-25", stamina: "60-95" }
  }
  },
  {
  name: "Druddigon",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse",
  modes: {
    LAND: { accel: "20-45", jump: "20-35", skill: "35-65", speed: "20-45", stamina: "45-75" }
  }
  },
  {
  name: "Durant",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse",
  modes: {
    LAND: { accel: "20-40", jump: "10-25", skill: "40-70", speed: "15-35", stamina: "40-75" }
  }
  },
  {
  name: "Eelektross",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Dolphin",
  modes: {
    WATER: { accel: "35-65", jump: "20-40", skill: "45-75", speed: "30-60", stamina: "45-75" }
  }
  },
  {
  name: "Emboar",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse",
  modes: {
    LAND: { accel: "25-45", jump: "20-35", skill: "35-60", speed: "25-45", stamina: "45-80" }
  }
  },
  {
  name: "Escavalier",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Hover",
  modes: {
    AIR: { accel: "20-40", jump: "20-35", skill: "40-70", speed: "20-40", stamina: "30-60" }
  }
  },
  {
  name: "Excadrill",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse",
  modes: {
    LAND: { accel: "30-60", jump: "20-35", skill: "35-60", speed: "25-55", stamina: "35-60" }
  }
  },
  {
  name: "Ferrothorn",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse",
  modes: {
    LAND: { accel: "5-20", jump: "5-15", skill: "45-70", speed: "5-20", stamina: "50-80" }
  }
  },
  {
  name: "Galvantula",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse",
  modes: {
    LAND: { accel: "25-45", jump: "20-35", skill: "35-60", speed: "25-50", stamina: "30-55" }
  }
  },
  {
  name: "Garbodor",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse",
  modes: {
    LAND: { accel: "10-25", jump: "10-20", skill: "20-40", speed: "10-25", stamina: "45-80" }
  }
  },
  {
  name: "Gigalith",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse",
  modes: {
    LAND: { accel: "10-30", jump: "15-30", skill: "35-60", speed: "10-30", stamina: "55-90" }
  }
  },
  {
  name: "Gothitelle",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse",
  modes: {
    LAND: { accel: "20-45", jump: "15-30", skill: "35-65", speed: "20-45", stamina: "30-60" }
  }
  },
  {
  name: "Haxorus",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse",
  modes: {
    LAND: { accel: "30-55", jump: "25-45", skill: "35-65", speed: "30-55", stamina: "45-80" }
  }
  },
  {
  name: "Heatmor",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse",
  modes: {
    LAND: { accel: "15-35", jump: "15-30", skill: "30-55", speed: "15-35", stamina: "40-70" }
  }
  },
  {
  name: "Jellicent",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Dolphin",
  modes: {
    WATER: { accel: "25-50", jump: "20-35", skill: "35-65", speed: "25-50", stamina: "45-80" }
  }
  },
  {
  name: "Krookodile",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse",
  modes: {
    LAND: { accel: "25-50", jump: "20-40", skill: "40-70", speed: "30-55", stamina: "45-80" }
  }
  },
  {
  name: "Liepard",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse",
  modes: {
    LAND: { accel: "30-55", jump: "20-35", skill: "35-60", speed: "30-55", stamina: "30-55" }
  }
  },
  {
  name: "Mienshao",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse",
  modes: {
    LAND: { accel: "35-60", jump: "20-35", skill: "45-70", speed: "35-60", stamina: "30-55" }
  }
  },
  {
  name: "Reuniclus",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Hover",
  modes: {
    AIR: { accel: "20-40", jump: "20-35", skill: "40-70", speed: "20-40", stamina: "30-60" }
  }
  },
  {
  name: "Samurott",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse & Dolphin",
  modes: {
    LAND:  { accel: "20-40", jump: "15-30", skill: "30-55", speed: "20-40", stamina: "40-70" },
    WATER: { accel: "30-55", jump: "25-45", skill: "45-75", speed: "30-55", stamina: "50-85" }
  }
  },
  {
  name: "Sawsbuck",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse",
  modes: {
    LAND: { accel: "25-50", jump: "25-45", skill: "35-60", speed: "25-50", stamina: "35-65" }
  }
  },
  {
  name: "Stoutland",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse",
  modes: {
    LAND: { accel: "25-45", jump: "20-35", skill: "35-60", speed: "25-50", stamina: "50-80" }
  }
  },
  {
  name: "Swanna",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Bird & Dolphin",
  modes: {
    AIR:   { accel: "30-55", jump: "35-60", skill: "40-70", speed: "30-55", stamina: "35-65" },
    WATER: { accel: "25-50", jump: "30-55", skill: "40-70", speed: "25-50", stamina: "35-70" }
  }
  },
  {
  name: "Swoobat",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Bird & Horse",
  modes: {
    AIR:  { accel: "35-60", jump: "35-60", skill: "45-70", speed: "35-60", stamina: "35-65" },
    LAND: { accel: "20-40", jump: "20-35", skill: "25-45", speed: "20-40", stamina: "25-45" }
  }
  },
  {
  name: "Unfezant",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Bird & Horse",
  modes: {
    AIR:  { accel: "35-60", jump: "35-60", skill: "45-70", speed: "35-60", stamina: "35-65" },
    LAND: { accel: "20-40", jump: "20-35", skill: "25-45", speed: "20-40", stamina: "25-45" }
  }
  },
  {
  name: "Zoroark",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse",
  modes: {
    LAND: { accel: "30-55", jump: "20-35", skill: "40-65", speed: "30-55", stamina: "35-65" }
  }
  },
  {
  name: "Aurorus",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse",
  modes: {
    LAND: { accel: "30-55", jump: "15-30", skill: "25-45", speed: "20-40", stamina: "50-80" }
  }
  },
  {
  name: "Avalugg",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse",
  modes: {
    LAND: { accel: "15-30", jump: "5-15", skill: "40-70", speed: "10-25", stamina: "60-90" }
  }
  },
  {
  name: "Barbaracle",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse & Dolphin",
  modes: {
    LAND:  { accel: "30-50", jump: "15-30", skill: "35-55", speed: "25-40", stamina: "40-65" },
    WATER: { accel: "35-60", jump: "25-45", skill: "40-65", speed: "30-55", stamina: "45-75" }
  }
  },
  {
  name: "Chesnaught",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse",
  modes: {
    LAND: { accel: "30-55", jump: "20-35", skill: "35-60", speed: "25-45", stamina: "55-85" }
  }
  },
  {
  name: "Clawitzer",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Dolphin",
  modes: {
    WATER: { accel: "45-70", jump: "25-45", skill: "55-80", speed: "45-75", stamina: "30-55" }
  }
  },
  {
  name: "Delphox",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse",
  modes: {
    LAND: { accel: "35-60", jump: "20-35", skill: "50-75", speed: "30-55", stamina: "35-60" }
  }
  },
  {
  name: "Dragalge",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Dolphin",
  modes: {
    WATER: { accel: "35-60", jump: "20-40", skill: "40-65", speed: "30-55", stamina: "45-75" }
  }
  },
  {
  name: "Florges",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Hover",
  modes: {
    AIR: { accel: "25-45", jump: "15-35", skill: "50-80", speed: "20-40", stamina: "25-55" }
  }
  },
  {
  name: "Furfrou",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse",
  modes: {
    LAND: { accel: "40-65", jump: "25-40", skill: "30-55", speed: "45-70", stamina: "35-60" }
  }
  },
  {
  name: "Goodra",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse",
  modes: {
    LAND: { accel: "30-55", jump: "15-30", skill: "40-70", speed: "20-40", stamina: "45-75" }
  }
  },
  {
  name: "Greninja",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse & Dolphin",
  modes: {
    LAND:  { accel: "55-80", jump: "35-55", skill: "50-75", speed: "45-75", stamina: "35-55" },
    WATER: { accel: "60-85", jump: "35-65", skill: "60-85", speed: "50-80", stamina: "40-65" }
  }
  },
  {
  name: "Malamar",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Dolphin",
  modes: {
    WATER: { accel: "40-65", jump: "25-45", skill: "45-70", speed: "45-70", stamina: "35-60" }
  }
  },
  {
  name: "Talonflame",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Bird & Horse",
  modes: {
    AIR:  { accel: "50-80", jump: "35-65", skill: "55-85", speed: "45-85", stamina: "35-65" },
    LAND: { accel: "35-55", jump: "15-30", skill: "20-40", speed: "25-45", stamina: "20-35" }
  }
  },
  {
  name: "Trevenant",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse",
  modes: {
    LAND: { accel: "25-45", jump: "10-25", skill: "45-75", speed: "20-35", stamina: "40-70" }
  }
  },
  {
  name: "Tyrunt",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse",
  modes: {
    LAND: { accel: "25-40", jump: "20-35", skill: "40-60", speed: "25-40", stamina: "35-55" }
  }
  },
  {
  name: "Vivillon",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Bird",
  modes: {
    AIR: { accel: "30-55", jump: "40-65", skill: "60-90", speed: "25-45", stamina: "20-45" }
  }
  },
  {
  name: "Araquanid",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse & Dolphin",
  modes: {
    LAND:  { accel: "15-35", jump: "5-20", skill: "25-45", speed: "15-30", stamina: "30-55" },
    WATER: { accel: "40-65", jump: "25-45", skill: "45-75", speed: "30-55", stamina: "40-70" }
  }
  },
  {
  name: "Bewear",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse",
  modes: {
    LAND: { accel: "40-65", jump: "20-30", skill: "25-45", speed: "35-55", stamina: "55-85" }
  }
  },
  {
  name: "Bruxish",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Dolphin",
  modes: {
    WATER: { accel: "40-65", jump: "25-45", skill: "45-70", speed: "40-70", stamina: "35-60" }
  }
  },
  {
  name: "Crabominable",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse",
  modes: {
    LAND: { accel: "15-30", jump: "5-15", skill: "25-45", speed: "15-30", stamina: "45-80" }
  }
  },
  {
  name: "Decidueye",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Bird & Horse",
  modes: {
    AIR:  { accel: "35-60", jump: "35-60", skill: "60-85", speed: "30-55", stamina: "35-65" },
    LAND: { accel: "25-45", jump: "15-30", skill: "40-60", speed: "20-40", stamina: "30-55" }
  }
  },
  {
  name: "Drampa",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse",
  modes: {
    LAND: { accel: "15-35", jump: "5-15", skill: "30-55", speed: "20-40", stamina: "60-90" }
  }
  },
  {
  name: "Golisopod",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse & Dolphin",
  modes: {
    LAND:  { accel: "20-40", jump: "15-30", skill: "45-70", speed: "25-40", stamina: "40-70" },
    WATER: { accel: "35-60", jump: "25-45", skill: "40-65", speed: "35-65", stamina: "45-80" }
  }
  },
  {
  name: "Incineroar",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse",
  modes: {
    LAND: { accel: "40-70", jump: "25-40", skill: "45-70", speed: "35-60", stamina: "45-80" }
  }
  },
  {
  name: "Kommo-o",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse",
  modes: {
    LAND: { accel: "40-60", jump: "20-35", skill: "45-70", speed: "35-55", stamina: "50-80" }
  }
  },
  {
  name: "Naganadel",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Jet",
  modes: {
    AIR: { accel: "55-85", jump: "45-75", skill: "60-90", speed: "60-90", stamina: "35-65" }
  }
  },
  {
  name: "Primarina",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse & Dolphin",
  modes: {
    LAND:  { accel: "10-30", jump: "5-15", skill: "30-55", speed: "10-25", stamina: "25-45" },
    WATER: { accel: "35-60", jump: "25-45", skill: "50-80", speed: "30-55", stamina: "40-75" }
  }
  },
  {
  name: "Salazzle",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse",
  modes: {
    LAND: { accel: "40-65", jump: "25-45", skill: "40-65", speed: "45-70", stamina: "35-60" }
  }
  },
  {
  name: "Toucannon",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Bird & Horse",
  modes: {
    AIR:  { accel: "35-60", jump: "30-55", skill: "45-70", speed: "30-55", stamina: "25-55" },
    LAND: { accel: "20-40", jump: "10-25", skill: "10-25", speed: "20-35", stamina: "20-35" }
  }
  },
  {
  name: "Toxapex",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Boat",
  modes: {
    WATER: { accel: "20-35", jump: "10-20", skill: "45-70", speed: "10-25", stamina: "50-90" }
  }
  },
  {
  name: "Turtonator",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse",
  modes: {
    LAND: { accel: "20-40", jump: "5-15", skill: "25-45", speed: "15-30", stamina: "55-85" }
  }
  },
  {
  name: "Arctozolt",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse",
  modes: {
    LAND: { accel: "30-55", jump: "15-30", skill: "30-55", speed: "30-50", stamina: "45-75" }
  }
  },
  {
  name: "Boltund",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse",
  modes: {
    LAND: { accel: "55-80", jump: "30-50", skill: "35-55", speed: "60-85", stamina: "35-55" }
  }
  },
  {
  name: "Centiskorch",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse",
  modes: {
    LAND: { accel: "35-60", jump: "20-35", skill: "35-60", speed: "35-65", stamina: "50-85" }
  }
  },
  {
  name: "Cinderace",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse",
  modes: {
    LAND: { accel: "55-85", jump: "30-50", skill: "45-70", speed: "55-85", stamina: "35-55" }
  }
  },
  {
  name: "Copperajah",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse",
  modes: {
    LAND: { accel: "20-35", jump: "5-15", skill: "25-45", speed: "15-30", stamina: "70-100" }
  }
  },
  {
  name: "Dracovish",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse & Boat",
  modes: {
    LAND:  { accel: "25-45", jump: "10-25", skill: "30-55", speed: "25-45", stamina: "45-75" },
    WATER: { accel: "35-60", jump: "30-55", skill: "40-70", speed: "40-65", stamina: "50-85" }
  }
  },
  {
  name: "Dracozolt",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse",
  modes: {
    LAND: { accel: "35-60", jump: "20-35", skill: "30-55", speed: "35-55", stamina: "40-70" }
  }
  },
  {
  name: "Drednaw",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse & Dolphin",
  modes: {
    LAND:  { accel: "35-60", jump: "20-40", skill: "30-50", speed: "30-55", stamina: "45-80" },
    WATER: { accel: "35-55", jump: "20-35", skill: "35-60", speed: "40-65", stamina: "45-80" }
  }
  },
  {
  name: "Dubwool",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse",
  modes: {
    LAND: { accel: "40-65", jump: "25-45", skill: "30-55", speed: "45-70", stamina: "40-70" }
  }
  },
  {
  name: "Eiscue",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse & Boat",
  modes: {
    LAND:  { accel: "20-40", jump: "10-20", skill: "25-45", speed: "20-35", stamina: "30-55" },
    WATER: { accel: "30-50", jump: "20-35", skill: "30-55", speed: "35-55", stamina: "35-65" }
  }
  },
  {
  name: "Grapploct",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Dolphin",
  modes: {
    WATER: { accel: "40-65", jump: "15-35", skill: "55-85", speed: "35-60", stamina: "50-80" }
  }
  },
  {
  name: "Grimmsnarl",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse",
  modes: {
    LAND: { accel: "35-60", jump: "20-40", skill: "40-70", speed: "25-45", stamina: "40-75" }
  }
  },
  {
  name: "Hatterene",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse",
  modes: {
    LAND: { accel: "20-40", jump: "10-25", skill: "45-75", speed: "25-45", stamina: "30-55" }
  }
  },
  {
  name: "Inteleon",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse & Dolphin",
  modes: {
    LAND:  { accel: "45-70", jump: "25-45", skill: "45-75", speed: "55-80", stamina: "25-45" },
    WATER: { accel: "40-65", jump: "35-55", skill: "45-75", speed: "45-70", stamina: "30-55" }
  }
  },
  {
  name: "Mrrime",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse",
  modes: {
    LAND: { accel: "20-40", jump: "15-30", skill: "35-60", speed: "25-40", stamina: "30-55" }
  }
  },
  {
  name: "Obstagoon",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse",
  modes: {
    LAND: { accel: "40-65", jump: "20-40", skill: "40-70", speed: "30-55", stamina: "40-75" }
  }
  },
  {
  name: "Regidrago",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse",
  modes: {
    LAND: { accel: "25-45", jump: "25-45", skill: "35-60", speed: "35-55", stamina: "45-80" }
  }
  },
  {
  name: "Regieleki",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse & Boat & Jet",
  modes: {
    LAND:  { accel: "65-75", jump: "30-50", skill: "40-70", speed: "40-55", stamina: "30-45" },
    WATER: { accel: "75-85", jump: "40-80", skill: "10-25", speed: "35-60", stamina: "5-10" },
    AIR:   { accel: "50-70", jump: "20-70", skill: "50-60", speed: "70-80", stamina: "30-50" }
  }
  },
  {
  name: "Rillaboom",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse",
  modes: {
    LAND: { accel: "30-55", jump: "20-35", skill: "40-65", speed: "30-50", stamina: "55-85" }
  }
  },
  {
  name: "Sandaconda",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse",
  modes: {
    LAND: { accel: "15-35", jump: "5-20", skill: "30-55", speed: "20-40", stamina: "55-85" }
  }
  },
  {
  name: "Stonjourner",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse",
  modes: {
    LAND: { accel: "20-35", jump: "5-15", skill: "20-40", speed: "15-30", stamina: "60-90" }
  }
  },
  {
  name: "Thievul",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse",
  modes: {
    LAND: { accel: "35-55", jump: "20-35", skill: "45-70", speed: "40-60", stamina: "30-55" }
  }
  },
  {
  name: "Zarude",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse",
  modes: {
    LAND: { accel: "55-80", jump: "30-50", skill: "45-65", speed: "60-85", stamina: "40-65" }
  }
  },
  {
  name: "Basculegion",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Dolphin",
  modes: {
    WATER: { accel: "40-65", jump: "25-45", skill: "35-60", speed: "45-75", stamina: "30-65" }
  }
  },
  {
  name: "Overqwil",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Dolphin",
  modes: {
    WATER: { accel: "30-50", jump: "15-35", skill: "40-70", speed: "35-60", stamina: "45-80" }
  }
  },
  {
  name: "Annihilape",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse",
  modes: {
    LAND: { accel: "40-65", jump: "25-40", skill: "45-75", speed: "45-70", stamina: "50-85" }
  }
  },
  {
  name: "Armarouge",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse",
  modes: {
    LAND: { accel: "40-65", jump: "20-35", skill: "50-80", speed: "35-55", stamina: "35-60" }
  }
  },
  {
  name: "Bellibolt",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Jet & Horse",
  modes: {
    AIR:  { accel: "45-75", jump: "45-80", skill: "50-80", speed: "55-90", stamina: "35-65" },
    LAND: { accel: "30-55", jump: "20-40", skill: "35-60", speed: "20-40", stamina: "25-50" }
  }
  },
  {
  name: "Ceruledge",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse",
  modes: {
    LAND: { accel: "45-70", jump: "25-40", skill: "60-85", speed: "35-60", stamina: "30-55" }
  }
  },
  {
  name: "Cetitan",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse",
  modes: {
    LAND: { accel: "20-45", jump: "10-25", skill: "30-55", speed: "20-40", stamina: "45-80" }
  }
  },
  {
  name: "Clodsire",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse",
  modes: {
    LAND: { accel: "10-25", jump: "0-10", skill: "20-40", speed: "5-20", stamina: "60-90" }
  }
  },
  {
  name: "Garganacl",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse",
  modes: {
    LAND: { accel: "10-25", jump: "10-20", skill: "30-55", speed: "10-30", stamina: "55-85" }
  }
  },
  {
  name: "Ironleaves",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse",
  modes: {
    LAND: { accel: "55-80", jump: "25-45", skill: "45-70", speed: "55-85", stamina: "35-60" }
  }
  },
  {
  name: "Klawf",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse",
  modes: {
    LAND: { accel: "20-35", jump: "10-25", skill: "35-55", speed: "20-40", stamina: "45-75" }
  }
  },
  {
  name: "Mabosstiff",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse",
  modes: {
    LAND: { accel: "35-55", jump: "20-35", skill: "30-50", speed: "35-60", stamina: "40-70" }
  }
  },
  {
  name: "Meowscarada",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse",
  modes: {
    LAND: { accel: "55-80", jump: "35-60", skill: "55-85", speed: "55-80", stamina: "35-60" }
  }
  },
  {
  name: "Oinkologne",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse",
  modes: {
    LAND: { accel: "20-40", jump: "15-30", skill: "20-40", speed: "25-45", stamina: "40-70" }
  }
  },
  {
  name: "Palafin",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Dolphin",
  modes: {
    WATER: { accel: "45-70", jump: "35-60", skill: "50-80", speed: "45-75", stamina: "40-70" }
  }
  },
  {
  name: "Quaquaval",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse & Dolphin",
  modes: {
    LAND:  { accel: "45-70", jump: "25-45", skill: "55-80", speed: "40-65", stamina: "35-60" },
    WATER: { accel: "50-75", jump: "30-55", skill: "60-85", speed: "45-75", stamina: "40-70" }
  }
  },
  {
  name: "Skeledirge",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse",
  modes: {
    LAND: { accel: "20-40", jump: "20-35", skill: "45-75", speed: "25-45", stamina: "45-80" }
  }
  },
  {
  name: "Spidops",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse",
  modes: {
    LAND: { accel: "20-35", jump: "15-30", skill: "35-65", speed: "20-40", stamina: "40-65" }
  }
  },
  {
  name: "Toedscruel",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse",
  modes: {
    LAND: { accel: "20-40", jump: "15-30", skill: "30-60", speed: "30-55", stamina: "35-65" }
  }
  },
  {
  name: "Veluza",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Dolphin",
  modes: {
    WATER: { accel: "50-80", jump: "20-40", skill: "40-70", speed: "45-75", stamina: "35-70" }
  }
  },
  {
  name: "Walkingwake",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse & Dolphin",
  modes: {
    LAND:  { accel: "35-60", jump: "25-45", skill: "25-45", speed: "35-60", stamina: "40-70" },
    WATER: { accel: "40-70", jump: "30-55", skill: "35-60", speed: "45-75", stamina: "45-75" }
  }
  },
  {
  name: "Appletun",
  target: "1 Seat",
  modelFrom: "Missingmon",
  rideStyle: "Horse",
  modes: {
    LAND: { accel: "25-40", jump: "10-20", skill: "20-35", speed: "25-40", stamina: "50-70" }
  }
  },
  {
  name: "Archaludon",
  target: "1 Seat",
  modelFrom: "Missingmon",
  rideStyle: "Horse",
  modes: {
    LAND: { accel: "25-40", jump: "15-30", skill: "25-40", speed: "25-40", stamina: "60-80" }
  }
  },
  {
  name: "Buzzwole",
  target: "1 Seat",
  modelFrom: "Missingmon",
  rideStyle: "Horse",
  modes: {
    LAND: { accel: "30-45", jump: "20-35", skill: "30-45", speed: "30-45", stamina: "60-85" }
  }
  },
  {
  name: "Cobalion",
  target: "1 Seat",
  modelFrom: "Missingmon",
  rideStyle: "Horse",
  modes: {
    LAND: { accel: "35-50", jump: "30-45", skill: "35-55", speed: "35-55", stamina: "70-95" }
  }
  },
  {
  name: "Ironcrown",
  target: "1 Seat",
  modelFrom: "Missingmon",
  rideStyle: "Horse",
  modes: {
    LAND: { accel: "35-50", jump: "30-45", skill: "35-55", speed: "35-55", stamina: "70-95" }
  }
  },
  {
  name: "Melmetal",
  target: "1 Seat",
  modelFrom: "Missingmon",
  rideStyle: "Horse",
  modes: {
    LAND: { accel: "20-35", jump: "15-25", skill: "25-40", speed: "20-35", stamina: "80-110" }
  }
  },
  {
  name: "Screamtail",
  target: "1 Seat",
  modelFrom: "Missingmon",
  rideStyle: "Horse",
  modes: {
    LAND: { accel: "30-45", jump: "20-35", skill: "30-45", speed: "25-40", stamina: "55-75" }
  }
  },
  {
  name: "Stakataka",
  target: "1 Seat",
  modelFrom: "Missingmon",
  rideStyle: "Horse",
  modes: {
    LAND: { accel: "15-25", jump: "5-15", skill: "20-30", speed: "15-25", stamina: "90-120" }
  }
  },
  {
  name: "Terrakion",
  target: "1 Seat",
  modelFrom: "Missingmon",
  rideStyle: "Horse",
  modes: {
    LAND: { accel: "35-50", jump: "30-45", skill: "35-55", speed: "35-55", stamina: "70-95" }
  }
  },
];

const PAGES = [
  {
    section: "Start Here",
    pages: [
      {
        id: "home",
        title: "Home",
        badge: "",
        render: () => `
          <h1>CJM Wiki</h1>
          <p class="muted">Cobblemon Journey Mount Wiki Page</p>

          <h2>Quick Links</h2>
          <ul>
            <li><a href="#install">Install</a></li>
            <li><a href="#ride-stats">Ride Stats</a></li>
            <li><a href="#mount-list">Mount List</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
        `
      },
      {
        id: "install",
        title: "Install",
        badge: "",
          render: () => `
            <h1>Install</h1>
          `
      }
    ]
  },
  {
    section: "Content",
    pages: [
      {
        id: "ride-stats",
        title: "Ride Stats",
        badge: "STATS",
        render: () => renderRideStatsPage()
      },
      {
        id: "mount-list",
        title: "Mount List",
        badge: "WIP",
          render: () => `
            <h1>Mount List</h1>
            <div class="mountGrid">
              ${FAKE_RIDE_DATA.map(p => {
                const modes = Object.keys(p.modes).map(m => `<span class="mountMode">${escapeHtml(m)}</span>`).join("");
                return `
                  <div class="mountCard">
                    <div class="mountCardHeader">
                      <span class="mountName">${escapeHtml(p.name)}</span>
                      <span class="mountModes">${modes}</span>
                    </div>
                    <div class="mountModel">Model: <span>${escapeHtml(p.modelFrom)}</span></div>
                    <div class="mountRideStyle">Ride Style: <span>${escapeHtml(p.rideStyle || "—")}</span></div>
                  </div>
                `;
              }).join("")}
            </div>
          `
      }
    ]
  },
  {
    section: "Support",
    pages: [
      {
        id: "faq",
        title: "FAQ",
          badge: "WIP",
          render: () => `
            <h1>FAQ</h1>
          `
      }
    ]
  }
];

// ---------- Helpers ----------
function escapeHtml(s){
  return String(s)
    .replaceAll("&","&amp;")
    .replaceAll("<","&lt;")
    .replaceAll(">","&gt;")
    .replaceAll('"',"&quot;")
    .replaceAll("'","&#039;");
}

function getAllPagesFlat(){
  const out = [];
  for (const sec of PAGES){
    for (const p of sec.pages){
      out.push({ ...p, section: sec.section });
    }
  }
  return out;
}

function getRoute(){
  const raw = (location.hash || "#home").slice(1).trim();
  return raw || "home";
}

function setActiveNav(route){
  document.querySelectorAll(".nav a").forEach(a => {
    a.classList.toggle("active", a.dataset.id === route);
  });
}

function setCrumb(title){
  $("crumbTitle").textContent = title;
}

function setStatus(text){
  $("pillStatus").textContent = text;
}

// ---------- Sidebar ----------
function buildNav(filterText=""){
  const navEl = $("nav");
  navEl.innerHTML = "";

  const q = filterText.trim().toLowerCase();
  const pages = getAllPagesFlat();

  const sections = new Map();
  for (const p of pages){
    if (!sections.has(p.section)) sections.set(p.section, []);
    sections.get(p.section).push(p);
  }

  for (const [sectionName, sectionPages] of sections.entries()){
    const filtered = !q ? sectionPages : sectionPages.filter(p => {
      const hay = (p.title + " " + (p.badge||"")).toLowerCase();
      return hay.includes(q);
    });
    if (!filtered.length) continue;

    const sec = document.createElement("div");
    sec.className = "section";
    sec.textContent = sectionName;
    navEl.appendChild(sec);

    for (const p of filtered){
      const a = document.createElement("a");
      a.href = `#${p.id}`;
      a.dataset.id = p.id;
      a.innerHTML = `<span>${escapeHtml(p.title)}</span>` + (p.badge ? `<span class="badge">${escapeHtml(p.badge)}</span>` : "");
      navEl.appendChild(a);
    }
  }

  setStatus(q ? "Filtering sidebar…" : "Ready");
  setActiveNav(getRoute());
}

// ---------- Page Render ----------
function renderPage(){
  const route = getRoute();
  const pages = getAllPagesFlat();
  const found = pages.find(p => p.id === route) || pages.find(p => p.id === "home");

  // Schedule DOM update for next frame for smoother navigation
  requestAnimationFrame(() => {
    $("page").innerHTML = found ? found.render() : `<h1>404</h1><p>Page not found.</p>`;
    setCrumb(found ? found.title : "Home");
    setActiveNav(route);
    if (route === 'ride-stats') {
      wireRideStatsControls();
      updateRideStatsDisplay();
    }
  });
}

// ---------- Ride Stats ----------
function renderModeCell(mode, modeStats){
  if (!modeStats) {
    return `
      <div class="modeCell none" aria-disabled="true">
        <div class="modeTitle muted">${mode}</div>
        <div class="modeEmpty muted small">—</div>
      </div>
    `;
  }
  return `
    <div class="modeCell">
      <div class="modeTitle">${mode}</div>
      <div class="modeGrid">
        <div class="k">ACCEL</div><div class="v">${escapeHtml(modeStats.accel)}</div>
        <div class="k">JUMP</div><div class="v">${escapeHtml(modeStats.jump)}</div>
        <div class="k">SKILL</div><div class="v">${escapeHtml(modeStats.skill)}</div>
        <div class="k">SPEED</div><div class="v">${escapeHtml(modeStats.speed)}</div>
        <div class="k">STA</div><div class="v">${escapeHtml(modeStats.stamina)}</div>
      </div>
    </div>
  `;
}

function renderRideStatsPage(){
  return `
    <h1>Ride Stats</h1>
    <p class="muted">All Ride Stats for Version 1.7.2</p>
    <!-- Controls -->
    <div class="rideControls" style="margin-bottom:20px;">
      <div style="display:flex;gap:12px;flex-wrap:wrap;align-items:center;">
        <input id="rideSearchInput" placeholder="Search Pokémon by name" style="padding:8px;min-width:200px;" />
        <select id="rideSortSelect" style="padding:8px;">
          <option value="UNSORTED">Unsorted</option>
          <option value="FASTEST">Fastest Rides</option>
          <option value="SLOWEST">Slowest Rides</option>
        </select>

        <div style="display:flex;gap:10px;flex-wrap:wrap;align-items:center;">
          <label style="display:flex;align-items:center;gap:6px;cursor:pointer;">
            <input type="checkbox" id="filterLand" class="rideFilterCheckbox" value="LAND" style="cursor:pointer;" />
            <span style="font-size:14px;">Land</span>
          </label>
          <label style="display:flex;align-items:center;gap:6px;cursor:pointer;">
            <input type="checkbox" id="filterAir" class="rideFilterCheckbox" value="AIR" style="cursor:pointer;" />
            <span style="font-size:14px;">Air</span>
          </label>
          <label style="display:flex;align-items:center;gap:6px;cursor:pointer;">
            <input type="checkbox" id="filterWater" class="rideFilterCheckbox" value="WATER" style="cursor:pointer;" />
            <span style="font-size:14px;">Water</span>
          </label>
        </div>
      </div>
    </div>

    <!-- Desktop table -->
    <div class="tableWrap rideWrap">
      <table class="rideTable">
        <thead>
          <tr>
            <th>Pokémon</th>
            <th>LAND</th>
            <th>AIR</th>
            <th>WATER</th>
          </tr>
        </thead>
        <tbody id="rideTableBody">
          ${FAKE_RIDE_DATA.map((p) => `
            <tr>
              <td class="pokeCell">
                <strong>${escapeHtml(p.name)}</strong>
                <div class="muted small">${escapeHtml(p.target)}</div>
                <div class="modelLine">
                  <span class="modelTag">Model</span>
                  <span class="muted small">${escapeHtml(p.modelFrom)}</span>
                </div>

                <div class="modelLine">
                  <span class="modelTag">Ride Style</span>
                  <span class="muted small">${escapeHtml(p.rideStyle || "—")}</span>
                </div>
              </td>
              <td>${renderModeCell("LAND", p.modes.LAND)}</td>
              <td>${renderModeCell("AIR", p.modes.AIR)}</td>
              <td>${renderModeCell("WATER", p.modes.WATER)}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>

    <!-- Mobile cards -->
    <div class="rideCards" id="rideCards">
      ${FAKE_RIDE_DATA.map((p) => `
        <div class="rideCard">
          <div class="rideCardTop">
            <div>
              <div class="rideCardName">${escapeHtml(p.name)}</div>
              <div class="muted small">${escapeHtml(p.target)}</div>
              <div class="modelLine">
                <span class="modelTag">Model</span>
                <span class="muted small">${escapeHtml(p.modelFrom)}</span>
              </div>
            </div>
          </div>

          <div class="rideModes">
            ${renderModeCell("LAND", p.modes.LAND)}
            ${renderModeCell("AIR", p.modes.AIR)}
            ${renderModeCell("WATER", p.modes.WATER)}
          </div>
        </div>
      `).join("")}
    </div>

    <h2>Credits</h2>
    <p class="muted small">
        Faction_Void was here
    </p>
  `;
}

// ---------- Ride stats helpers (search / filter / sort) ----------
function parseStatRange(val){
  if (!val) return 0;
  try {
    const parts = String(val).split("-").map(s => s.trim());
    const last = parts[parts.length-1];
    const n = Number(last.replace(/[^0-9.]/g, ''));
    return Number.isFinite(n) ? n : 0;
  } catch (e){ return 0; }
}

function getRideScoreForSort(p){
  let best = 0;
  for (const m of Object.values(p.modes||{})){
    best = Math.max(best, parseStatRange(m.speed));
  }
  return best;
}

function getFilteredRides(){
  const qEl = document.getElementById('rideSearchInput');
  const sortEl = document.getElementById('rideSortSelect');
  const q = qEl ? qEl.value.trim().toLowerCase() : '';
  const sort = sortEl ? sortEl.value : 'UNSORTED';

  // Get selected filter checkboxes
  const selectedFilters = [];
  const landCheck = document.getElementById('filterLand');
  const airCheck = document.getElementById('filterAir');
  const waterCheck = document.getElementById('filterWater');
  if (landCheck && landCheck.checked) selectedFilters.push('LAND');
  if (airCheck && airCheck.checked) selectedFilters.push('AIR');
  if (waterCheck && waterCheck.checked) selectedFilters.push('WATER');

  let list = FAKE_RIDE_DATA.slice();

  // Apply search filter
  if (q) list = list.filter(p => p.name.toLowerCase().includes(q));

  // Apply mode filters (show only pokémon that have ALL selected modes)
  if (selectedFilters.length > 0){
    list = list.filter(p => {
      const modesAvailable = Object.keys(p.modes || {});
      return selectedFilters.every(f => modesAvailable.includes(f));
    });
  }

  // Apply sorting
  if (sort === 'FASTEST'){
    list.sort((a,b) => getRideScoreForSort(b) - getRideScoreForSort(a));
  } else if (sort === 'SLOWEST'){
    list.sort((a,b) => getRideScoreForSort(a) - getRideScoreForSort(b));
  }

  return list;
}

function updateRideStatsDisplay(){
  const tableBody = document.getElementById('rideTableBody');
  const cardsWrap = document.getElementById('rideCards');
  if (!tableBody || !cardsWrap) return;

  const list = getFilteredRides();

  tableBody.innerHTML = list.map((p) => `
    <tr>
      <td class="pokeCell">
        <strong>${escapeHtml(p.name)}</strong>
        <div class="muted small">${escapeHtml(p.target)}</div>
        <div class="modelLine">
          <span class="modelTag">Model</span>
          <span class="muted small">${escapeHtml(p.modelFrom)}</span>
        </div>

        <div class="modelLine">
          <span class="modelTag">Ride Style</span>
          <span class="muted small">${escapeHtml(p.rideStyle || "—")}</span>
        </div>
      </td>
      <td>${renderModeCell("LAND", p.modes.LAND)}</td>
      <td>${renderModeCell("AIR", p.modes.AIR)}</td>
      <td>${renderModeCell("WATER", p.modes.WATER)}</td>
    </tr>
  `).join("");

  cardsWrap.innerHTML = list.map((p) => `
    <div class="rideCard">
      <div class="rideCardTop">
        <div>
          <div class="rideCardName">${escapeHtml(p.name)}</div>
          <div class="muted small">${escapeHtml(p.target)}</div>
          <div class="modelLine">
            <span class="modelTag">Model</span>
            <span class="muted small">${escapeHtml(p.modelFrom)}</span>
          </div>
        </div>
      </div>

      <div class="rideModes">
        ${renderModeCell("LAND", p.modes.LAND)}
        ${renderModeCell("AIR", p.modes.AIR)}
        ${renderModeCell("WATER", p.modes.WATER)}
      </div>
    </div>
  `).join("");
}

function wireRideStatsControls(){
  const qEl = document.getElementById('rideSearchInput');
  const sortEl = document.getElementById('rideSortSelect');
  const landCheck = document.getElementById('filterLand');
  const airCheck = document.getElementById('filterAir');
  const waterCheck = document.getElementById('filterWater');

  const handleUpdate = () => updateRideStatsDisplay();

  if (qEl){
    qEl.removeEventListener('input', handleUpdate);
    qEl.addEventListener('input', handleUpdate);
  }
  if (sortEl){
    sortEl.removeEventListener('change', handleUpdate);
    sortEl.addEventListener('change', handleUpdate);
  }
  if (landCheck){
    landCheck.removeEventListener('change', handleUpdate);
    landCheck.addEventListener('change', handleUpdate);
  }
  if (airCheck){
    airCheck.removeEventListener('change', handleUpdate);
    airCheck.addEventListener('change', handleUpdate);
  }
  if (waterCheck){
    waterCheck.removeEventListener('change', handleUpdate);
    waterCheck.addEventListener('change', handleUpdate);
  }
}

// ---------- Mobile menu ----------
function wireMobileMenu(){
  const btn = $("mobileBtn");
  const sidebar = $("sidebar");
  btn.addEventListener("click", () => sidebar.classList.toggle("open"));
  window.addEventListener("hashchange", () => sidebar.classList.remove("open"));
}

// ---------- Init ----------
function init(){
  $("year").textContent = String(new Date().getFullYear());

  buildNav("");

  $("searchInput").addEventListener("input", (e) => {
    buildNav(e.target.value || "");
  });

  window.addEventListener("hashchange", renderPage);

  wireMobileMenu();
  renderPage();
}

init();

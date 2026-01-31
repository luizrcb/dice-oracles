import DiceOracles, { moduleName } from "./DiceOracles.js";

Hooks.once("init", async function () {
  let diceOracles = new DiceOracles();
  window.game.diceOracles = diceOracles;

  Object.assign(CONFIG.fontDefinitions, {
    "Medieval Sharp": {
      editor: true,
      fonts: [
        {
          urls: [
            "modules/dice-oracles/fonts/medieval_sharp/MedievalSharp-Regular.ttf",
          ],
          weight: "normal",
          style: "normal",
        },
      ],
    },
  });

  game.keybindings.register(moduleName, "dice-oracles_keybinding", {
    name: "Dice Oracles shortcut",
    hint: "This will trigger the Dice Oracles modal.",
    editable: [{ key: "KeyO", modifiers: [] }],
    onDown: () => {
      window.game.diceOracles.consultOracles();
    },
    onUp: () => {},
    restricted: true, // Restrict this Keybinding to gamemaster only?
    reservedModifiers: [],
    precedence: CONST.KEYBINDING_PRECEDENCE.NORMAL,
  });

  game.settings.register(moduleName, "oracleDice", {
    scope: "client", // "world" = GM only, "client" = per user
    config: false, // Show in configuration view
    type: String, // Data type: String, Number, Boolean, etc
    default: "quick-d6",
    choices: ["quick-d6", "bell-2d6", "d10-oracle", "bell-2d10", "skilled-d20"],
  });

  game.settings.register(moduleName, "permission", {
    name: game.i18n.localize("DiceOracles.Settings.PermissionName"),
    hint: game.i18n.localize("DiceOracles.Settings.PermissionHint"),
    scope: "world",
    config: true,
    type: String,
    choices: {
      onlygm: game.i18n.localize("DiceOracles.SettingsPermissionOnlyGM"),
      players: game.i18n.localize("DiceOracles.SettingsPermissionPlayers"),
    },
    default: "onlygm",
    restricted: true,
    onChange: foundry.utils.debounce(() => window.location.reload(), 100),
  });
});

Hooks.on("getSceneControlButtons", function (controls) {
  const permission = game.settings.get(moduleName, "permission");
  if (!game.user.isGM && permission !== "players") {
    return;
  }

  controls.tokens.tools["dice-oracles_button"] = {
    icon: "fa-solid fa-dice-six",
    name: "dice-oracles_button",
    title: "DiceOracles.Title",
    button: true,
    onChange: (event, active) => {
      if (active) window.game.diceOracles.consultOracles();
    },
  };
});

Hooks.once("diceSoNiceReady", (dice3d) => {
  const mysticOracle = {
    name: "dice-oracles",
    description: "Mystic Oracle",
    category: "Dice Oracles themes",
    foreground: ["#D4AF37", "#FDB827", "#FDB827"],
    background: ["#4B0082", "#460752", "#483D8B"],
    outline: "#000000",
    edge: "#D4AF37",
    texture: "stars",
    material: "metal",
    font: "Medieval Sharp",
    fontColor: "#FDB827",
    shadow: "rgba(212, 175, 55, 0.5)",
  };
  dice3d.addColorset(mysticOracle);
});

Hooks.once("ready", async function () {});

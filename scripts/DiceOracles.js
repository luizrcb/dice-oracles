const { DialogV2 } = foundry.applications.api;

export const moduleName = "dice-oracles";

export default class DiceOracles {
  async consultOracles() {
    const ORACLE_CONFIGS = {
      "quick-d6": {
        label: "DiceOracles.Label.quick-d6",
        formula: `1d6[dice-oracles]`,
        showGrade: true,
        table: {
          1: {
            outcome: "DiceOracles.quick-d6.1.outcome",
            description: "DiceOracles.quick-d6.1.description",
            grade: "DiceOracles.quick-d6.1.grade",
          },
          2: {
            outcome: "DiceOracles.quick-d6.2.outcome",
            description: "DiceOracles.quick-d6.2.description",
            grade: "DiceOracles.quick-d6.2.grade",
          },
          3: {
            outcome: "DiceOracles.quick-d6.3.outcome",
            description: "DiceOracles.quick-d6.3.description",
            grade: "DiceOracles.quick-d6.3.grade",
          },
          4: {
            outcome: "DiceOracles.quick-d6.4.outcome",
            description: "DiceOracles.quick-d6.4.description",
            grade: "DiceOracles.quick-d6.4.grade",
          },
          5: {
            outcome: "DiceOracles.quick-d6.5.outcome",
            description: "DiceOracles.quick-d6.5.description",
            grade: "DiceOracles.quick-d6.5.grade",
          },
          6: {
            outcome: "DiceOracles.quick-d6.6.outcome",
            description: "DiceOracles.quick-d6.6.description",
            grade: "DiceOracles.quick-d6.6.grade",
          },
        },
      },
      "bell-2d6": {
        label: "DiceOracles.Label.bell-2d6",
        formula: `2d6[dice-oracles]`,
        showGrade: true,
        table: {
          2: {
            outcome: "DiceOracles.bell-2d6.2.outcome",
            description: "DiceOracles.bell-2d6.2.description",
            grade: "DiceOracles.bell-2d6.2.grade",
          },
          3: {
            outcome: "DiceOracles.bell-2d6.3.outcome",
            description: "DiceOracles.bell-2d6.3.description",
            grade: "DiceOracles.bell-2d6.3.grade",
          },
          4: {
            outcome: "DiceOracles.bell-2d6.4.outcome",
            description: "DiceOracles.bell-2d6.4.description",
            grade: "DiceOracles.bell-2d6.4.grade",
          },
          5: {
            outcome: "DiceOracles.bell-2d6.5.outcome",
            description: "DiceOracles.bell-2d6.5.description",
            grade: "DiceOracles.bell-2d6.5.grade",
          },
          6: {
            outcome: "DiceOracles.bell-2d6.6.outcome",
            description: "DiceOracles.bell-2d6.6.description",
            grade: "DiceOracles.bell-2d6.6.grade",
          },
          7: {
            outcome: "DiceOracles.bell-2d6.7.outcome",
            description: "DiceOracles.bell-2d6.7.description",
            grade: "DiceOracles.bell-2d6.7.grade",
          },
          8: {
            outcome: "DiceOracles.bell-2d6.8.outcome",
            description: "DiceOracles.bell-2d6.8.description",
            grade: "DiceOracles.bell-2d6.8.grade",
          },
          9: {
            outcome: "DiceOracles.bell-2d6.9.outcome",
            description: "DiceOracles.bell-2d6.9.description",
            grade: "DiceOracles.bell-2d6.9.grade",
          },
          10: {
            outcome: "DiceOracles.bell-2d6.10.outcome",
            description: "DiceOracles.bell-2d6.10.description",
            grade: "DiceOracles.bell-2d6.10.grade",
          },
          11: {
            outcome: "DiceOracles.bell-2d6.11.outcome",
            description: "DiceOracles.bell-2d6.11.description",
            grade: "DiceOracles.bell-2d6.11.grade",
          },
          12: {
            outcome: "DiceOracles.bell-2d6.12.outcome",
            description: "DiceOracles.bell-2d6.12.description",
            grade: "DiceOracles.bell-2d6.12.grade",
          },
        },
      },
      "d10-oracle": {
        label: "DiceOracles.Label.d10-oracle",
        formula: `1d10[dice-oracles]`,
        showGrade: true,
        table: {
          1: {
            outcome: "DiceOracles.d10-oracle.1.outcome",
            description: "DiceOracles.d10-oracle.1.description",
            grade: "DiceOracles.d10-oracle.1.grade",
          },
          2: {
            outcome: "DiceOracles.d10-oracle.2.outcome",
            description: "DiceOracles.d10-oracle.2.description",
            grade: "DiceOracles.d10-oracle.2.grade",
          },
          3: {
            outcome: "DiceOracles.d10-oracle.3.outcome",
            description: "DiceOracles.d10-oracle.3.description",
            grade: "DiceOracles.d10-oracle.3.grade",
          },
          4: {
            outcome: "DiceOracles.d10-oracle.4.outcome",
            description: "DiceOracles.d10-oracle.4.description",
            grade: "DiceOracles.d10-oracle.4.grade",
          },
          5: {
            outcome: "DiceOracles.d10-oracle.5.outcome",
            description: "DiceOracles.d10-oracle.5.description",
            grade: "DiceOracles.d10-oracle.5.grade",
          },
          6: {
            outcome: "DiceOracles.d10-oracle.6.outcome",
            description: "DiceOracles.d10-oracle.6.description",
            grade: "DiceOracles.d10-oracle.6.grade",
          },
          7: {
            outcome: "DiceOracles.d10-oracle.7.outcome",
            description: "DiceOracles.d10-oracle.7.description",
            grade: "DiceOracles.d10-oracle.7.grade",
          },
          8: {
            outcome: "DiceOracles.d10-oracle.8.outcome",
            description: "DiceOracles.d10-oracle.8.description",
            grade: "DiceOracles.d10-oracle.8.grade",
          },
          9: {
            outcome: "DiceOracles.d10-oracle.9.outcome",
            description: "DiceOracles.d10-oracle.9.description",
            grade: "DiceOracles.d10-oracle.9.grade",
          },
          10: {
            outcome: "DiceOracles.d10-oracle.10.outcome",
            description: "DiceOracles.d10-oracle.10.description",
            grade: "DiceOracles.d10-oracle.10.grade",
          },
        },
      },
      "bell-2d10": {
        label: "DiceOracles.Label.bell-2d10",
        formula: `2d10[dice-oracles]`,
        showGrade: false,
        table: {
          2: {
            outcome: "DiceOracles.bell-2d10.2.outcome",
            description: "DiceOracles.bell-2d10.2.description",
          },
          3: {
            outcome: "DiceOracles.bell-2d10.3.outcome",
            description: "DiceOracles.bell-2d10.3.description",
          },
          4: {
            outcome: "DiceOracles.bell-2d10.4.outcome",
            description: "DiceOracles.bell-2d10.4.description",
          },
          5: {
            outcome: "DiceOracles.bell-2d10.5.outcome",
            description: "DiceOracles.bell-2d10.5.description",
          },
          6: {
            outcome: "DiceOracles.bell-2d10.6.outcome",
            description: "DiceOracles.bell-2d10.6.description",
          },
          7: {
            outcome: "DiceOracles.bell-2d10.7.outcome",
            description: "DiceOracles.bell-2d10.7.description",
          },
          8: {
            outcome: "DiceOracles.bell-2d10.8.outcome",
            description: "DiceOracles.bell-2d10.8.description",
          },
          9: {
            outcome: "DiceOracles.bell-2d10.9.outcome",
            description: "DiceOracles.bell-2d10.9.description",
          },
          10: {
            outcome: "DiceOracles.bell-2d10.10.outcome",
            description: "DiceOracles.bell-2d10.10.description",
          },
          11: {
            outcome: "DiceOracles.bell-2d10.11.outcome",
            description: "DiceOracles.bell-2d10.11.description",
          },
          12: {
            outcome: "DiceOracles.bell-2d10.12.outcome",
            description: "DiceOracles.bell-2d10.12.description",
          },
          13: {
            outcome: "DiceOracles.bell-2d10.13.outcome",
            description: "DiceOracles.bell-2d10.13.description",
          },
          14: {
            outcome: "DiceOracles.bell-2d10.14.outcome",
            description: "DiceOracles.bell-2d10.14.description",
          },
          15: {
            outcome: "DiceOracles.bell-2d10.15.outcome",
            description: "DiceOracles.bell-2d10.15.description",
          },
          16: {
            outcome: "DiceOracles.bell-2d10.16.outcome",
            description: "DiceOracles.bell-2d10.16.description",
          },
          17: {
            outcome: "DiceOracles.bell-2d10.17.outcome",
            description: "DiceOracles.bell-2d10.17.description",
          },
          18: {
            outcome: "DiceOracles.bell-2d10.18.outcome",
            description: "DiceOracles.bell-2d10.18.description",
          },
          19: {
            outcome: "DiceOracles.bell-2d10.19.outcome",
            description: "DiceOracles.bell-2d10.19.description",
          },
          20: {
            outcome: "DiceOracles.bell-2d10.20.outcome",
            description: "DiceOracles.bell-2d10.20.description",
          },
        },
      },
      "skilled-d20": {
        label: "DiceOracles.Label.skilled-d20",
        formula: `1d20[dice-oracles]`,
        showGrade: false,
        table: {
          1: {
            outcome: "DiceOracles.skilled-d20.1.outcome",
            description: "DiceOracles.skilled-d20.1.description",
          },
          2: {
            outcome: "DiceOracles.skilled-d20.2.outcome",
            description: "DiceOracles.skilled-d20.2.description",
          },
          3: {
            outcome: "DiceOracles.skilled-d20.3.outcome",
            description: "DiceOracles.skilled-d20.3.description",
          },
          4: {
            outcome: "DiceOracles.skilled-d20.4.outcome",
            description: "DiceOracles.skilled-d20.4.description",
          },
          5: {
            outcome: "DiceOracles.skilled-d20.5.outcome",
            description: "DiceOracles.skilled-d20.5.description",
          },
          6: {
            outcome: "DiceOracles.skilled-d20.6.outcome",
            description: "DiceOracles.skilled-d20.6.description",
          },
          7: {
            outcome: "DiceOracles.skilled-d20.7.outcome",
            description: "DiceOracles.skilled-d20.7.description",
          },
          8: {
            outcome: "DiceOracles.skilled-d20.8.outcome",
            description: "DiceOracles.skilled-d20.8.description",
          },
          9: {
            outcome: "DiceOracles.skilled-d20.9.outcome",
            description: "DiceOracles.skilled-d20.9.description",
          },
          10: {
            outcome: "DiceOracles.skilled-d20.10.outcome",
            description: "DiceOracles.skilled-d20.10.description",
          },
          11: {
            outcome: "DiceOracles.skilled-d20.11.outcome",
            description: "DiceOracles.skilled-d20.11.description",
          },
          12: {
            outcome: "DiceOracles.skilled-d20.12.outcome",
            description: "DiceOracles.skilled-d20.12.description",
          },
          13: {
            outcome: "DiceOracles.skilled-d20.13.outcome",
            description: "DiceOracles.skilled-d20.13.description",
          },
          14: {
            outcome: "DiceOracles.skilled-d20.14.outcome",
            description: "DiceOracles.skilled-d20.14.description",
          },
          15: {
            outcome: "DiceOracles.skilled-d20.15.outcome",
            description: "DiceOracles.skilled-d20.15.description",
          },
          16: {
            outcome: "DiceOracles.skilled-d20.16.outcome",
            description: "DiceOracles.skilled-d20.16.description",
          },
          17: {
            outcome: "DiceOracles.skilled-d20.17.outcome",
            description: "DiceOracles.skilled-d20.17.description",
          },
          18: {
            outcome: "DiceOracles.skilled-d20.18.outcome",
            description: "DiceOracles.skilled-d20.18.description",
          },
          19: {
            outcome: "DiceOracles.skilled-d20.19.outcome",
            description: "DiceOracles.skilled-d20.19.description",
          },
          20: {
            outcome: "DiceOracles.skilled-d20.20.outcome",
            description: "DiceOracles.skilled-d20.20.description",
          },
        },
      },
    };

    const ROLL_MODES = {
      disadvantage: { label: "DiceOracles.RollDisadvantage" },
      normal: { label: "DiceOracles.RollNormal" },
      advantage: { label: "DiceOracles.RollAdvantage" },
    };

    const defaultOracle =
      game.settings.get(moduleName, "oracleDice") || "quick-d6";

    const content = `
<fieldset>
  <legend>${game.i18n.localize("DiceOracles.Title")}</legend>

  <div class="form-group">
    <label>${game.i18n.localize("DiceOracles.Type")}</label>
    <select name="oracleType" class="form-control">
      ${Object.entries(ORACLE_CONFIGS)
        .map(
          ([key, config]) =>
            `<option value="${key}" ${key === defaultOracle ? "selected" : ""}>${game.i18n.localize(config.label)}</option>`,
        )
        .join("")}
    </select>
  </div>

  <div class="form-group">
    <label>${game.i18n.localize("DiceOracles.RollModifier")}</label>
    <input type="number" name="modifier" class="form-control" value="0">
  </div>

  <div class="form-group">
    <label>${game.i18n.localize("DiceOracles.RollMode")}</label>
    <select name="rollMode" class="form-control">
      ${Object.entries(ROLL_MODES)
        .map(
          ([key, mode]) =>
            `<option value="${key}" ${key === "normal" ? "selected" : ""}>${game.i18n.localize(mode.label)}</option>`,
        )
        .join("")}
    </select>
  </div>

  <div class="form-group">
    <label>${game.i18n.localize("DiceOracles.Question")}</label>
    <textarea name="question" class="form-control"></textarea>
  </div>
</fieldset>
`;

    const data = await DialogV2.wait({
      window: {
        title: game.i18n.localize("DiceOracles.Title"),
      },
      position: {
        width: 500,
        height: 380,
      },
      content,
      buttons: [
        {
          action: "roll",
          label: game.i18n.localize("DiceOracles.ConsultOracle"),
          icon: "fa-solid fa-dice",
          callback: (event, button) =>
            new foundry.applications.ux.FormDataExtended(button.form).object,
        },
      ],
      rejectClose: false,
      render: (event, dialog) => {
        const html = dialog.element;

        const questionArea = html.querySelector('textarea[name="question"]');
        if (questionArea) {
          questionArea.placeholder = game.i18n.localize('DiceOracles.QuestionPlaceholder');
        }

        const inputs = html.querySelectorAll("input, select, textarea");
        inputs.forEach((input) => {
          input.addEventListener("keydown", (e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              e.stopPropagation();

              const rollButton = html.querySelector(
                'button[data-action="roll"]',
              );
              if (rollButton) {
                rollButton.click();
              }
            }
          });
        });
      },
    });

    if (!data) return;

    await this.rollOracleDice(data, ORACLE_CONFIGS);
  }

  async rollOracleDice(
    { oracleType, modifier, rollMode, question },
    oracle_configs,
  ) {
    const config = oracle_configs[oracleType];
    if (!config) {
      return;
    }

    await game.settings.set(moduleName, "oracleDice", oracleType);

    const modValue = parseInt(modifier) || 0;

    let formula = config.formula;
    if (rollMode === "advantage" || rollMode === "disadvantage") {
      const keepOp = rollMode === "advantage" ? "kh" : "kl";
      formula = `{${config.formula}, ${config.formula}}${keepOp}`;
    }

    if (modValue !== 0) {
      const sign = modValue > 0 ? "+" : "";
      formula += `${sign}${modValue}`;
    }

    let roll;
    try {
      const sanitizedFormula = this.sanitizeExpression(formula);
      roll = new Roll(sanitizedFormula);
      await roll.evaluate();
    } catch (error) {
      console.error("Oracle roll error:", error);
      ui.notifications.error("Failed to roll oracle dice");
      return;
    }

    const rollTotal = roll.total;

    const tableKeys = Object.keys(config.table).map(Number);
    const minKey = Math.min(...tableKeys);
    const maxKey = Math.max(...tableKeys);

    const clampedResult = Math.max(minKey, Math.min(maxKey, rollTotal));

    const outcomeEntry = config.table[clampedResult];

    if (!outcomeEntry) {
      console.error(
        "No outcome found for result:",
        clampedResult,
        "in table:",
        config.table,
      );
      ui.notifications.error("Could not find oracle result");
      return;
    }

    const speaker = ChatMessage.getSpeaker({ alias: game.user.name });

    const outcome = game.i18n.localize(outcomeEntry.outcome);
    const description = game.i18n.localize(outcomeEntry.description);
    const grade = outcomeEntry.grade
      ? game.i18n.localize(outcomeEntry.grade)
      : null;

    let rollContent = await roll.render();
    rollContent = rollContent.replaceAll('dice-oracles', '').replaceAll('[]', '');
    const content = `
<div class="dice-oracles-result">
  <div class="dice-oracles-header">
    <h5><i class="fas fa-dice"></i> ${game.i18n.localize(config.label)}</h5>
    ${question ? `<p class="dice-oracles-question"><strong>${game.i18n.localize("DiceOracles.Question")}:</strong> ${question}</p>` : ""}
  </div>

  <div class="dice-oracles-roll">
    ${rollContent}
    ${clampedResult !== roll.total ? `<p><strong>${game.i18n.localize("DiceOracles.Result")}:</strong> ${clampedResult} (${game.i18n.localize("DiceOracles.ClampedFrom")} ${roll.total})</p>` : ""}
  </div>

  <div class="dice-oracles-outcome">
    <h6>${outcome}</h6>
    <p>${description}</p>
    ${config.showGrade && outcomeEntry.grade ? `<p><strong>${game.i18n.localize("DiceOracles.Grade")}:</strong> ${grade}</p>` : ""}
  </div>
</div>
`;

    const chatMode = game.settings.get("core", "rollMode");
    let chatData = {
      content,
      speaker,
      rolls: [roll],
      flavor: game.i18n.localize("DiceOracles.Result"),
    };

    chatData = ChatMessage.applyRollMode(chatData, chatMode);
    await ChatMessage.create(chatData);
  }

  sanitizeExpression(rollExpression) {
    const cleaned = rollExpression
      // First handle operator sequences
      .replace(/\+-+/g, "-") // Convert "+-" to "-"
      .replace(/(?<!^)-+/g, "-") // Ensure single "-"
      .replace(/\++/g, "+") // Convert multiple "+" to single "+"

      // Then clean edges and whitespace
      .replace(/(^[+ ]+)|([+ ]+$)/g, "")
      .replace(/\s+/g, "");

    foundry.dice.Roll.validate(cleaned);
    return cleaned;
  }
}

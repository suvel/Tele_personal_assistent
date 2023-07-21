const entity = require("../../bot/index").entity;
const bot = require("../bot");

const servicesWithMagicString = [
  {
    s_label: "Time Zone Convertor",
    s_magicStr: "/tz <hh:mm> <timezone>",
  },
];

function startCommand(ctx) {
  const servicesIntro = servicesWithMagicString.reduce(
    (accumulator, item, index) => {
      const { s_label, s_magicStr } = item;
      const newLine = `[${index + 1}] ${s_label} \n\t ${s_magicStr}`;
      return accumulator + "\n" + newLine;
    },
    ""
  );
  bot.telegram.sendMessage(ctx.chat.id, servicesIntro, {});
}

module.exports = startCommand;

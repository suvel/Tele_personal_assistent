const entity = require("../../bot/index").entity;
const bot = require("../bot");

function startCommand(ctx) {
  bot.telegram.sendMessage(ctx.chat.id, "/tz <hh:mm> <timezone>", {});
}

module.exports = startCommand;

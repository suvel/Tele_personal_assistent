const bot = require("../bot");
const timezoneConvertor = require("../../services/timezoneConvertor");

function tz(ctx) {
  const time = ctx.update.message.text.split(" ")[1];
  const countryCode = ctx.update.message.text.split(" ")[2];
  const convertedTimezoneStr = timezoneConvertor(time, countryCode);
  bot.telegram.sendMessage(ctx.chat.id, convertedTimezoneStr);
}

module.exports = tz;

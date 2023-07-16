const shortTZ = require("../../constant/short_time_zone.json");
const getTZ = require("../../functions/getTimeZone");
const moment = require("moment-timezone");
const bot = require("../bot");

function tz(ctx) {
  const time = ctx.update.message.text.split(" ")[1];
  const shortTimezoneName = ctx.update.message.text.split(" ")[2];

  moment().tz(shortTZ[shortTimezoneName]).format("ha");
  bot.telegram.sendMessage(ctx.chat.id, getTZ(time, shortTimezoneName));
}

module.exports = tz;

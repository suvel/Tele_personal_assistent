const { Telegraf } = require("telegraf");
const moment = require("moment-timezone");

const shortTZ = {
  IN: "Asia/Kolkata",
  MY: "Asia/Kuala_Lumpur",
  SG: "Asia/Singapore",
  AU: "Antarctica/Macquarie",
};

function getTZ(time, shortTimezoneName) {
  const timeComponent = time.split(":");
  const hour = parseInt(timeComponent[0]);
  const minute = parseInt(timeComponent[1]);
  let tm = moment().set("hour", hour);
  tm.set("minute", minute);
  return `IST ${time} (${shortTimezoneName} ${tm
    .tz(shortTZ[shortTimezoneName])
    .format("ha")})`;
}
// Testing case
// console.log(getTZ("13:00", "MY"));

const bot = new Telegraf("6085903239:AAHx5vEnqA_9u4a6AQdrvL64Y_kh6g_6BQQ");

bot.command("start", (ctx) => {
  console.log(ctx.from);
  bot.telegram.sendMessage(ctx.chat.id, "/tz <hh:mm> <timezone>", {});
});

bot.command("tz", (ctx) => {
  const time = ctx.update.message.text.split(" ")[1];
  const shortTimezoneName = ctx.update.message.text.split(" ")[2];

  moment().tz(shortTZ[shortTimezoneName]).format("ha");
  bot.telegram.sendMessage(ctx.chat.id, getTZ(time, shortTimezoneName));
});

bot.launch();

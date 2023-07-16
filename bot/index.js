const start = require("./command/start");
const tz = require("./command/tz");
const bot = require("./bot");

function initBot() {
  bot.command("start", start);
  bot.command("tz", tz);
  bot.launch();
}

module.exports = {
  init: initBot,
};

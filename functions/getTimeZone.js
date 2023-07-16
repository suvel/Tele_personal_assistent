const moment = require("moment-timezone");
const shortTZ = require("../constant/short_time_zone.json");

const curTZ = "IST";
const timeFormate = "hh:mm a";

function getTZ(time, shortTimezoneName) {
  const timeComponent = time.split(":");
  const hour = parseInt(timeComponent[0]);
  const minute = parseInt(timeComponent[1]);
  let tm = moment().set("hour", hour);
  tm.set("minute", minute);
  return `${curTZ} ${time} (${shortTimezoneName} ${tm
    .tz(shortTZ[shortTimezoneName])
    .format(timeFormate)})`;
}

module.exports = getTZ;

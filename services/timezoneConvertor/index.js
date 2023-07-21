const shortTZ = require("./constant/short_time_zone.json");
const getTZ = require("./functions/getTimeZone");
const moment = require("moment-timezone");

function timezoneConvertor(time, countryCode) {
  moment().tz(shortTZ[countryCode]).format("ha");
  return getTZ(time, countryCode);
}

module.exports = timezoneConvertor;

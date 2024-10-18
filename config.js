//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "+27 68 041 3883";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/d86ad8e65e8408dfb1e0c.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUNGY00zc0lqb05zYmhXcEVXeGI4Z2s2Y0FGRm56ZW5udUVabXNGZTJWWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZFlQN3g2WHNRc0V1MDMrYkl0R2UvK2ZxbS9RMFEyWDJwRzgvT1dnYnptWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyRHFrcHRuejNEcmx3eFc4QTlsNk14cGZzRmFNY0VwdjFuTDBKdEhyRFdjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ4bjVOcmorQk1VR3g2STliOXh5ZzFqMlR6RXFJZmkxcHNQMTZtZDh5d0RJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktOYjR6OVhXdE9PQ1ZOckpSbVhqaGdIL1A2bVdXZWVpK1B3Y1FCbm9uMEk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNBaHlhTDBUenNVUkxLRFJrcXd4amhSaFM4VldsZmpGWkt3WDBXM2F5VjA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0hVR0R2Tk8wY0FzNmVHM3BIOFR5QjB6SkFWa1VvWHdmSFB4Y0tvdTVtQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0hUMXdqTEQ1ODRHUEVLNXdVNktScWgyVTN4c1RmeFpvZmhnTkpTTXFIdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklKUmliRGhUVnRzZ3drQW13Q0NZSllpQnQ0c1BhK3EzalFhS0RGOTBnOG8reE0ySExlVmMxQjZHbkFFN0IreUxMVHg2MHE0UDhJbDFGdHNTS09hdWp3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTM4LCJhZHZTZWNyZXRLZXkiOiJpSUh1ZzR6QXpKTlcyVmErb2Q0dytJeEpqbWN4dC9oUXdxbUptVUpvdXhVPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJxcEZ3YncxR1JtV2UzZFJhV0RSSnVRIiwicGhvbmVJZCI6IjRlYjUzNjA1LTY3YWItNDQxZS1hZGJhLTkxYThjOTkwZmQ3ZSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJUU2llQkxHeUtNSitKUHVHckNNL0x4SVAyeVE9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJlSDIxbkJTTjBlVUNPVWJ1UUpTZmwvZDVrND0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ00yLzJQd0ZFT3kxeTdnR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Iklzc2UvemZxMzYrNzUwdU82SW5jT0hpQ1ZPQ3I4WlBhT3dsWFhkMmtVRFE9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImEwb01YOU5NeWphVDZlWDlrcDJBQkppdStBNGJXMTM5WXlkL0hFTmlUVTk0OFJ1NzNybUoxdkZ2SE9pWTRpckRyUm8rV2ZPMGN2NnlsRnlCVUJ5cEN3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJpcktVcitDYmFmek9RTStvc2tQZjY5STNUT0VXQlR0OGU5TWNUb0JUSnJjeEowWW1qdDdzbjRuL3g3MEJNbGUvR0txM3pENjRlRkNtVmowOVZQbFZndz09In0sIm1lIjp7ImlkIjoiMjYzNzg1MTkyMjUwOjNAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8J2aqfCdkIvwnZq18J2QkvCdkJLwnZq18J2Qgy3wnZqp8J2ar/CdmrsifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjYzNzg1MTkyMjUwOjNAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCU0xMSHY4MzZ0K3Z1K2RManVpSjNEaDRnbFRncS9HVDJqc0pWMTNkcEZBMCJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyOTI4ODk1NX0="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`TAKX-OFC`",
  author: process.env.PACK_AUTHER || "TAKXOFCTECH",
  packname: process.env.PACK_NAME || "MHATA",
  botname: process.env.BOT_NAME || "MUNYORO-INC",
  ownername: process.env.OWNER_NAME || "TAKX-OFC",
  errorChat: process.env.ERROR_CHAT || "263785192250",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "http://chat.",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});

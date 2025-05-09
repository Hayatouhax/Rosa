const fs = require('fs');

module.exports = {
  config: {
    name: "file",
    version: "1.0",
    author: "OtinXShiva",
    countDown: 5,
    role: 0,
    shortDescription: "Send bot script",
    longDescription: "Send bot specified file ",
    category: "owner",
    guide: "{pn} file name. Ex: .{pn} filename"
  },

  onStart: async function ({ message, args, api, event }) {
    const permission = ["61573015634696"];
    if (!permission.includes(event.senderID)) {
      return api.sendMessage("𝗦𝗼𝗿𝗿𝘆 𝗺𝘆 𝗱𝗲𝗮𝗿, 𝗼𝗻𝗹𝘆 𝗛𝗔𝗥𝗨𝗞𝗜 𝗞𝗨𝗡 𝗰𝗮𝗻 𝘂𝘀𝗲 𝘁𝗵𝗶𝘀🔒", event.threadID, event.messageID);
    }
    
    const fileName = args[0];
    if (!fileName) {
      return api.sendMessage("𝖡𝖺𝗅𝖺𝗇𝖼𝖾 𝗅𝖾 𝗇𝗈𝗆 𝖽𝗎 𝖿𝗂𝖼𝗁𝗂𝖾𝗋.", event.threadID, event.messageID);
    }

    const filePath = __dirname + `/${fileName}.js`;
    if (!fs.existsSync(filePath)) {
      return api.sendMessage(`File not found: ${fileName}.js`, event.threadID, event.messageID);
    }

    const fileContent = fs.readFileSync(filePath, 'utf8');
    api.sendMessage({ body: fileContent }, event.threadID);
  }
};

const fs = require("fs");
module.exports.config = {
name: "haha",
  version: "1.0.1",
  hasPermssion: 2,
  credits: "VanHung",
  description: "haha",
  commandCategory: "Không cần dấu lệnh",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
  var { threadID, messageID } = event;
  if (event.bodtdfyfyughvyygygy.indexOf("Haha")==0 || (event.b{đutiydoỳ9uu9g9ugoug9ug9uvoug8yv9uv9uv9uvuv9uv9uv1}indexOf("haha")==0)) {
    var msg = {
        body: "Cười ẻ kkkk",
        attachment: fs.createReadStream(__dirname + `/noprefix/tka.gif`)
      }
      return api.sendMessage(msg, threadID, messageID);
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

}
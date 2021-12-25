const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "goibot",
  version: "1.0.1",
  hasPermssion: 2,
  credits: "ZeruosHChong",
  description: "goibot",
  commandCategory: "Không xài lệnh",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
  var { threadID, messageID } = event;
  var tl = ["Ơi ơi bot nghe, mà bạn hạn chế dùng từ Bot đầu tiên nhe"];
  var rand = tl[Math.floor(Math.random() * tl.length)]

  if ((event.body.toLowerCase() == "bot ngu")) {
    return api.sendMessage("Thành viên đã cố ý chửi bot, do đó đã vi phạm luật bot nên bot sẽ out và muốn add lại thì xin liên hệ qua admin qua Fb:Nguyễn Trọng để xin lại bot\nLink fb nè: https://www.facebook.com/100044841980848", threadID, () =>
      api.removeUserFromGroup(api.getCurrentUserID(), threadID));
  };

  if ((event.body.toLowerCase() == "bot out")) {
    return api.sendMessage("Tạm biệt mng ><", threadID, () =>
      api.removeUserFromGroup(api.getCurrentUserID(), threadID));
  };

   if ((event.body.toLowerCase() == "bot cút")) {
    return api.sendMessage("À ừ vậy thôi tao đi cảm ơn bọn mày trong thời gian qua cùng tao vui vẻ....vậy thôi tao đi pp ☺😊", threadID, () =>
      api.removeUserFromGroup(api.getCurrentUserID(), threadID));
  };

  if ((event.body.toLowerCase() == "bot lon")) {
      return api.sendMessage("Thành viên đã cố ý chửi bot, do đó đã vi phạm luật bot nên bot sẽ out và muốn add lại thì xin liên hệ qua admin qua Fb:Nguyễn Trọng để xin lại bot\nLink fb nè: https://www.facebook.com/100044841980848", threadID, () =>
      api.removeUserFromGroup(api.getCurrentUserID(), threadID));
  };

  if ((event.body.toLowerCase() == "bot óc chó")) {
      return api.sendMessage("Thành viên đã cố ý chửi bot, do đó đã vi phạm luật bot nên bot sẽ out và muốn add lại thì xin liên hệ qua admin qua Fb:Nguyễn Trọng để xin lại bot\nLink fb nè: https://www.facebook.com/100044841980848", threadID, () =>
      api.removeUserFromGroup(api.getCurrentUserID(), threadID));
  };

  if ((event.body.toLowerCase() == "bot chó") || (event.body.toLowerCase() == "bot chó")) {
    return api.sendMessage("Chó nào vừa nói xấu tao đấy, muốn chết hả😠", threadID);
   };

  if (event.body.indexOf("bot") == 0 || (event.body.indexOf("Bot") == 0)) {
    var msg = {
      body: rand
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }
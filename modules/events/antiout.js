module.exports.config = {
 name: "antiout",
 eventType: ["log:unsubscribe"],
 version: "0.0.1",
 credits: "DungUwU",
 description: "Listen events"
};

module.exports.run = async({ event, api, Threads, Users }) => {
 let data = (await Threads.getData(event.threadID)).data || {};
 if (data.antiout == false) return;
 if (event.logMessageData.leftParticipantFbId == api.getCurrentUserID()) return;
 const name = global.data.userName.get(event.logMessageData.leftParticipantFbId) || await Users.getNameUser(event.logMessageData.leftParticipantFbId);
 const type = (event.author == event.logMessageData.leftParticipantFbId) ? "tự rời" : "bị quản trị viên đá";
 if (type == "tự rời") {
  api.addUserToGroup(event.logMessageData.leftParticipantFbId, event.threadID, (error, info) => {
   if (error) {
    api.sendMessage(`Không thể thêm lại thành viên ${name} vào nhóm :( `, event.threadID)
   } else api.sendMessage(`ᴀ́ ᴆᴜ̀ ${name} ᴏᴜᴛ ᴄʜᴜ̀ᴀ ᴀ̀ ᴄᴜ̛ɴɢ ɴʜᴜ̛ɴɢ ᴋʜᴏ̂ɴɢ ʜᴏᴀ́ʏ ᴋʜᴏ̉ɪ ᴛᴀʏ ᴛᴀᴏ ᴆᴀ̂ᴜ ɴʜᴇ́😏\n${name} ᴄʜᴜ̛̉ɪ ᴛᴀᴏ ʙᴀɴ ᴋʜᴏ̉ɪ ᴛʜᴇ̣̂ ʜᴏ̂́ɴɢ ᴠɪ̃ɴʜ ᴠɪᴇ̂̃ɴ😏\nᴠᴜᴀ ɴʜᴇ̂́ᴄʜ ᴍᴇ́ᴘ 😏  `, event.threadID);
  })
 }
}
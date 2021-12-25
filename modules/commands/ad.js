 module.exports.config = {
	name: "ad",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Hà Mạc Trường Giang",
	description: "Thông tin về admin",
	commandCategory: "Thông tin về admin",
	cooldowns: 0
};

module.exports.run = ({ event, api }) => api.sendMessage(`Thông tin người điều hành bot:
Facebook: Nguyễnn Trọng (NT)
TikTok: Ko Có
UID: 100044841980848
Giới tính: Men, Gất Men, Mạnh Mẽ 😼😼
Mối quan hệ: Độc thân=====     
Link Facebook: https://www.facebook.com/100044841980848`, event.threadID, event.messageID);
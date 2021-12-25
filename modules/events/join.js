module.exports.config = {
	name: "joinNoti",
	eventType: ["log:subscribe"],
	version: "1.0.3",
	credits: "Mirai Team",
	description: "Thông báo bot hoặc người vào nhóm",
	dependencies: {
		"fs-extra": ""
	}
};

module.exports.run = async function({ api, event, Users }) {
	const { join } = global.nodemodule["path"];
	const { threadID } = event;
	if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) {
		api.changeNickname(`[ ${global.config.PREFIX} ] • ${(!global.config.BOTNAME) ? "Kết nối thành công :<" : global.config.BOTNAME}`, threadID, api.getCurrentUserID());
		return api.sendMessage(`🍑 𝓒𝓱𝓪̀𝓸 𝓶𝓸̣̂𝓲 𝓷𝓰𝓾̛𝓸̛̀𝓲:
ᴆᴀ̂ʏ ʟᴀ̀ ʟᴜᴀ̣̂ᴛ ʙᴏᴛ ᴠᴜɪ ʟᴏ̀ɴɢ ᴆᴏ̣ᴄ ᴋʏ̃ ᴛʀᴜ̛ᴏ̛́ᴄ ᴋʜɪ sᴜ̛̉ ᴅᴜ̣ɴɢ:
- Nghiêm cấm hành vi spam tránh bot die
- Không chửi bot + ad bot
- Không tag ad + bot
- Không spam lệnh 18+
- Tôn trọng bot + ad bot
- Tránh sử dụng lệnh "help" ( dùng rồi thì copy )
- Bot là bot không phải người :>
- Dùng lệnh /chuilientuc,/taglientuc mà chửi ad là ăn gậy :>
- Một nước không thể có 2 vua nên chỉ được quyền add 1 bot duy nhất !
* Bot hoạt động 24/24
* Nếu spam die bot chuẩn bị pay fb :>
        Mọi dữ liệu về bot đều được lưu.
Link :https://www.facebook.com/100044841980848
Dùng lệnh "/help" để xem toàn bộ lệnh !`, threadID);
	}
	else {
		try {
			const { createReadStream, existsSync, mkdirSync } = global.nodemodule["fs-extra"];
			let { threadName, participantIDs } = await api.getThreadInfo(threadID);

			const threadData = global.data.threadData.get(parseInt(threadID)) || {};
			const path = join(__dirname, "cache", "joinMp4");
			const pathGif = join(path, `${threadID}hi.mp4`);

			var mentions = [], nameArray = [], memLength = [], i = 0;
			
			for (id in event.logMessageData.addedParticipants) {
				const userName = event.logMessageData.addedParticipants[id].fullName;
				nameArray.push(userName);
				mentions.push({ tag: userName, id });
				memLength.push(participantIDs.length - i++);

				if (!global.data.allUserID.includes(id)) {
					await Users.createData(id, { name: userName, data: {} });
					global.data.allUserID.push(id);
					logger(global.getText("handleCreateDatabase", "newUser", id), "[ DATABASE ]");
				}
			}
			memLength.sort((a, b) => a - b);
			
			(typeof threadData.customJoin == "undefined") ? msg = "👋Welcome {name}.\n𝐶ℎ𝑎̀𝑜 𝑚𝑢̛̀𝑛𝑔 𝑑𝑒̂́𝑛 𝑣𝑜̛́𝑖 {threadName}.\n{type} 𝑙𝑎̀ 𝑡ℎ𝑎̀𝑛ℎ 𝑣𝑖𝑒̂𝑛 {soThanhVien} 𝑐𝑢̉𝑎 𝑛ℎ𝑜́𝑚 🥳" : msg = threadData.customJoin;
			msg = msg
			.replace(/\{name}/g, nameArray.join(', '))
			.replace(/\{type}/g, (memLength.length > 1) ?  '𝑐𝑎́𝑐 𝑏𝑎̣𝑛' : '𝑏𝑎̣𝑛')
			.replace(/\{soThanhVien}/g, memLength.join(', '))
			.replace(/\{threadName}/g, threadName);

			if (existsSync(path)) mkdirSync(path, { recursive: true });

			if (existsSync(pathGif)) formPush = { body: msg, attachment: createReadStream(pathGif), mentions }
			else formPush = { body: msg, mentions }

			return api.sendMessage(formPush, threadID);
		} catch (e) { return console.log(e) };
	}
                        }
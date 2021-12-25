module.exports.config = {
	name: "cobra",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "HChong",
	description: "Random ảnh gái có bra ngon nhất dcm :))",
	commandCategory: "random-img",
	usages: "cobra",
	cooldowns: 5
};

module.exports.run = async ({ api, event }) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
	axios.get('https://api.vangbanlanhat.tk/image?type=sexy').then(res => {
	let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
	let callback = function () {
					api.sendMessage({
						attachment: fs.createReadStream(__dirname + `/cache/cobra.${ext}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/cobra.${ext}`), event.messageID);
				};
				request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/cobra.${ext}`)).on("close", callback);
			})
}
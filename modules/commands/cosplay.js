module.exports.config = {
  name: "cosplayvn",
  version: "1.0.1",
  hasPermssion: 2,
  credits: "HChong",
  description: "NGẮM GÁI NÀO CÁC BẠN",
  commandCategory: "Hình ảnh",
  usages: "",
    cooldowns: 5,
    dependencies: {"fs-extra": "","axios": ""}
};

module.exports.run = async function ({ event, api }) {
    const axios = require("axios")
    const fs = require("fs-extra");
    var getlink = (await axios.get(`https://simsimi.info/v2/image.php?api_key=leanhtruong&image=cosplay `)).data;
    var url = getlink.url
    var stt = getlink.stt
    var length = getlink.length
    var getimg = (await axios.get(url, {responseType: "arraybuffer"})).data;
    fs.writeFileSync(__dirname + `/cache/${event.senderID}-${event.threadID}.png`, Buffer.from(getimg, "utf-8")); 
    api.sendMessage({body: `ảnh số : (${stt}/${length})`,attachment: fs.createReadStream(__dirname + `/cache/${event.senderID}-${event.threadID}.png`)}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/${event.senderID}-${event.threadID}.png`), event.messageID);

    console.log(getlink)
}
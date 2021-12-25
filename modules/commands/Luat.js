module.exports.config = {

    name: "luật",

    version: "1.0.1",

    hasPermssion: 0,

    credits: "ProCoderMew",

    description: "luật group",

    commandCategory: "noprefix",

    usages: "",

    cooldowns: 0

};

module.exports.handleEvent = ({ event, api }) => (event.body.toLowerCase() == "luật") ? api.sendMessage("1. Vào box phải biết tương tác.\n2. vào box không được gây war với mọi người.\n3. Không spam ib/bot.\n4. Không spam link vào trong group.\n5. Không gửi những content trên 18+ , những hình ảnh bạo lực máu me , tởm lợn.\n6. Sử dụng tiếng việt ghi rõ nghĩa, có dấu hoặc sử dụng tiếng anh.\n7. Không trao đổi/buôn bán bất kì thứ gì khi chưa có sự cho phép từ QTV\n8. Không đề cập/giới thiệu bất cứ sản phẩm không thuộc về nơi khác khi chưa có sự cho phép từ quản trị viên.\n9. Đừng làm Bot/Tao cáu.\n10. Đừng làm QTV cáu.\n11. Lặp lại toàn bộ điều trên.", event.threadID, () => api.sendMessage("❌Bạn có 2 lần cảnh báo❌ \nLần 3 ăn kick :)))", event.threadID)) : '';

module.exports.run = () => {}

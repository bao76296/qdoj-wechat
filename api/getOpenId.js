var request = require('../utils/request.js');

const getOpenId = (code) => {
  return request({
    url: "https://api.weixin.qq.com/sns/jscode2session",
    data : {
      appid : "wxb09a26a7446a2cd5",
      secret : "b12679952cd9bc2c46a3946d9101eec4",
      js_code: code,
      grant_type:"authorization_code"
    }
  })
}
module.exports = getOpenId;
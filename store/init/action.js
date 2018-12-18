
var actionType = require('./actionType.js')
var api = require('../../api/index.js')
var getCode = require('../../utils/getCode.js')

var active = {
  set_code : (code) => {
    return {
      type: actionType.SET_CODE,
      code
    }
  },
  get_openid: (code) => {
    return {
      type: actionType.GET_OPENID,
      payload: api.getOpenId(code)
    }
  }
}

module.exports = active

var defaultState = require('./defaultState.js');
var action = require('./action.js')
var actionType = require('./actionType.js')

const reducer = (value = defaultState, action) => {
  let newValue = Object.assign({}, value)
  switch (action.type){
    case actionType.SET_CODE: {
      
      newValue.code = action.code;
      break;
    }
    case actionType.GET_OPENID + '_FULFILLED': {
      newValue.openId = action.payload.data;
      break;
    }
  }
  return newValue;
}

module.exports = reducer;
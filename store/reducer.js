var { Redux } = require('miniprogram-redux');
var init = require('./init/reducer.js')

var reducer = Redux.combineReducers({
  init
})

module.exports = reducer
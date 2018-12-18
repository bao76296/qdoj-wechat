//app.js
var qcloud = require('wafer2-client-sdk')
var config = require('./config.js')
var store = require('./store/store.js')
const { reduxApp } = require('miniprogram-redux');

App(
  reduxApp(store)({
    onLaunch: function () {
      qcloud.setLoginUrl(config.service.loginUrl)
    }})
)
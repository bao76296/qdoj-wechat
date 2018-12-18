//index.js
//获取应用实例
var qcloud = require('wafer2-client-sdk')
var util = require('../../utils/util.js')
var api = require('../../api/index.js')
var store = require('../../store/store.js')
var init_action = require('../../store/init/action.js')
const {
  reduxPage
} = require('miniprogram-redux');

const app = getApp()

Page(
  reduxPage(state => ({
    state: state
  }))({
    data: {
      motto: 'Hello World',
      userInfo: {},
      logged: false,
      canIUse: wx.canIUse('button.open-type.getUserInfo'),
      openId: null
    },
    //事件处理函数
    bindViewTap: function() {
      console.log(app.mydata)
      // wx.navigateTo({
      //   url: '../logs/logs'
      // })

      console.log(store.getState(),9999999999999)
    },
    onLoad: function() {

      util.showBusy('正在登陆')

      this.getUserlogIn();
      

      wx.login({
        success : res => {
          store.dispatch(init_action.set_code(res.code))
          store.dispatch(init_action.get_openid(res.code))
        }
      })

      
    },
    code: null,
    getOpenid() {
      wx.login({
        success: (res) => {
          this.code = res.code
          api.getOpenId(this.code).then(res => {
            console.log(res)
          })
        }
      })



    },


    getUserlogIn() {
      const session = qcloud.Session.get();
      if (session) {
        qcloud.loginWithCode({
          success: res => {
            this.setData({
              userInfo: res,
              logged: true
            })
            util.showSuccess('登录成功')
          },
          fail: err => {
            console.error(err)
            util.showModel('登录错误', err.message)
          }
        })
      } else {
        qcloud.login({
          success: res => {
            this.setData({
              userInfo: res,
              logged: true
            })
            util.showSuccess('登录成功')
          },
          fail: err => {
            console.error(err)
            util.showModel('登录错误', err.message)
          }
        })
      }



    },

    getUserInfo: function(e) {
      console.log(e)
      app.globalData.userInfo = e.detail.userInfo
      this.setData({
        userInfo: e.detail.userInfo,
        hasUserInfo: true
      })
    }
  })


)
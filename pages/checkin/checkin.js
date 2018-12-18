// pages/checkin/checkin.js

const {
  reduxPage,
} = require('miniprogram-redux');
var store = require('../../store/store.js')


Page(
  reduxPage(state => ({
    state
  }))({

    /**
     * 页面的初始数据
     */
    data: {

    },

    feiqiuTap() {
      console.log(store.getState())
    },
    ouhuangTap() {
      console.log('ouhuang')
    },


    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
      
      console.log(this.data.state)
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {
      if(!this.data.state.init){

      }
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    }
  })

)
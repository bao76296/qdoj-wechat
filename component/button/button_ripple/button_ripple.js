// component/button/button_ripple/button_ripple.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    width: {
      type: Number,
      value: 400
    },
    height: {
      type: Number,
      value: 200
    },
    backgroundColor: {
      type: String,
      value: "tomato"
    },
    color:{
      type : String,
      value : "white"
    },
    fontSize : {
      type : Number,
      value : 30
    },
    borderRadius : {
      type : Number,
      value : 30
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    containerTap: function (res) {
      var that = this
      var x = res.touches[0].pageX - res.currentTarget.offsetLeft;
      var y = res.touches[0].pageY - res.currentTarget.offsetTop;
      this.setData({
        rippleStyle: ''
      });
      setTimeout(function () {
        that.setData({
          rippleStyle: 'top:' + y + 'px;left:' + x + 'px;-webkit-animation: ripple 0.8s linear;animation:ripple 0.8s linear;'
        });
      }, 30)
    },
  }
})

const getCode = () => {
  return new Promise ( resolve => {
    wx.login({
      success: function(res) {
        resolve(res.code)
      }
    })
  }) 
}

module.exports = getCode;
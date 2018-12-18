
const request = ({url, data,formData = false, method = 'GET',complete = ()=>{}  }) => {
  var header = method === "POST" ? formData ? "application/x-www-form-urlencoded; charset=UTF-8" : "application/json" : {}
  return new Promise((resolve, reject) => {
    wx.request({
      url,
      data,
      header,
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function(res) {
        resolve(res)
      },
      fail: function(res) {
        reject(res)
      },
      complete: function(res) {
        if (complete) complete(res)
      },
    })
  })
}

module.exports = request;
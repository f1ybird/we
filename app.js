//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  getUserInfo: function(cb){
      var that = this
      if(this.globalData.userInfo){
          typeof cb == "function" && cb(this.globalData.userInfo)
      }else{
          // 登录
          wx.login({
              success: function(){
                wx.getUserInfo({
                    success: function(res){
                        that.globalData.userInfo = res.userInfo
                        typeof cb == "function" && cb(this.globalData.userInfo)
                    }
                })
              }
          })
      }
  },
    
  globalData: {
    userInfo: null
  }
})
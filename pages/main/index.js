// pages/main/index.js

var wxlocker = require("../../utils/wxlocker.js");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: '搞一个手势密码',
    resetHidden: false,
    titleColor: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wxlocker.lock.init();
    this.initState();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },

  /**
   * 设置提示语与重置按钮
   */
  initState: function(){
      var resetHidden = wxlocker.lock.resetHidden;
      var title = wxlocker.lock.title;
      var titleColor = wxlocker.lock.titleColor;
      this.setData({
          resetHidden: resetHidden,
          title: title,
          titleColor: titleColor
      });
  },

  /**
   * touchstart事件绑定
   */
  touchS: function(e){
      wxlocker.lock.bindtouchstart(e);
  },

  /**
   * touchmove事件绑定
   */
  touchM: function(e){
      wxlocker.lock.bindtouchmove(e);
  },

    /**
     * touchend事件绑定
     */
    touchE: function(e){
        wxlocker.lock.bindtouchend(e,this.lockSucc);
        this.initState();
    },

    /**
     * 解锁成功的回调函数
     */
    lockSucc: function(){
        console.log('解锁成功！');
    },

    /**
     * 重置
     */
    lockreset: function(){
        wxlocker.lock.updatePassword();
        this.initState();
    }

})
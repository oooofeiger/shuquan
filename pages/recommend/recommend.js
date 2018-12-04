//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    swiper:{
      imgUrls: [
        { src:'../../images/baiyexing.jpg',id:0 },
        { src: '../../images/baiyexing.jpg', id: 1 },
        { src: '../../images/baiyexing.jpg', id: 2 },
      ],
      indicatorDots: false,
      autoplay: true,
      interval: 2000,
      duration: 500,
      circular: true
    }
    
  },
  //事件处理函数
  bindViewTap: function() {
    
  },
  onLoad: function () {
    this.setData({
      bookListData: { src: '../../images/baiyexing.jpg', title: '白夜行', author: '东野圭吾', flagItem: ['悬疑', '侦探', '推理'], summary: '《白夜行》是日本作家东野圭吾创作的长篇小说，也是其代表作。该小说于1997年1月至1999年1月间连载于期刊，单行本1999年8月在日本发行。故事围绕着一对有着不同寻常情愫的小学生展开。故事围绕着一对有着不同寻常情愫的小学生展开。故事围绕着一对有着不同寻常情愫的小学生展开。' }
    })

    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
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

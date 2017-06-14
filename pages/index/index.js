//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    imgUrls: [{
      data: 'http://172.19.208.253/huodong1.jpg',
      id: 1
    }, {
      data: 'http://172.19.208.253/huodong2.jpg',
      id: 2
    }, {
      data: 'http://172.19.208.253/huodong3.jpg',
      id: 3
    }],
    remen_img: [
      'http://172.19.208.253/act_1.jpg',
      'http://172.19.208.253/act_2.jpg',
      'http://172.19.208.253/act_3.jpg'
    ],
    activity_img: [
      'http://172.19.208.253/paidui1.jpg',
      'http://172.19.208.253/paidui2.jpg'
    ],
    act : '',
    indicatorDots: true,
    autoplay: true,
    interval: 4000,
    duration: 500,
    focus: false,
    inputValue: '',
    userInfo: ''
  }, toDetailPage: function (e) {
    var id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../detail/detail?id=' + id
    });
  }, onLoad: function () {
    var that = this;
    wx.login({
      success: function (res) {
        wx.getUserInfo({
          success: function (data) {
            console.log(data.userInfo);
            that.setData({
              userInfo: data.userInfo
            })
          }
        })
      }
    })
    wx.request({
      url: 'http://localhost:8888/api/activity',
      success: function(res){
        that.setData ({
          act: res.data
        })
      }
    })
    console.log(this.data);
  }
})

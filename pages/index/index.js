//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    imgUrls: [{
      data:'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      id : 1
    },{
        data: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
        id: 2
    },{
        data: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg',
        id:3
    }],
    remen_img :[
      '../../images/act_1.jpg',
      '../../images/act_2.jpg',
      '../../images/act_3.jpg'
    ],
    activity_img :[
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 2000,
    duration: 500,
    focus: false,
    inputValue: ''
  }, toDetailPage: function (e) {
    var id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../detail/detail?id=' +id
    });
  } 
})

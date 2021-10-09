// pages/tones_running/run1/run1.js


var isnotClick = true;
var stopAddress = 'https://s3.bmp.ovh/imgs/2021/10/6b18a4cea399d396.png';
var startAddress = 'https://s3.bmp.ovh/imgs/2021/10/a9779c672460e1cb.png';
var againAddress = 'https://s3.bmp.ovh/imgs/2021/10/5c9e893b9a503703.png';
Page({
  /**
     * 页面的初始数据
     */
  data: {
    wise: "110rpx",
    high: "110rpx",  
    hiddenTones: "none",
    hideRecord: "none",
    button: 'https://s3.bmp.ovh/imgs/2021/10/0c1518b696e981b9.png',
    sixTonesComputerPlayer_1: [],
    sixTonesComputerPlayer_2: [],
    sixTonesUser: [],
    counter: 5,
    order: [' User ', ' P1 ', ' P2 '],
    tonesout : [
      'https://s3.bmp.ovh/imgs/2021/10/f3f2c24d711f610b.png',
      "https://s3.bmp.ovh/imgs/2021/10/60d8ee71743fd437.png",
      'https://s3.bmp.ovh/imgs/2021/10/9191d59993868edf.png',
      'https://s3.bmp.ovh/imgs/2021/10/77acffc56d25c5c3.png',
      'https://s3.bmp.ovh/imgs/2021/10/3806cbbf6eac5d72.png',
      'https://s3.bmp.ovh/imgs/2021/10/dd74fd9e87141133.png'
    ]
  },

  click: function (options) {
    var self=this;
    var userTonesCopy=[];
    var one, two, three, four, five, six;
    var _1one, _1two, _1three, _1four, _1five, _1six;
    var _2one, _2two, _2three, _2four, _2five, _2six;
    self.setData({
      hiddenTones: 'flex',
      button: stopAddress,
    });
    if(isnotClick){
      self.timer=setInterval(function(){
      one = Math.floor((Math.random() * 6));
      two = Math.floor((Math.random() * 6));
      three = Math.floor((Math.random() * 6));
      four = Math.floor((Math.random() * 6));
      five = Math.floor((Math.random() * 6));
      six = Math.floor((Math.random() * 6));
      _1one = Math.floor((Math.random() * 6));
      _1two = Math.floor((Math.random() * 6));
      _1three = Math.floor((Math.random() * 6));
      _1four = Math.floor((Math.random() * 6));
      _1five = Math.floor((Math.random() * 6));
      _1six = Math.floor((Math.random() * 6));
      _2one = Math.floor((Math.random() * 6));
      _2two = Math.floor((Math.random() * 6));
      _2three = Math.floor((Math.random() * 6));
      _2four = Math.floor((Math.random() * 6));
      _2five = Math.floor((Math.random() * 6));
      _2six = Math.floor((Math.random() * 6));
      
      self.setData({
        sixTonesUser: [one, two, three, four, five, six],
        sixTonesComputerPlayer_1: [_1one, _1two, _1three, _1four, _1five, _1six],
        sixTonesComputerPlayer_2: [_2one, _2two, _2three, _2four, _2five, _2six],
      })
    },100);
      // toning
      isnotClick = false;// prepare for next click
    }else{
      // after toning

      self.setData({
        counter: self.data.counter - 1,
        button: startAddress,
      })
      
      userTonesCopy=[one, two, three, four, five, six].sort();
      wx.request({
        url: 'http://127.0.0.1:9999/set_record', //接口地址
        method:"POST",
        data:{"user_id":'user',"record": this.data.sixTonesUser},
        success:(res)=>{
          console.log(res.data);
        }
      })
      // prepare for next game
      if(!(self.data.counter)){
        self.setData({
          hideRecord: false,
          button: 'https://s3.bmp.ovh/imgs/2021/10/e9a5477ce92a90b8.png'
        })
      }isnotClick = true;
      clearInterval(self.timer);
    }
    wx.clearStorageSync("logs")
  },

  clicked: function(){
    wx.navigateTo({
      url: '../5_record/record',
    })
  },

  /**
   * make sure the data is initial after jumped back
   */
  onShow: function () {
    var self = this;
    isnotClick = true;
    var orderCopy = this.data.order;
    var i = 2;
    var temp = orderCopy[i];
    while (i>=0) {
      
      temp = orderCopy[i];
      var j = Math.floor(Math. random() * 3);
      orderCopy[i] = orderCopy[j];
      orderCopy[j] = temp;
      i = i - 1;
    }
    self.setData({
      order: orderCopy,
      button: startAddress,
      hideRecord: true,
      counter: 5,
    })
  },
})


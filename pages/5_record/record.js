// pages/5_record/record.js
Page({

  /**
   * data
   */
  data: {
    reslutFrompy: [],
    allRecords: [],
    againAddress: 'https://s3.bmp.ovh/imgs/2021/10/5c9e893b9a503703.png'
  },

  /**
   * receive results from back-end
   */
  onLoad: function (options) {
    var that = this;
    var out_ = "";
    console.log(options.num);
    wx.request({
      url:'http://127.0.0.1:9999/get_records',
      data:{"user_id":"user"},
        success:(res)=>{
        console.log(res.data);
        that.setData({
          reslutFrompy: res.data
        })
      }
    })
    wx.clearStorage();
  },

  // jump to last page
  back: function(){
    wx.navigateBack({
      changed: true
    })
  },

  toPrice: function(){
    wx.redirectTo({
      url: '../1_1award/1_1award',
    })
  },

})

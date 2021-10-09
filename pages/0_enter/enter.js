// pages/enter/enter.js
Page({

    /**
     * data
     */
    data: {
      counter: 0,
      words: "use wechat nickname",
      hide: true,
      username: "deault",
      path: "https://s3.bmp.ovh/imgs/2021/10/77a830cbddfff9a8.png"
    },

    GetUserProfile(e) {
      var that = this
      if(that.data.hide){
      wx.getUserProfile({
        desc:"正在获取,//不写不弹提示框",
        success:function(res){
          that.setData({
            username:res.userInfo.nickName,
            path:res.userInfo.avatarUrl,
            words: "use defalt name",
            
            hide: false,
          })
        },
        fail:function(){
          that.setData({
            words: "use wechat nickname",
            username: "default",
            path: "https://s3.bmp.ovh/imgs/2021/10/77a830cbddfff9a8.png",
            hide: true,
          })
        }
      })
      }else{
        that.setData({
          words: "use wechat nickname",
          username: "default",
          path: "https://s3.bmp.ovh/imgs/2021/10/77a830cbddfff9a8.png",
          hide: true,
        })
      }
    },

    // bind event: click the cake to jump to next page
    clicked: function()
    {
        // jump
        wx.redirectTo({
            url: '../1_rule/rule'})
    },

})
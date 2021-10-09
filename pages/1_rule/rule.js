// index/index.js

var counter = 0;
Page({

    /**
     * data
     */
    
    data: {
        hide: true,
        hiddenChoose: false,
        clickTimes: 2
    },
    //show the button  
    clicked: function()
    {
        var self = this;
        self.setData({
            hide: false,
            hiddenChoose: true,
        })
    },
    //choose two players
    clickButton_1: function(){
        wx.redirectTo({
            url: '../2_startpage/startpage'})
    },

    //choose three players
    clickButton_2: function(){
        wx.redirectTo({
            url: '../3_startpage/3_startpage'})
    },

    //choose four players
    clickButton_3: function(){
        wx.redirectTo({
            url: '../4_startpage/4_startpage'})
    },    

})
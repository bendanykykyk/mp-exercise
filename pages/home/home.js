// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      title:'大标题',
      persons:[
        {name:'郁开',age:18},
        {name:'郁开2',age:18},
        {name:'郁开3',age:18},
      ],
      lists:[
        {title:"标题1",numbers:[1,2,3,4]},
        {title:"标题2",numbers:[2,3,4,5]},
        {title:"标题3",numbers:[1,2,3,4]}
      ],
      counter:0
  },
  // 事件
  handleAdd(){
    this.setData({
      counter:this.data.counter+1
    })
  },
  handleReduce(){
    this.setData({
      counter:this.data.counter-1
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  }
})
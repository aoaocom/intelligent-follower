const db = wx.cloud.database()
var myvalue="";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataobj:" "
  },
  upDate (res){
    var name=res.detail.value.name;
    var phone=res.detail.value.phone;
    var telephone=res.detail.value.telephone;
    console.log(name,phone,telephone)
    db.collection("directory").update({
      data:{
        name:name,
        phone:phone,
        telephone:telephone,
      }
    }).then(res=>{
      console.log(res)
    })

  },

  Delete (res){
    var name=res.detail.value.name;
    var phone=res.detail.value.phone;
    var telephone=res.detail.value.telephone;
    console.log(name,phone,telephone)
    db.collection("directory").remove({
      data:{
        name:name,
        phone:phone,
        telephone:telephone,
      }
    }).then(res=>{
      console.log(res)
    })

  },
//获取删除的内容
deleteName (res){
    var value=res.detail.value.name;
    myvalue=value;
   // var phone=res.detail.value.phone;
    //var telephone=res.detail.value.telephone;
    console.log(value)
    db.collection("directory").remove({
      data:{
        name:name,
        phone:phone,
        telephone:telephone,
      }
    }).then(res=>{
      console.log(res)
    })

  },

  //加入数据库
  /*btnSub(res){
    console.log(res)
    var name=res.detail.value.name;
    var phone=res.detail.value.phone;
    var telephone=res.detail.value.telephone;
    console.log(name,phone,telephone)
    db.collection("directory").add({
      data:{
        name:name,
        phone:phone,
        telephone:telephone,
      }
    }).then(res=>{
      console.log(res)
    })
   
  },*/

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
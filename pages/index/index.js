const db = wx.cloud.database()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataobj:" "
  },
  getdata(){
   // console.log(111)
   db.collection("directory").get().then(res=>{
    this.setData({
      dataobj:res.data
   })
  })
  /* db.collection("directory").get({    //指定数据库名字
     success:res=>{              //回调函数
       console.log(res)
       this.setData({
         dataobj:res.data
       })
     }
   })*/
   //查询
   db.collection("directory").where({
     name:"张三"
   }).get().then(res=>{
    this.setData({
      dataobj:res.data
   })
  })
  },
  //添加
  /*addData(){
    db.collection("directory").add({
      data:{
        name:"王五",
        phone:"12356555646",
        telephone:"12356532",
      }
    })
  },
*/
  //加入数据库
  btnSub(res){
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
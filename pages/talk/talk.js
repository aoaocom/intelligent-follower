Page({

    /**
     * 页面的初始数据
     */
    data: {                     /*定义*/
      messageList: [],     /*数组*/
      inputValue: ""
    },
  
    sendMessage: function (e) {
      var that = this                    /*回调函数 现在=当前*/
      this.data.messageList.push({     /*向数组添加一个新项目*/
        tx: this.data.inputValue,     /*输入*/
        rx: 'loading...'              /*输出*/
      })
  
      /**
       * 创建wxml页面元素的api，此api难度较高
       * 可以通过文档进行学习：https://developers.weixin.qq.com/miniprogram/dev/api/wxml/wx.createSelectorQuery.html
       * 本次题目中不涉及此api的任何错误
       */
      this.createSelectorQuery().select('.scroll-wrap').node(function (res) {
        let ScrollViewContext = res.node
        ScrollViewContext.scrollIntoView(`#tx-item-${that.data.messageList.length - 1}`)
      }).exec()
  
      /**
       * 智能对话服务api，需提前购买
       * 文档地址：https://fuwu.weixin.qq.com/service/detail/00088c45d143c0df111a6e97f5bc15
       */
      wx.serviceMarket.invokeService({
        service: "wxcae50ba710ca29d3",
        api: "openai",
        data: {
          "appid": "dA80ZHoGjVQv1pippQDR9xCjOeSWKM",
          "query": this.data.inputValue,
        }
      }).then(res => {
        console.log(res)                /*控制台输出信息*/
        let messageList = this.data.messageList
  
      console.log(this.data.messageList)//*** */
       //let message ="NULL";                 /*输出*/
  
       // if(res.data.ans_node_name == "")
        //{message="暂时没有找到回复呢～换个问题试试看" ;}
         //else{
          //message=res.data.answer;//}
  
        //三目运算符
       let message = (res.data.ans_node_name == "NO_MATCH") ? "暂时没有找到回复呢～换个问题试试看" :res.data.answer
       this.data.messageList[messageList.length-1].rx = message   /**** */
       //console.log(message)
        /*messageList.rx = message*/
        this.setData({                   /*把变量值渲染到视图层*/
        messageList: messageList             /*后给前赋值*/
        })
      

        this.createSelectorQuery().select('.scroll-wrap').node(function (res) {
          let ScrollViewContext = res.node
          ScrollViewContext.scrollIntoView(`#rx-item-${that.data.messageList.length - 1}`)
        }).exec()
        
      })
    }
  })
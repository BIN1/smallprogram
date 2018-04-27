const app=getApp();
Page({
  data: {
    detailId:'',
    indicatorDots:false,
    interval:3000,
    autoplay:false,
    imgUrls:[
      {url:'../../../image/product1.png',id:'1'},
      {url:'../../../image/product2.png',id:'2'},
      {url:'../../../image/product3.png',id:'3'},
      {url:'../../../image/product4.png',id:'4'}
    ],
  },
  onLoad(query) {
    this.setData({
      detailId:query.id
    });
    console.log(app)
    console.log(this.data.detailId);
  },
  _getIndex(){
    app.aliAjax('index',{id:1,name:'asdf'})
  }
});

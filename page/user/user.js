const app=getApp();
Page({
  data: {
    navItems:[
      {name:'我的订单',id:'order'},
      {name:'我的账单',id:'bill'},
      {name:'帮助中心',id:'help'},
      {name:'会员信息',id:'authcode'},
      {name:'scroll',id:'scroll'},
      {name:'form',id:'form'},
      {name:'地图',id:'map'},
      {name:'通讯录',id:'contact'},
      {name:'城市选择',id:'city'},
      {name:'日期',id:'date'}
    ]
  },
  onLoad() {
    console.log(this.data);
  },
  clickTap:function(event){
    var id=event.target.id;
    console.log(id,`./childcomponents/${id}/${id}`);
    my.navigateTo({
        url:`./childcomponents/${id}/${id}`,
        success:(res) => {
          console.log('res:',res);
        },
        fail:(error) => {
          console.log('error',error);
        }
    })
  }
});

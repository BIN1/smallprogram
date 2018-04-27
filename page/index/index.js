Page({
  data: {
    indicatorDots:true,
    interval:3000,
    autoplay:false,
    imgUrls:[
      {url:'../../image/product1.png',id:'1'},
      {url:'../../image/product2.png',id:'2'},
      {url:'../../image/product3.png',id:'3'},
      {url:'../../image/product4.png',id:'4'}
    ],
    circular:false,
    navItems:[
      {name:'iphone',id:'iphone'},
      {name:'ipad',id:'ipad'},
      {name:'Mac',id:'Mac'},
      {name:'Beats',id:'Beats'}
    ],
    currenPage:'iphone',
    iphoneDatas:[
      {name:'iphone4',des:'撒发生的'},
      {name:'iphone5',des:'撒发生的'},
      {name:'iphone6',des:'撒发生的'}
    ],
    ipadDatas:[
      {name:'iphone4',des:'撒发生的'},
      {name:'iphone5',des:'撒发生的'},
      {name:'iphone6',des:'撒发生的'}
    ],
    macDatas:[
      {name:'iphone4',des:'撒发生的'},
      {name:'iphone5',des:'撒发生的'},
      {name:'iphone6',des:'撒发生的'}
    ],
    beadDatas:[
      {name:'iphone4',des:'撒发生的'},
      {name:'iphone5',des:'撒发生的'},
      {name:'iphone6',des:'撒发生的'}
    ]
  },
  onLoad() {},
  toTap:function(e){
    let id=e.target.id;
    this.setData({
      currenPage:id
    });
  },
  toDetail(e){
    let id=e.target.id;
    my.navigateTo({
        url:`./detail/detail?id=${id}`,
        success:(res) => {
          console.log('res:',res);
        },
        fail:(error) => {
          console.log('error',error);
        }
    })
  },
  onPullDownRefresh() {
    console.log('下拉刷新');
    console.log('onPullDownRefresh', new Date());
    setTimeout(() =>{
      my.stopPullDownRefresh();
      console.log('禁止下拉')
    },1000)
  }
});

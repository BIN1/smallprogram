Page({
  data: {
    itemDotos:[
      {name:'1hlililii',id:'1'},
      {name:'2hlililii',id:'2'},
      {name:'3hlililii',id:'3'},
      {name:'4hlililii',id:'4'},
      {name:'5hlililii',id:'5'},
      {name:'6hlililii',id:'6'},
      {name:'7hlililii',id:'7'},
      {name:'8hlililii',id:'8'},
      {name:'9hlililii',id:'9'},
      {name:'item',id:'item'},
      {name:'1hlililii',id:'1'},
      {name:'2hlililii',id:'2'},
      {name:'3hlililii',id:'3'},
      {name:'4hlililii',id:'4'},
      {name:'5hlililii',id:'5'},
      {name:'6hlililii',id:'6'},
      {name:'7hlililii',id:'7'},
      {name:'8hlililii',id:'8'},
      {name:'9hlililii',id:'9'},
      {name:'10hlililii',id:'10'},
      {name:'1hlililii',id:'1'},
      {name:'2hlililii',id:'2'},
      {name:'3hlililii',id:'3'},
      {name:'4hlililii',id:'4'},
      {name:'5hlililii',id:'5'},
      {name:'6hlililii',id:'6'},
      {name:'7hlililii',id:'7'},
      {name:'8hlililii',id:'8'},
      {name:'9hlililii',id:'9'},
      {name:'后来冷静冷静冷静了空间',id:'100'}
    ],
    scrollY:true,
    toView:'item'
  },
  onLoad() {},
  toUpper(){
    console.log('滚动到顶部');
  },
  toLower(){
    console.log('滚动到底部')
  },
  scroll(e){
    // console.log(e.detail);
  }
});

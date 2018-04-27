Page({
  data: {
    checkitem:[
      {name:'篮球',value:'篮球'},
      {name:'足球',value:'足球'},
      {name:'排球',value:'排球'},
      {name:'兵乓球',value:'兵乓球'}
    ],
    sex:[
      {name:'男',value:'boy'},
      {name:'秘密',value:'privary'},
      {name:'女',value:'girl'}
    ]
  },
  onLoad() {},
  submit(e){
    console.log(e.detail)
  },
  reset(e){
    console.log(e);
  }
});

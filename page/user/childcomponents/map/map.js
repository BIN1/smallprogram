Page({
  data:{},
  onLoad(){

  },
  onReady(){
    this.ctxMap=my.createMapContext("map");
  },
  getCenter(){
    this.ctxMap.getCenterLocation({
      success(res){
        console.log(res);
      }
    })
  },
  moveToLocation(){
    this.ctxMap.moveToLocation();
  }
})
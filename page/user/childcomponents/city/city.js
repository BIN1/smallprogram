const app=getApp();
Page({
  data: {
    city:''
  },
  onLoad() {
    console.log(app.hasLogin);
  },
  checkCity(){
    my.chooseCity({
      showLocatedCity:true,
      showHotCities:true,
      success: (res) => {
        this.setData({
          city:res
        })
      },
    });
  }
});

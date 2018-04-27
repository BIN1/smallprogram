Page({
  data: {
    date:''
  },
  onLoad() {},
  getDate(){
    my.datePicker({
      format:'yyyy-MM-dd',
      startDate: '2018-05-1',
      endDate: '2018-06-16',
      success:(res) => {
        this.setData({
          date:res.date
        })
      }
    });
  }
});

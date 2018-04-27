Page({
  data: {
    phoneContact:'',
    aliContacts:''
  },
  onLoad() {},
  gePhoneContacts(){
    my.choosePhoneContact({
      success: (res) => {
        console.log(res);
        this.setData({
          phoneContact:res
        });
      },
    });
  },
  geAliContacts(){
    my.chooseAlipayContact({
      count:10,
      success: (res) => {
        this.setData({
          aliContacts:res.contacts
        })
        console.log(res)
      },
    });
  }
});

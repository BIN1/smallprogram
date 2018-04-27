Page({
  data: {},
  onLoad() {
    my.getAuthCode({
      scopes:'auth_user',
      success: (res) => {
        if(res.authcode){
          my.httpRequest({
            url: 'http://isv.com/auth', // 目标服务器url
            data:res.authcode,
            success: (res) => {
              console.log(res);
            },
          });
          console.log(res);
        };
      }
    });
  },
  tradePay(){
    my.tradePay({
      orderStr:'f987987',
      success:(res) => {
        console.log(res);
      },
      fail:(fail) => {
        console.log(fail);
      }
    })
  },
  startZMVerify(){
    my.startZMVerify({
      bizNo:'198798798',
      success:(res) => {
        console.log(res);
      },
      fail:(fail) => {
        console.log(fail);
      }
    })
  }
});

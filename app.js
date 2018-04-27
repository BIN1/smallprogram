App({
  onLaunch(options) {
    console.log('App Launch', options);
    console.log('getSystemInfoSync', my.getSystemInfoSync());
    console.log('SDKVersion', my.SDKVersion);
  },
  onShow() {
    console.log('App Show');
  },
  onHide() {
    console.log('App Hide');
  },
  globalData: {
    urlApi:'https://www.kuaizu365.cn/app/api/',
    hasLogin: false,
  },
  aliAjax(url,params,secret){
    if (!secret) {
        secret = '87d66d9daf11672acbc2e4e72d7a6dbf';
    }
    params['timestamp'] = new Date().getTime();
    params['key'] = 'app';
    // 参数中不能自带sign
    if(params['sign']){
        params['sign'] = '';
    };
    my.httpRequest({
      url: `https://www.kuaizu365.cn/app/api/${url}`, // 目标服务器url
      method:'POST',
      data:params,
      success: (res) => {
        console.log(res);
      },
      fail:(error) => {
        console.log(error);
      }
    });
  }
});

require('./config$');
require('./importScripts$');
function success() {
require('../..//app');
require('../..//page/user/user');
require('../..//page/index/index');
require('../..//page/index/detail/detail');
require('../..//page/user/childcomponents/bill/bill');
require('../..//page/user/childcomponents/order/order');
require('../..//page/user/childcomponents/help/help');
require('../..//page/user/childcomponents/authcode/authcode');
require('../..//page/user/childcomponents/scroll/scroll');
require('../..//page/user/childcomponents/form/form');
require('../..//page/user/childcomponents/map/map');
require('../..//page/user/childcomponents/contact/contact');
require('../..//page/user/childcomponents/city/city');
require('../..//page/user/childcomponents/date/date');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();

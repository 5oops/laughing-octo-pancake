/***
 * from: http://github.com/Tartarus2014/Script.git
 * 
[rewrite_local]
# EmbyPremiere
^https?:\/\/mb3admin\.com\/admin\/service\/registration\/validateDevice.+ url script-response-body https://raw.githubusercontent.com/5oops/laughing-octo-pancake/master/Emby.js

hostname = mb3admin.com
**/

const CHECK_URL = 'mb3admin.com/admin/service/registration/validateDevice';

const url = $request.url;
const isCheckUrl = (url) => url.includes(CHECK_URL)

if (isCheckUrl(url) && $response.status != 200) {
  const unlock = {
    cacheExpirationDays: 999,
    resultCode: 'GOOD',
    message: 'Device Valid'
  };

  var modifiedStatus = 'HTTP/1.1 200 OK';
  //const headers = $response.headers
  //const body = JSON.stringify(unlock)

  $done({ status: modifiedStatus, headers: $response.headers, body: JSON.stringify(unlock) })
} else {
  $done({})
}

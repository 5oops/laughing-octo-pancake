/**************************************

[rewrite_local]
^https?:\/\/ios-api-2\.duolingo\.com\/2017-06-30\/batch url script-response-body https://raw.githubusercontent.com/5oops/laughing-octo-pancake/master/duolingo.com.js

[mitm]
hostname = ios-api-2.duolingo.com

*************************************/

const url = $request.url
const isCheckUrl = (url) => url.includes('ios-api-2.duolingo.com/2017-06-30/batch')

if (isCheckUrl(url)) {
  var rBody = $response.body;
  rBody = rBody.replace(/isFreeTrialPeriod\\":\s*\w+/, 'isFreeTrialPeriod\\":false').replace(/plusStatus\\":\s*\\"\w+/, 'plusStatus\\":\\"PLUS');

  $done( { rBody } );
}
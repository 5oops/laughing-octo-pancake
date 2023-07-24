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
  rBody = rBody.replace(/has_item_gold_subscription\\":\s*\w+/g, 'has_item_gold_subscription\\":true')
                .replace(/premium_free_trial_period\\":\s*\w+/g, 'premium_free_trial_period\\":false')
                .replace(/has_item_premium_subscription\\":\s*\w+/g, 'has_item_premium_subscription\\":true')
                .replace(/premium_expected_expiration\\":\s*(\d+)/g, 'premium_expected_expiration\\":1708739200000')
                .replace(/expectedExpiration\\":\s*(\d+)/g, 'expectedExpiration\\":1708739200000')
                .replace(/isFreeTrialPeriod\\":\s*\w+/g, 'isFreeTrialPeriod\\":false')
                .replace(/plusStatus\\":\s*\\"\w+/g, 'plusStatus\\":\\"PLUS');

  $done( { 'body': rBody } );
}
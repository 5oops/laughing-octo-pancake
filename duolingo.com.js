/**************************************

[rewrite_local]
^https?:\/\/ios-api-2\.duolingo\.com\/2017-06-30\/batch url script-response-body https://raw.githubusercontent.com/5oops/laughing-octo-pancake/master/duolingo.com.js
^https?:\/\/ios-api-2\.duolingo\.com\/2017-06-30\/users\/(\d+)\/available-features url script-response-body https://raw.githubusercontent.com/5oops/laughing-octo-pancake/master/duolingo.com.js
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
                .replace(/has_item_rupee_wager\\":\s*\w+/g, 'has_item_rupee_wager\\":true,\\"num_item_rupee_wager\\":15')
                .replace(/gems\\":\s*(\d+)/g, 'gems\\":9999')
                .replace(/premium_expected_expiration\\":\s*(\d+)/g, 'premium_expected_expiration\\":1708739200000')
                .replace(/expectedExpiration\\":\s*(\d+)/g, 'expectedExpiration\\":1708739200')
                .replace(/isFreeTrialPeriod\\":\s*\w+/g, 'isFreeTrialPeriod\\":false')
                .replace(/plusStatus\\":\s*\\"\w+/g, 'plusStatus\\":\\"PLUS');

  $done( { 'body': rBody } );
}
if (url.indexOf('ios-api-2.duolingo.com/2017-06-30/users/') !== -1 && url.indexOf('available-features') !== -1 ) {
    const unlock = {
        "subscriptionFeatures": ["NO_NETWORK_ADS", "UNLIMITED_HEARTS", "LEGENDARY_LEVEL", "MISTAKES_INBOX", "MASTERY_QUIZ", "NO_SUPER_PROMOS"],
        "purchasableFeatures": ["CAN_PURCHASE_IAP", "CAN_PURCHASE_SUBSCRIPTION"]
    };
    $done( { 'body': JSON.stringify(unlock) } );
}
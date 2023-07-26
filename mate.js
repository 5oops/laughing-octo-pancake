/*************************************
apple store: https://apps.apple.com/us/app/language-translator-by-mate/id1073473333
[rewrite_local]
^https:\/\/sync\.matetranslate\.com\/subscription url script-response-body https://raw.githubusercontent.com/5oops/laughing-octo-pancake/master/mate.js
hostname = sync.matetranslate.com
**************************************/
const body = $response.body;
const modifiedBody = {
    "old_status":null,
    "next_bill_date":null,
    "cancellation_effective_date":"2099-12-29",
    "paused_from":null,
    "next_payment_amount":"0",
    "billing_period":"annual",
    "currency":"USD",
    "cancel_url":"itms-apps://apps.apple.com/account/subscriptions",
    "update_url":"itms-apps://apps.apple.com/account/subscriptions",
    "isSubscriptionVerified":true,
    "unit_price":"0",
    "isLifetime":true,
    "hasBoughtPaidApp":true
};

$done({body : JSON.stringify(modifiedBody)});

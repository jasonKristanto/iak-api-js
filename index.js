// ES6
import {
  checkBalance,
  pricelist,
  inquiryPln,
  inquiryGame,
  inquiryGameServer,
  checkStatus,
  topUp
} from "./library/prepaid";

import {
  checkStatus as checkStatusPasca,
  inquiry,
  payment,
  pricelist as pricelistPasca,
  receipt
} from "./library/postpaid";

(async () => {
  const checkBalanceResponse = await checkBalance(
    "sandbox",
    "081807971414",
    "4105bb1aa80a7744"
  );
  console.log("Check Balance");
  console.log(checkBalanceResponse);

  const pricelistResponse = await pricelistPasca(
    "sandbox",
    "081807971414",
    "4105bb1aa80a7744",
    "all"
  );
  console.log("Pricelist");
  console.log(pricelistResponse);
})();
// module.exports = IAK;

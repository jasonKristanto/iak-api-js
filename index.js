// ES6
import {checkBalance, pricelist} from "./library/prepaid";

import {checkstatus, inquiry, payment, pricelist as pricelistpasca, receipt} from "./library/postpaid";

(async () => {
  const checkBalanceResponse = await checkBalance(
    "081807971414",
    "4105bb1aa80a7744"
  );
  console.log("Check Balance");
  console.log(checkBalanceResponse);

  const pricelistResponse = await pricelist(
    "081807971414",
    "4105bb1aa80a7744",
    "all"
  );
  console.log("Pricelist");
  console.log(pricelistResponse);

  const pricelistPascaResponse = await pricelistpasca(
      "sandbox",
      "kudo",
      "6155c989ff465120",
      "all"
  );
  console.log("Pricelist Pasca");
  console.log(pricelistPascaResponse);

  const inquiryPascaResponse = await inquiry(
      "sandbox",
      "kudo",
      "6155c989ff465120",
      "PBBKOT.CIMAHI",
      "329801092375999901",
      "PBB123"
  );
  console.log("Inquiry Pasca");
  console.log(inquiryPascaResponse);

  const payPascaResponse = await payment(
      "sandbox",
      "kudo",
      "6155c989ff465120",
      "9881240"
  );
  console.log("Pay Pasca");
  console.log(payPascaResponse);

  const checkstatusPascaResponse = await checkstatus(
      "sandbox",
      "kudo",
      "6155c989ff465120",
      "PBB123"
  );
  console.log("Checkstatus Pasca");
  console.log(checkstatusPascaResponse);

  const receiptPascaResponse = await receipt(
      "sandbox",
      "9881240"
  );
  console.log("Receipt Pasca");
  console.log(receiptPascaResponse);

  const pricelistPascaResponseProd = await pricelistpasca(
      "prod",
      "kudo",
      "2895d383c9744242289",
      "all"
  );
  console.log("Pricelist Pasca Prod");
  console.log(pricelistPascaResponseProd);

  const inquiryPascaResponseProd = await inquiry(
      "prod",
      "082210138584",
      "1231234",
      "PLNPOSTPAID",
      "543400746892",
      "PLN123"
  );
  console.log("Inquiry Pasca Prod");
  console.log(inquiryPascaResponseProd);

})();
// module.exports = IAK;

// ES6
import { checkBalance } from "./library/prepaid";
import { pricelist } from "./library/prepaid";

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
})();
// module.exports = IAK;

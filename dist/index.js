"use strict";

var _prepaid = require("./library/prepaid");

// ES5
// const Prepaid = require("./library/prepaid");

// // ES6
// const IAK = {
//   checkBalancePrepaid() {
//     return this.prepaid.checkBalance();
//   }
// }
// class IAK {
//   constructor(username, key) {
//     this.prepaid = new Prepaid(username, key);
//   }

//   checkBalancePrepaid() {
//     return this.prepaid.checkBalance();

//     // return rp(options)
//     //   .then(function(resp) {
//     //     return resp.data;
//     //   })
//     //   .catch(function(err) {
//     //     throw parseError(err);
//     //   });
//   }
// }

// const iak = new IAK("081807971414", "4105bb1aa80a7744");
// const iak2 = new IAK("081807971414", "4105bb1aa80a7744");

// const test = iak.checkBalancePrepaid();

// console.log(test);

// ES6
(async function () {
  var checkBalanceResponse = await (0, _prepaid.checkBalance)("081807971414", "4105bb1aa80a7744");
  console.log("Check Balance");
  console.log(checkBalanceResponse);

  var pricelistResponse = await (0, _prepaid.pricelist)("081807971414", "4105bb1aa80a7744", "all");
  console.log("Pricelist");
  console.log(pricelistResponse);
})();
// module.exports = IAK;
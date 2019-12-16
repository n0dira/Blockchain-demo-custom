var $ = require('jquery');
var jsdom = require('jsdom');
var CryptoJS = require('crypto-js')
var pattern = '0000000000';
var nonce = 0;
var maximumNonce = 1099511627776;
var difficulty = 10;
var hash = (CryptoJS.SHA256(1 + '' + nonce + data));
var hashhex = (hash.toString(CryptoJS.enc.Hex));
var data = "Kosar A Bokhari0000000000000000000000000000000000000000000000000000000000000000";

function mine() {
  for (var x = 68719476736; x <= maximumNonce; x++) {
    var nonce = x;
    var hash = (CryptoJS.SHA256(1 + '' + nonce + data));
    var hashhex = (hash.toString(CryptoJS.enc.Hex));
   if (hashhex.substring(0, difficulty) === pattern) {
     console.log("congrats" + nonce)
     break;
   }
   console.log(nonce);
  }
}

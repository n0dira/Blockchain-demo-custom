var $ = require('jquery');
var jsdom = require('jsdom');
var CryptoJS = require('crypto-js')
var pattern = '0000';
var nonce = 0;
var maximumNonce = 1099511627776;
var difficulty = 4;
var hash = (CryptoJS.SHA256(1 + '' + nonce + data));
var hashhex = (hash.toString(CryptoJS.enc.Hex));
var data = "Kosar A Bokhari0000000000000000000000000000000000000000000000000000000000000000";

function mine() {
  for (var x = 0; x <= maximumNonce; x++) {
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








//function mine() {
  //for (var x = 0; x <= maximumNonce; x++) {
    //hash = (CryptoJS.HmacSHA256(data, nonce));
    //nonce = (x);
    //console.log(nonce);
   // if (alert(hash.toString(CryptoJS.enc.Hex).substring(0, difficulty) === pattern)) {
     // console.log("success!:"(nonce))
     // break;
  //  }
 // }
//}

/**
 * MD5 Encryption function to encrypt provided string.
 * This function requires the MD5 function of the CryptoJs library.
 * https://code.google.com/archive/p/crypto-js/
 * @param {string} stringIn
 * @return {string} the encrypted hash
 */
function md5Encrypt(stringIn) {
    "use strict";
    var md5string = new CryptoJS.MD5(stringIn);
    return md5string.toString();
}
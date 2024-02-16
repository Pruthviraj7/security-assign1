var validUserName = "raj";
var passWord="Guest";
var validPassWordHash = md5Encrypt(passWord);

function checkLogin(username,password) {
    "use strict";

    // output
    var returnMsg = "";
    var invalidCredentials = "Invalid username and password";
    var noUsername = "No username entered.";
    var noPassword = "No password entered";
    var correctCredentials = "Welcome back";

    if (username === "" && password === "") {
        returnMsg = noUsername; // Display only "No username entered"
    } else if (username === "") {
        returnMsg = noUsername;
    } else if (password === "") {
        returnMsg = noPassword;
    } else if (validUserName !== username || validPassWordHash !== md5Encrypt(password)){
        returnMsg = invalidCredentials; // Invalid username or password
    } else {
        returnMsg = correctCredentials; // Valid username and password
    }

    return returnMsg;
}
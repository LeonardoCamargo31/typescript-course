"use strict";
// union para dizer que pode ter dois tipos
function logDetails(uid, item) {
    console.log("A product with " + uid + " has a title as " + item + ".");
}
logDetails(123, "sapato");
logDetails("123", "sapato");
function logInfo(uid, user) {
    console.log("A user with " + uid + " has a name as " + user + ".");
}
logDetails(123, "Leonardo");
logDetails("123", "Leonardo");
function renderPlatform(platform) {
    console.log("Platform is " + platform + ".");
}
// renderPlatform('ios')// don't work
renderPlatform('Windows');

// LICENSE : MIT
"use strict";
// メタ情報の同期
var Firebase = require("firebase");
var myFirebaseRef = new Firebase("https://jsermeta.firebaseio.com/");
//myFirebaseRef.set({
//    lastUpdated: (new Date()).getTime()
//});
//myFirebaseRef.child("lastUpdated").on("value", function(snapshot) {
//    console.log(snapshot.val());  // Alerts "San Francisco"
//});
(function (window) {
  "use strict";
  var App = window.App || {};
  var $ = window.jQuery;
  // change to server URL
  var LOGIN_URL = "http://localhost:2403/users/login";

  function RemoteDataStore(url) {
    if (!url) {
      throw new Error("No remote URL supplied.");
    }

    this.serverUrl = url;
  }
  
  RemoteDataStore.prototype.login = function (d, cb) {
    $.ajax(LOGIN_URL, {
      type: "Post",
      data: d
    }).done(function(serverResponse) {
      console.log(serverResponse);
      cb(serverResponse);
    });
};

  App.RemoteDataStore = RemoteDataStore;
  window.App = App;

})(window);

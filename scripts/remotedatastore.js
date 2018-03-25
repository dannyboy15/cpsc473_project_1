(function (window) {
  "use strict";
  var App = window.App || {};
  var $ = window.jQuery;
  var LOGIN_URL = "http://localhost:2403/users/login";

  function RemoteDataStore(url) {
    if (!url) {
      throw new Error("No remote URL supplied.");
    }

    this.serverUrl = url;
  }

  RemoteDataStore.prototype.add = function (val, cb) {
    $.post(this.serverUrl, val, function (serverResponse) {
      console.log(serverResponse);
      cb(serverResponse);
    });
  };

  RemoteDataStore.prototype.getAll = function (cb) {
    $.get(this.serverUrl, function (serverResponse) {
      console.log(serverResponse);
      cb(serverResponse);
    });
  };

  RemoteDataStore.prototype.get = function (key, cb) {
    $.get(this.serverUrl + "/" + key, function (serverResponse) {
      console.log(serverResponse);
      cb(serverResponse);
    });
  };

  RemoteDataStore.prototype.remove = function (key, cb) {
    $.ajax(this.serverUrl + "/" + key, {
      type: "DELETE"
    }).done(function(serverResponse) {
      console.log(serverResponse);
      cb(serverResponse);
    });
  };

  RemoteDataStore.prototype.update = function (key, val, cb) {
    $.ajax(this.serverUrl + "/" + key, {
      type: "PUT",
      data: val
    }).done(function(serverResponse) {
      console.log(serverResponse);
      cb(serverResponse);
    });
  };

  RemoteDataStore.prototype.query = function (d, cb) {
    $.ajax(this.serverUrl, {
      type: "GET",
      data: d
    }).done(function(serverResponse) {
      console.log(serverResponse);
      cb(serverResponse);
    });
  };

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

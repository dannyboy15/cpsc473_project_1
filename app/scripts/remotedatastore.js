(function (window) {
  "use strict";
  var App = window.App || {};
  var $ = window.jQuery;
  var USERS = "http://localhost:2403/users";
  var USER_ACCOUNTS = "http://localhost:2403/user-accounts";

  function RemoteDataStore(url) {
    if (!url) {
      throw new Error("No remote URL supplied.");
    }

    this.serverUrl = url;
    this.usersUrl = USERS;
    this.userAccountsUrl = USER_ACCOUNTS;
  }

  RemoteDataStore.prototype.addUser = function (data, fn) {
    var user = {
      username : data.email,
      password : data.password,
      displayname : data.username
    };

    $.post(this.usersUrl, user, function (serverResponse) {
      console.log("first request", serverResponse);

      var newData = {
        userid : serverResponse.id,
        email : data.email,
        password : data.password,
        firstName : data.firstname,
        lastName : data.lastname,
        phone : data.phonenumber,
        userName : data.username
      };
      console.log(newData);
      $.post(this.userAccountsUrl, newData, function (res) {
        console.log("second request", res);
        fn(res);
      }.bind(this));
    }.bind(this));
  };

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

  RemoteDataStore.prototype.userExists = function (d, cb) {
    $.ajax(USERS, {
      type: "GET",
      data: d
    }).done(function(serverResponse) {
      // console.log(serverResponse);
      exists = serverResponse.length > 0;
      console.log(exists);
      cb(serverResponse);
    });
  };

  RemoteDataStore.prototype.login = function (d, cb) {
    $.ajax(USERS + "/login", {
      type: "Post",
      data: d
    }).done(function(serverResponse) {
      console.log(serverResponse);
      cb(serverResponse);
    });
  };

  RemoteDataStore.prototype.upload = function (file, cb) {
    $.ajax(this.serverUrl, {
      type: "Post",
      data: file
    }).done(function(serverResponse) {
      console.log(serverResponse);
      cb(serverResponse);
    });
  };

  App.RemoteDataStore = RemoteDataStore;
  window.App = App;

})(window);

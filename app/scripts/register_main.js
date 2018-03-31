(function(window) {
  "use strict";
  var REGISTER_FORM_SELECTOR = "[data-register=\"form\"]";

  var App = window.App || {};
  var RemoteDataStore = App.RemoteDataStore;
  var FormHandler = App.FormHandler;
  var remoteDS = new RemoteDataStore("http://localhost:2403/user-accounts");

  var registerFormHandler = new FormHandler(REGISTER_FORM_SELECTOR);

  registerFormHandler.addSubmitHandler(function(data) {
    remoteDS.addUser(data, function(d){
      console.log("after add user", d);
      window.location = "/profile/" + d.userName;
    });
  });

})(window);

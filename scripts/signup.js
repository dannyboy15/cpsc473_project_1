(function(window) {
  "use strict";
  var SIGN_UP_FORM_SELECTOR = "[data-sign-up=\"form\"]";
  var SERVER_URL = "http://localhost:2403/user-accounts";
  var App = window.App;
  var RemoteDataStore = App.RemoteDataStore;
  var FormHandler = App.FormHandler;
  var Validation = App.Validation;
  var remoteDS = new RemoteDataStore(SERVER_URL);

  var signUpFormHandler = new FormHandler(SIGN_UP_FORM_SELECTOR);

  signUpFormHandler.addSubmitHandler(function(data) {
    remoteDS.add(data);
  });

  signUpFormHandler.addInputHandler(function(data) {
    remoteDS.query(data, function(res) {
      if(res.length > 0) {
        // TODO: Error email already taken
        console.log("Error email already taken");
      }

    });
  });
})(window);

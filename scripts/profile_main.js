(function(window) {
  "use strict";
  var FORM_SELECTOR = "[data-profile=\"form\"]";

  var App = window.App || {};
  var Profile = App.Profile;
  var DataStore = App.DataStore;
  var FormHandler = App.FormHandler;
  var myProfile = new Profile("ncc-1701", new DataStore());
  window.myProfile = myProfile;
  var formHandler = new FormHandler(FORM_SELECTOR);

  formHandler.addSubmitHandler(function (data) {
    myProfile.createProfile.call(myProfile, data);
    myProfile.editName.call(myProfile, data);
    myProfile.editLogo.call(myProfile, data);
    myProfile.editPhone.call(myProfile, data);
    myProfile.editEmail.call(myProfile, data);
  });
})(window);

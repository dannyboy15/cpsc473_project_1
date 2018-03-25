(function(window) {
  "use strict";
  var PROFILE_FORM_SELECTOR = "[data-profile=\"form\"]";
  var SM_FORM_SELECTOR = "[data-social-media=\"form\"]";

  var App = window.App || {};
  var Profile = App.Profile;
  var DataStore = App.DataStore;
  var RemoteDataStore = App.RemoteDataStore;
  var FormHandler = App.FormHandler;
  var remoteDS = new RemoteDataStore("http://localhost:2403/user-accounts");
  var myProfile = new Profile("ncc-1701", remoteDS);
  window.myProfile = myProfile;
  var profileHandler = new FormHandler(PROFILE_FORM_SELECTOR);
  var smHandler = new FormHandler(SM_FORM_SELECTOR);;

  profileHandler.addSubmitHandler(function (data) {
    // myProfile.createProfile.call(myProfile, data);
    myProfile.editProfile.call(myProfile, data);
  });

  smHandler.addSubmitHandler(function (data) {
    myProfile.createProfile.call(myProfile, data);
    myProfile.editSM.call(myProfile, data);
  });

})(window);

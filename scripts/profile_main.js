(function(window) {
  "use strict";
  var PROFILE_FORM_SELECTOR = "[data-profile=\"form\"]";
  var SM_FORM_SELECTOR = "[data-social-media=\"form\"]";

  var App = window.App || {};
  var Profile = App.Profile;
  var DataStore = App.DataStore;
  var FormHandler = App.FormHandler;
  var myProfile = new Profile("ncc-1701", new DataStore());
  window.myProfile = myProfile;
  var profileHandler = new FormHandler(PROFILE_FORM_SELECTOR);
  var smHandler = new FormHandler(SM_FORM_SELECTOR);

  profileHandler.addSubmitHandler(function (data) {
    myProfile.createProfile.call(myProfile, data);
    myProfile.editName.call(myProfile, data);
    myProfile.editLogo.call(myProfile, data);
    myProfile.editPhone.call(myProfile, data);
    myProfile.editEmail.call(myProfile, data);
  });

  smHandler.addSubmitHandler(function (data) {
    
  });

})(window);

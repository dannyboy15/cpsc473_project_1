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


  var user = window.location.href.match(/\/profile\/([^#]+).*/);
  var uid;

  remoteDS.query({username:user[1]}, function (data) {
    var a = data[0];
    uid = a.id;

    var myProfile = new Profile(uid, remoteDS);
    window.myProfile = myProfile;
    var profileHandler = new FormHandler(PROFILE_FORM_SELECTOR);
    var smHandler = new FormHandler(SM_FORM_SELECTOR);

    profileHandler.addSubmitHandler(function (data) {
      // myProfile.createProfile.call(myProfile, data);
      myProfile.editProfile.call(myProfile, data);
    });

    smHandler.addSubmitHandler(function (data) {
      myProfile.createProfile.call(myProfile, data);
      myProfile.editSM.call(myProfile, data);
    });

    // TODO change to toggle if auth
    $(".logo").on("click", function (event) {
      $("#noAuthNav").toggle();
      $("#authNav").toggle();
    })

    getUserData();
    setMenu();

  });

  function getUserData() {
    console.log(uid);
    remoteDS.get(uid, function (data) {

      myProfile.editProfile.call(myProfile, translateData(data));
      console.log("get user data", data);
    });
  }

  function translateData(data) {
    return {
      pName: data.firstName + " " + data.lastName,
      firstName: data.firstName,
      lastName: data.lastName,
      pEmail: data.email
    };
  }

  function setMenu() {
    if (true) {
      $("#noAuthNav").hide();
    }
  }

})(window);

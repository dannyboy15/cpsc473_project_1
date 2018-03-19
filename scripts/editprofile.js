(function(window) {
  "use strict";
  var App = window.App || {};

  function Profile(profileId, db) {
    this.profileId = profileId;
    this.db = db;
  }

  Profile.prototype.createProfile = function(user) {
    console.log("Adding order for " + user.pName);
    this.db.add(user.pName, user);
  };

  Profile.prototype.editName = function(user){
    console.log("Changing name to " + user.pName);
    if(user.pName !== ""){
      document.getElementById("profileName").innerHTML = user.pName;
    }
  };

  Profile.prototype.editLogo = function(user){
    if(user.pLogo !== ""){
      document.getElementById("profileLogo").innerHTML = user.pLogo;
    }
  };

  Profile.prototype.editPhone = function(user){
    if(user.pPhone !== ""){
      document.getElementById("profilePhone").innerHTML = user.pPhone;
    }
  };

  Profile.prototype.editEmail = function(user){
    if(user.pEmail !== ""){
      document.getElementById("profileEmail").innerHTML = user.pEmail;
    }
  };


  App.Profile = Profile;
  window.App = App;
})(window);

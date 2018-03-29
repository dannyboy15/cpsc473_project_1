(function(window) {
  "use strict";
  var App = window.App || {};

  function Profile(profileId, db) {
    this.profileId = profileId;
    this.db = db;
  }

  Profile.prototype.createProfile = function(user) {
    this.db.add(user.pName, user);
  };

  // data should be passed in as follows:
  // {
  //   pName: "firstName" + "lastName",
  //   firstName: "firstName",
  //   lastName: "lastName",
  //   pLogo: "slogan",
  //   pAbout: "about",
  //   pPhone: "555-555-555",
  //   pEmail: "something@email.com"
  // }

  //function checks the user data and if data was entered (not ""), replace the element's innerHTML
  //identified by its id with the corresponding user data
  Profile.prototype.editProfile = function(user){
    if(user.pName !== "") {
      this.db.update(this.profileId, {
        firstName : user.firstName,
        lastName : user.lastName
      }, function() {
        document.getElementById("profileName").innerHTML = user.pName;
        document.getElementById("nameinput").setAttribute( "value", user.pName );
      });

    }
    if(user.pLogo !== ""){
      var logoTxt = (user.pLogo === undefined) ? "" : user.pLogo;

      document.getElementById("profileLogo").innerHTML = logoTxt;
      document.getElementById("logoinput").setAttribute("value", logoTxt);
    }
    if(user.pAbout !== ""){
      var aboutTxt = (user.pAbout === undefined) ? "" : user.pAbout;

      document.getElementById("profileAbout").innerHTML = aboutTxt;
      document.getElementById("aboutinput").setAttribute("value", aboutTxt);
    }
    if(user.pPhone !== ""){
      var phoneTxt = (user.pPhone === undefined) ? "" : user.pPhone;

      document.getElementById("profilePhone").innerHTML = phoneTxt;
      document.getElementById("phoneinput").setAttribute("value", phoneTxt);
    }
    if(user.pEmail !== ""){
      var emailTxt = (user.pEmail === undefined) ? "" : user.pEmail;

      document.getElementById("profileEmail").innerHTML = emailTxt;
      document.getElementById("emailinput").setAttribute("value", emailTxt);
    }
  };

  //function checks the user data and if data was entered (not ""), set the element's onclick attribute
  //with the corresponding link inputted by the user
  //if a valid link was submitted, the corresponding icon will no longer be hidden
  Profile.prototype.editSM = function(user){
    if(user.pFacebook !== ""){
      var link = "'" + user.pFacebook + "'";
      document.getElementById("fb_link").setAttribute( "onClick", "window.open(" + link + ")" );
      document.getElementById("fb_link").removeAttribute("hidden");
      document.getElementById("fbinput").setAttribute( "placeholder", user.pFacebook );
    }
    if(user.pTwitter !== ""){
      var link = "'" + user.pTwitter + "'";
      document.getElementById("t_link").setAttribute( "onClick", "window.open(" + link + ")" );
      document.getElementById("t_link").removeAttribute("hidden");
      document.getElementById("tinput").setAttribute( "placeholder", user.pTwitter );
    }
    if(user.pInsta !== ""){
      var link = "'" + user.pInsta + "'";
      document.getElementById("i_link").setAttribute( "onClick", "window.open(" + link + ")" );
      document.getElementById("i_link").removeAttribute("hidden");
      document.getElementById("iinput").setAttribute( "placeholder", user.pInsta );
    }
    if(user.pLinkedIn !== ""){
      var link = "'" + user.pLinkedIn + "'";
      document.getElementById("l_link").setAttribute( "onClick", "window.open(" + link + ")" );
      document.getElementById("l_link").removeAttribute("hidden");
      document.getElementById("linput").setAttribute( "placeholder", user.pLinkedIn );
    }
  };

  App.Profile = Profile;
  window.App = App;
})(window);

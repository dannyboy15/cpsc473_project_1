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

  //function checks the user data and if data was entered (not ""), replace the element's innerHTML
  //identified by its id with the corresponding user data
  Profile.prototype.editProfile = function(user){
    if(user.pName !== ""){
      document.getElementById("profileName").innerHTML = user.pName;
      document.getElementById("nameinput").setAttribute( "placeholder", user.pName );
    }
    if(user.pLogo !== ""){
      document.getElementById("profileLogo").innerHTML = user.pLogo;
      document.getElementById("logoinput").setAttribute( "placeholder", user.pLogo );
    }
    if(user.pAbout !== ""){
      document.getElementById("profileAbout").innerHTML = user.pAbout;
      document.getElementById("aboutinput").setAttribute( "placeholder", user.pAbout );
    }
    if(user.pPhone !== ""){
      document.getElementById("profilePhone").innerHTML = user.pPhone;
      document.getElementById("phoneinput").setAttribute( "placeholder", user.pPhone );
    }
    if(user.pEmail !== ""){
      document.getElementById("profileEmail").innerHTML = user.pEmail;
      document.getElementById("emailinput").setAttribute( "placeholder", user.pEmail );
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

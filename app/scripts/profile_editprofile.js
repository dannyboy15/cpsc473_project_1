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

  //function replaces the preview image in the menu sidebar with the uploaded image
  Profile.prototype.previewFile = function() {
    //get the preview image location by ID
    var preview = document.getElementById("preview");
    var file = document.querySelector("input[type=file]").files[0];
    console.log(file);
    var reader = new FileReader();
    //if image was uploaded, replace the preview image with the uploaded image
    reader.onloadend = function() {
      preview.src = reader.result;
    };

    if (file) {
      reader.readAsDataURL(file); //reads the data as a URL
    } else {
      preview.src = "images/upload_empty.png";
    }
  }
  // previewFile(); //calls the function named previewFile()

  //function replaces the current profile image with the new uploaded image
  Profile.prototype.editFile = function() {
    var preview = document.getElementById("preview");
    var profilePic = document.getElementById("profilePic");
    //the profile image will not change if no image was uploaded
    //the url below is the address of the default preview image
    if (preview.src != "http://localhost:3000/profile/images/upload_empty.png") {
      //console.log(preview.src);
      var file = document.querySelector("input[type=file]").files[0];
      // console.log(file);
      this.db.upload(this.profileId, file, function (data) {
        console.log("edit prof data", data);
        this.db.update(this.profileId, {profileImgUrl : "http://localhost:2403/upload/" + data[0].filename}, function(data2) {
          profilePic.src = data2.profileImgUrl;
        }.bind(this));
      }.bind(this));
    }
  }

  Profile.prototype.setPic = function (url) {
    $("#profilePic").attr("src", url);
  }


  App.Profile = Profile;
  window.App = App;
})(window);

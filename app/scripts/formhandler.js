(function(window) {
  "use strict";
  var App = window.App || {};
  var $ = window.jQuery;

  function FormHandler(selector) {
    if (!selector) {
      throw new Error("No selector provided");
    }

    this.$formElement = $(selector);
    if (this.$formElement.length === 0) {
      throw new Error("Could not find element with selector: " + selector);
    }
  }

  FormHandler.prototype.addSubmitHandler = function(fn, redirect) {
    console.log("Setting submit handler for form");
    this.$formElement.on("submit", function(event) {
      event.preventDefault();

      var data = {};
      $(this).serializeArray().forEach(function(item) {
        data[item.name] = item.value;
        console.log(item.name + " is " + item.value);
      });
      console.log(data);
      fn(data);

      if(redirect) {
        window.location = redirect;
      } else {
        this.reset();
        this.elements[0].focus();
      }
    });
  };

  FormHandler.prototype.addInputHandler = function(fn) {
    console.log("Setting input handler for form");
    this.$formElement.on("blur", "[name=\"emailAddress\"]", function(event) {
      var d = {}
      d["email"] = event.target.value;
      console.log(d);
      fn(d);
    });
  };

  App.FormHandler = FormHandler;
  window.App = App;

})(window);

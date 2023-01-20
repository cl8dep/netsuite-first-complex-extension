// Model.js
// -----------------------
// @module Case
define("Acme.ToDoExtension.ToDoModule.Model", ["SCModel", "Utils"], function (
  SCModelComponent,
  Utils
) {
  "use strict";

  var SCModel = SCModelComponent.SCModel;

  function MySCModel(options) {
    SCModel.call(this, options);
    // Define properties of the model.
    this.urlRoot = function () {
      return Utils.getAbsoluteUrl(
        getExtensionAssetsPath("services/ToDoModule.Service.ss")
      );
    };
  }

  MySCModel.prototype = Object.create(SCModel.prototype);

  MySCModel.prototype.constructor = MySCModel;

  MySCModel.prototype.getValidationRules = function () {
    return {
      name: [
        function (value, name) {
          if (
            typeof value === "undefined" ||
            value.length === 0 ||
            !value.trim()
          ) {
            return (
              name.charAt(0).toUpperCase() + name.slice(1) + " is required"
            );
          }
        },
      ],
    };
  };

  return MySCModel;
});

// Model.js
// -----------------------
// @module Case
define("Acme.ToDoExtension.ToDoModule.Model", ["Backbone", "Utils"], function (
  Backbone,
  Utils
) {
  "use strict";

  // @class Case.Fields.Model @extends Backbone.Model
  return Backbone.Model.extend({
    defaults: {
      done: false,
      name: "",
      notify: "",
      notes: "",
    },

    //@property {String} urlRoot
    urlRoot: Utils.getAbsoluteUrl(
      getExtensionAssetsPath("services/ToDoModule.Service.ss")
    ),

    validation: {
      name: {
        required: true,
        msg: "Please name is required",
      },

    },
  });
});

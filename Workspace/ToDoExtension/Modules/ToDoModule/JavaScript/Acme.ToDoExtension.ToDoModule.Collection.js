// Model.js
// -----------------------
// @module Case
define("Acme.ToDoExtension.ToDoModule.Collection", [
  "Backbone",
  "Utils",
  "Acme.ToDoExtension.ToDoModule.Model"
], function (Backbone, Utils, Model) {
  "use strict";

  // @class Case.Fields.Model @extends Backbone.Model
  return Backbone.Collection.extend({
    //@property {String} urlRoot
    model: Model,
    
    url: Utils.getAbsoluteUrl(getExtensionAssetsPath("services/ToDoModule.Service.ss")),
  });
});

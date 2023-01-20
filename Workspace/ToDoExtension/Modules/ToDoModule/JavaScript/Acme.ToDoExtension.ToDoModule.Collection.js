// Model.js
// -----------------------
// @module Case
define("Acme.ToDoExtension.ToDoModule.Collection", [
  "SCCollection",
  "Utils",
  "Acme.ToDoExtension.ToDoModule.Model"
], function (SCCollectionModule, Utils, Model) {
  "use strict";

  var SCCollection = SCCollectionModule.SCCollection;

  function TodoCollection(models, options) {
      SCCollection.call(this, models, options);

      this.model = Model;
      this.url = function () {
          return Utils.getAbsoluteUrl(getExtensionAssetsPath("services/ToDoModule.Service.ss"))
      }
  }

  TodoCollection.prototype = Object.create(SCCollection.prototype);
  TodoCollection.prototype.constructor = TodoCollection;

  TodoCollection.prototype.parse = function parse(e){
    return e;
  }

  return TodoCollection
});

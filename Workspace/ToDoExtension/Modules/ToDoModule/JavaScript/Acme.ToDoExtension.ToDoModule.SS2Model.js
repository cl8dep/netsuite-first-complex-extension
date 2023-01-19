// Model.js
// -----------------------
// @module Case
define("Acme.ToDoExtension.ToDoModule.SS2Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "Modules/ToDoModule/SuiteScript2/ToDoModule.Service.ss"
            ),
            true
        )
});
});

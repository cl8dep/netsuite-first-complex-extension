// @module Acme.ToDoExtension.ToDoModule
define("Acme.ToDoExtension.ToDoModule.List.View.Item", [
  "acme_todoextension_todomodule_list_item.tpl",

  "Acme.ToDoExtension.ToDoModule.SS2Model",

  "Backbone",
], function (
  acme_todoextension_todomodule_tpl,

  ToDoModuleSS2Model,

  Backbone
) {
  "use strict";

  // @class Acme.ToDoExtension.ToDoModule.View @extends Backbone.View
  return Backbone.View.extend({
    template: acme_todoextension_todomodule_tpl,

    initialize: function (options) {
      this.listenTo(this.model, "change", this.render);
    },

    events: {
      "click input#done": "markDone",
    },

    bindings: {},

    childViews: {},

    getContext: function () {
      return {
        internalid: this.model.get("internalid"),
        name: this.model.get("name"),
        description: this.model.get("description"),
        done: this.model.get("done"),
      };
    },

    markDone: function (event) {
      event.stopPropagation();

      this.model.set({ done: jQuery(event.currentTarget).is(":checked") });
      this.model.save();
    },
  });
});

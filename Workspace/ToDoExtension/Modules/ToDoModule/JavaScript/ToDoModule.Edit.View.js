// @module Acme.ToDoExtension.ToDoModule
define("Acme.ToDoExtension.ToDoModule.Edit.View", [
  "acme_todoextension_todomodule_edit.tpl",

  "Acme.ToDoExtension.ToDoModule.SS2Model",

  "Backbone",
  "Backbone.FormView",
  "Backbone.CollectionView",
], function (
  acme_todoextension_todomodule_edit_tpl,

  ToDoModuleSS2Model,

  Backbone,
  FormView,
  TodoListViewItem,
  CollectionView
) {
  "use strict";

  // @class Acme.ToDoExtension.ToDoModule.View @extends Backbone.View
  return Backbone.View.extend({
    template: acme_todoextension_todomodule_edit_tpl,

    initialize: function (options) {
      this.application = options.application;
      this.model = options.model;
      FormView.add(this);
    },

    events: {
      "submit form": "saveForm",
    },

    bindings: {},

    childViews: {},

    getContext: function getContext() {
      return {
        name: this.model.get("name"),
        notify: this.model.get("notify"),
        notes: this.model.get("notes"),
        isNew: this.model.isNew(),
        done: this.model.get("done")
      };
    },

    getBreadcrumbPages: function () {
      if (this.model.isNew())
      {
        return [
          {text: 'To Do', href: '/todo'}
        , {text: 'New'}
        ]
      }
      else
      {
        return [
          {text: 'To Do', href: '/todo'}
        , {text: 'Edit'}
        ]
      }
    },
  });
});

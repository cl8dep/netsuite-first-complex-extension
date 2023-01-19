// @module Acme.ToDoExtension.ToDoModule
define("Acme.ToDoExtension.ToDoModule.List.View", [
  "acme_todoextension_todomodule_list.tpl",

  "Acme.ToDoExtension.ToDoModule.SS2Model",

  "Backbone",
  "Acme.ToDoExtension.ToDoModule.List.View.Item",
  "Backbone.CollectionView",
  "GlobalViews.Confirmation.View"
], function (
  acme_todoextension_todomodule_tpl,
  ToDoModuleSS2Model,
  Backbone,
  TodoListViewItem,
  CollectionView,
  ConfirmationView
) {
  "use strict";

  // @class Acme.ToDoExtension.ToDoModule.View @extends Backbone.View
  return Backbone.View.extend({
    template: acme_todoextension_todomodule_tpl,

    initialize: function (options) {
      this.application = options.application;
      this.collection = options.collection;

      var self = this;
      this.collection.on("reset sync add remove change destroy", function () {
        self.render();
      });
    },

    events: {
      'click button[data-action="delete"]': "onDelete",
    },

    bindings: {},

    childViews: {
      "Acme.ToDoExtension.ToDoModule.Collection": function () {
        return new CollectionView({
          childView: TodoListViewItem,
          collection: this.collection,
          viewsPerRow: 1,
        });
      },
    },

    onDelete: function onDelete(event) {
      event.stopPropagation();
      event.preventDefault();

      var view = new ConfirmationView({
        title: "Remove Task",
        body: "Are you sure you want to remove this task?",
        callBack: this.removeModel,
        callBackParameters: {
          context: this,
          id: jQuery(event.target).data("id"),
        },
        autohide: true,
      });

      this.application.getLayout().showInModal(view);
    },

    removeModel: function (options) {
      var model = options.context.collection.get(options.id);
      model.destroy();
    },

    getBreadcrumbPages: function () {
      return [{ text: "To Do" }];
    },

    //@method getContext @return Acme.ToDoExtension.ToDoModule.View.Context
    getContext: function getContext() {
      return {};
    },

    MenuItems: {
      parent: "settings",
      id: "userpreferenceslist",
      name: "User Preferences",
      url: "todo",
      index: 1,
    },
  });
});

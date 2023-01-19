define("Acme.ToDoExtension.ToDoModule.Router", [
  "Backbone",
  "Acme.ToDoExtension.ToDoModule.List.View",
  "Acme.ToDoExtension.ToDoModule.Edit.View",
  "Acme.ToDoExtension.ToDoModule.Collection",
  "Acme.ToDoExtension.ToDoModule.Model",
  "MyAccountMenu"
], function (
  Backbone,
  TodoListView,
  TodoEditView,
  TodoCollection,
  TodoModel,
  MyAccountMenu
) {
  "use strict";

  return Backbone.Router.extend({
    routes: {
      todo: "todoList",
      "todo/add": "todoEdit",
      "todo/:id": "todoEdit",
    },

    initialize: function (application) {
      this.application = application;
    },

    todoList: function () {
      var collection = new TodoCollection();
      var view = new TodoListView({
        application: this.application,
        collection: collection,
      });
      collection.fetch().done(function () {
        view.showContent();
      });
    },

    todoEdit: function todoEdit(id) {
      var model = new TodoModel();
      var promise = jQuery.Deferred();
      var application = this.application;

      if (!id) {
        promise.resolve();
      } else {
        model.fetch({ data: { id } }).done(function () {
          promise.resolve();
        });
      }

      promise.done(function () {
        var view = new TodoEditView({
          application: application,
          model: model,
        });

        view.showContent();
        view.model.on("sync", function (model) {
          Backbone.history.navigate("todo", { trigger: true });
        });
      });
    },
  });
});

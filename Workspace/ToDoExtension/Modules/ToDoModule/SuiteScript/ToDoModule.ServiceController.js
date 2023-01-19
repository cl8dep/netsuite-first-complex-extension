define("Acme.ToDoExtension.ToDoModule.ServiceController", [
  "ServiceController",
  "underscore",
  "ToDoModule.Model",
], function (ServiceController, _, ToDoModel) {
  "use strict";

  return ServiceController.extend({
    name: "Acme.ToDoExtension.ToDoModule.ServiceController",

    // The values in this object are the validation needed for the current service.
    options: {
      common: {},
    },

    get: function get() {
      var id = this.request.getParameter("id");
      return id ? ToDoModel.get(id) : ToDoModel.list();
    },

    post: function post() {
      this.sendContent(ToDoModel.create(this.data), { status: 201 });
    },

    put: function put() {
      var id = this.request.getParameter("internalid");
      ToDoModel.update(id, this.data);
      return ToDoModel.get(id);
    },

    delete: function () {
      var id = this.request.getParameter("internalid");
      ToDoModel.delete(id);
      return { status: "ok" };
    },
  });
});

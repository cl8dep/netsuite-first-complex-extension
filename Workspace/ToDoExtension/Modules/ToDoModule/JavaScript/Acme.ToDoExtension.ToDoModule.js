define("Acme.ToDoExtension.ToDoModule", [
  "Acme.ToDoExtension.ToDoModule.Router",
], function (ToDoModuleRouter) {
  "use strict";

  return {
    mountToApp: function mountToApp(application) {
      return new ToDoModuleRouter(application);
    },
  };
});

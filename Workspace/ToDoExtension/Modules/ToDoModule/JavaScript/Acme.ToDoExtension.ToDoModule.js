define("Acme.ToDoExtension.ToDoModule", [
  "Acme.ToDoExtension.ToDoModule.List.View",
  "Acme.ToDoExtension.ToDoModule.Edit.View",
], function (
  TodoListView,
  TodoEditView,
) {
  "use strict";

  return {
    mountToApp: function mountToApp(container) {
      var PageType = container.getComponent("PageType");

      PageType.registerPageType({
        name: "todo_list",
        routes: ["todo"],
        view: TodoListView,
        defaultTemplate: {
          name: "acme_todoextension_todomodule_list.tpl",
          displayName: "To Do List",
        },
      });

      PageType.registerPageType({
        name: "todo_edit",
        routes: ["todo/add", "todo/:id"],
        view: TodoEditView,
        defaultTemplate: {
          name: "acme_todoextension_todomodule_edit.tpl",
          displayName: "To Do Edit",
        },
      });
    },
  };
});

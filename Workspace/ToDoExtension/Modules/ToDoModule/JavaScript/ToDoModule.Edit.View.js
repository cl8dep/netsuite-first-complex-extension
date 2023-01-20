// @module Acme.ToDoExtension.ToDoModule
define("Acme.ToDoExtension.ToDoModule.Edit.View", [
  "acme_todoextension_todomodule_edit.tpl",

  "Acme.ToDoExtension.ToDoModule.Model",
  "PageType.Base.View",
  "Acme.ToDoExtension.ToDoModule.Edit.Form.View"
], function (
  acme_todoextension_todomodule_edit_tpl,

  TodoModel,

  PageTypeBaseView,
  ToDoEditFormView
) {
  "use strict";

  return PageTypeBaseView.PageTypeBaseView.extend({
    template: acme_todoextension_todomodule_edit_tpl,

    initialize: function initialize() {
      this.model = new TodoModel();
    },

    getSelectedMenu: function getSelectedMenu() {
      return "todo";
    },

    beforeShowContent: function beforeShowContent() {
      this.childViews = {
        "Acme.ToDoExtension.ToDoModule.Edit.Form.View": function () {
          return new ToDoEditFormView({
            model: this.model,
          });
        },
      };

      if (!!Number(this.options.routerArguments[0])) {
        this.getBreadcrumbPages = function () {
          return [
            {
              text: "To Do",
              href: "/todo",
            },
            {
              text: "Edit",
            },
          ];
        };

        this.title = "Edit Task";

        return this.model.fetch({
          data: { id: this.options.routerArguments[0] },
        });
      } else {
        this.getBreadcrumbPages = function () {
          return [
            {
              text: "To Do",
              href: "/todo",
            },
            {
              text: "Add",
            },
          ];
        };

        this.title = "Add Task";

        return jQuery.Deferred().resolve();
      }
    },

    getContext: function getContext() {
      return {
        isNew: this.model.isNew(),
      };
    },
  });
});

// @module Acme.ToDoExtension.ToDoModule
define("Acme.ToDoExtension.ToDoModule.List.View", [
  "acme_todoextension_todomodule_list.tpl",

  "PageType.Base.View",
  "Acme.ToDoExtension.ToDoModule.Collection",
  "Acme.ToDoExtension.ToDoModule.Collection.View",
], function (
  acme_todoextension_todomodule_tpl,
  PageTypeBaseView,
  TodoCollection,
  TodoCollectionView
) {
  "use strict";

  return PageTypeBaseView.PageTypeBaseView.extend({
    template: acme_todoextension_todomodule_tpl,

    initialize: function () {
      this.collection = new TodoCollection();
    },

    getSelectedMenu: function getSelectedMenu() {
      return "todo";
    },

    beforeShowContent: function beforeShowContent() {
      this.getBreadcrumbPages = function () {
        return [
          {
            text: "To Do",
            href: "/todo",
          },
        ];
      };

      this.title = "To Do";

      this.childViews = {
        "Acme.ToDoExtension.ToDoModule.Collection.View": function () {
          return new TodoCollectionView({
            collection: this.collection,
          });
        },
      };

      return this.collection.fetch();
    },
  });
});

// @module Acme.ToDoExtension.ToDoModule
define("Acme.ToDoExtension.ToDoModule.List.View.Item", [
  "SCView",
  "acme_todoextension_todomodule_list_item.tpl",
], function (
  SCViewModule,
  acme_todoextension_todomodule_tpl,
) {
  "use strict";

  var SCView = SCViewModule.SCView;

  function TodoListViewItem(options) {
    SCView.call(this, options);

    this.model = options.model;

    this.template = acme_todoextension_todomodule_tpl;

    this.markDone = function (event) {
      event.stopPropagation();

      this.model.set({ done: jQuery(event.currentTarget).is(":checked") });
      this.model.save();
    };
  }

  TodoListViewItem.prototype = Object.create(SCView.prototype);
  TodoListViewItem.prototype.constructor = TodoListViewItem;

  TodoListViewItem.prototype.getContext = function () {
    return {
      internalid: this.model.get("internalid"),
      name: this.model.get("name"),
      description: this.model.get("description"),
      done: this.model.get("done"),
    };
  };

  TodoListViewItem.prototype.getEvents = function () {
    return {
      "click input#done": "markDone",
    };
  };

  return TodoListViewItem;
});

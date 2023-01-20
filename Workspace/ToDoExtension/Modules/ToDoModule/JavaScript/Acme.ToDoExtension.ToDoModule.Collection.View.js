// Copyright (c) 2021, Oracle and/or its affiliates. All rights reserved.
// Licensed under the Universal Permissive License v 1.0 as shown at http://oss.oracle.com/licenses/upl.
define("Acme.ToDoExtension.ToDoModule.Collection.View", [
  "SCCollectionView",
  "Acme.ToDoExtension.ToDoModule.List.View.Item",
  "acme_todoextension_todomodule_collection_view.tpl",
  "jQuery",
  "GlobalViews.Confirmation.View",
], function (
  SCCollectionViewModule,
  TodoItemView,
  acme_todoextension_todomodule_collection_view_tpl,
  jQuery,
  ConfirmationView
) {
  "use strict";

  var SCCollectionView = SCCollectionViewModule.SCCollectionView;

  function ToDoCollectionView(options) {
    SCCollectionView.call(this, options.collection);

    this.collection = options.collection;

    this.template = acme_todoextension_todomodule_collection_view_tpl;

    var self = this;
    this.collection.on("reset sync add remove change destroy", function () {
      self.render();
    });

    this.onDelete = function onDelete(e) {
      e.preventDefault();

      var id = jQuery(e.target).data("id");
      var model = this.collection.get(id);
      model.destroy();
    };
  }

  ToDoCollectionView.prototype = Object.create(SCCollectionView.prototype);
  ToDoCollectionView.prototype.constructor = ToDoCollectionView;

  ToDoCollectionView.prototype.getCellViewsPerRow = function () {
    return 1;
  };

  ToDoCollectionView.prototype.getCellViewInstance = function (model) {
    return new TodoItemView({
      model: model,
    });
  };

  ToDoCollectionView.prototype.getEvents = function () {
    return {
      'click button[data-action="delete"]': "onDelete",
    };
  };

  ToDoCollectionView.prototype.getContext = function () {
    return {};
  };

  return ToDoCollectionView;
});

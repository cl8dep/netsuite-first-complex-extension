// Copyright (c) 2021, Oracle and/or its affiliates. All rights reserved.
// Licensed under the Universal Permissive License v 1.0 as shown at http://oss.oracle.com/licenses/upl.
define("Acme.ToDoExtension.ToDoModule.Edit.Form.View", [
  "Backbone",
  "SCFormView",
  "Utils",
  "acme_todoextension_todomodule_edit_form.tpl",
], function (
  Backbone,
  SCFormViewModule,
  ExampleUserPreferencesHelper,
  acme_todoextension_todomodule_edit_form_tpl
) {
  "use strict";

  var SCFormView = SCFormViewModule.SCFormView;

  function ToDoEditFormView(options) {
    SCFormView.call(this, options.model);

    this.formModel.on("sync", function () {
      Backbone.history.navigate("todo", { trigger: true });
    });

    this.template = acme_todoextension_todomodule_edit_form_tpl;
  }

  ToDoEditFormView.prototype = Object.create(SCFormView.prototype);
  ToDoEditFormView.prototype.constructor = ToDoEditFormView;

  ToDoEditFormView.prototype.getEvents = function () {
    return {
      "submit form": "saveForm",
      "blur :input": "onFormFieldChange",
    };
  };

  // ToDoEditFormView.prototype.saveForm = function (e) {
  //   e.preventDefault();

  //   var promise = SCFormView.prototype.saveForm.call(this, e);

  //   return promise;
  // };

  ToDoEditFormView.prototype.getFormFieldValue = function (input) {
    var field = {
      name: input.attr("name"),
      value: input.val(),
    };

    if (!this.formModel.validate(field)) {
      SCFormView.prototype.removeErrorMessage.call(this, field.name);
    }

    return field;
  };

  ToDoEditFormView.prototype.getFormValues = function (form) {
    var formValues = form.serializeObject();

    return formValues;
  };

  ToDoEditFormView.prototype.getContext = function () {
    return {
      name: this.formModel.get("name"),
      notify: this.formModel.get("notify"),
      notes: this.formModel.get("notes"),
      isNew: this.formModel.isNew(),
      done: this.formModel.get("done"),
    };
  };

  return ToDoEditFormView;
});

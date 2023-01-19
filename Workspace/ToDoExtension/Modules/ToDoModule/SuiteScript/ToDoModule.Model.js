define("ToDoModule.Model", ["SC.Model"], function (SCModel) {
  "use strict";

  var record_type = "customrecord_todo_david";
  var name_record_field = "custrecord_todo_name";
  var done_record_field = "custrecord_todo_done";
  var notify_record_field = "custrecord_todo_notify";
  var notes_record_field = "custrecord_todo_notes";

  return SCModel.extend({
    name: "ToDoModule.Model",

    get: function (id) {
      var filters = [new nlobjSearchFilter("internalid", null, "is", id)];

      var columns = [
        new nlobjSearchColumn("internalid"),
        new nlobjSearchColumn(name_record_field),
        new nlobjSearchColumn(done_record_field),
        new nlobjSearchColumn(notify_record_field),
        new nlobjSearchColumn(notes_record_field),
      ];

      var search = nlapiSearchRecord(record_type, null, filters, columns);

      if (search && search.length === 1) {
        return this.normalize(search[0]);
      }
    },

    list: function () {
      var columns = [
        new nlobjSearchColumn("internalid"),
        new nlobjSearchColumn(name_record_field),
        new nlobjSearchColumn(done_record_field),
        new nlobjSearchColumn(notify_record_field),
        new nlobjSearchColumn(notes_record_field),
      ];

      var search = nlapiSearchRecord(record_type, null, null, columns);
      var self = this;

      return _.map(search, function (result) {
        return self.normalize(result);
      });
    },

    create: function (data) {
      var newRecord = nlapiCreateRecord(record_type);

      newRecord.setFieldValue(name_record_field, data.name);
      newRecord.setFieldValue(
        done_record_field,
        this.normalizeBoolean(data.done)
      );
      newRecord.setFieldValue(notify_record_field, data.notify);
      newRecord.setFieldValue(notes_record_field, data.notes);

      return nlapiSubmitRecord(newRecord);
    },

    update: function (id, data) {
      var record = nlapiLoadRecord(record_type, id);

      record.setFieldValue(name_record_field, data.name);
      record.setFieldValue(done_record_field, this.normalizeBoolean(data.done));
      record.setFieldValue(notify_record_field, data.notify);
      record.setFieldValue(notes_record_field, data.notes);

      return nlapiSubmitRecord(record);
    },

    delete: function (id) {
      nlapiDeleteRecord(record_type, id);
    },

    normalize: function (result) {
      return {
        internalid: result.getText("internalid"),
        name: result.getValue(name_record_field),
        done: result.getValue(done_record_field) === "T",
        notify: result.getValue(notify_record_field),
        notes: result.getValue(notes_record_field),
      };
    },
    normalizeBoolean: function (v) {
      return v ? "T" : "F";
    },
  });
});

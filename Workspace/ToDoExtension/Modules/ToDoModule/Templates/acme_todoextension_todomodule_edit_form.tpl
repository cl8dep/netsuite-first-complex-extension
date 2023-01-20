<form>
  <div data-type="alert-placeholder"></div>
  <div data-input="name" data-validation="control-group">
    <label for="name" class="form-label">Name: </label>
    <span data-validation="control">
      <input id="name" name="name" value="{{name}}" class="form-control" />
    </span>
  </div>
  <div>
    <label for="notify" class="form-label">Notify: </label>
    <input
      id="notify"
      name="notify"
      class="form-control"
      type="datetime-local"
      value="{{notify}}"
    />
  </div>
  <div class="form-floating" style="margin-bottom: 20px;">
    <label for="notes" class="form-label">Notes: </label>
    <textarea
      id="notes"
      name="notes"
      class="form-control"
      placeholder="Write notes here"
    >{{notes}}</textarea>

  </div>
  <div>
    <button type="submit" class="btn btn-primary">
      {{#if isNew}}
        Add
      {{else}}
        Update
      {{/if}}
    </button>
  </div>
</form>
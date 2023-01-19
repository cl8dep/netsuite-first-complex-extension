<a href="/todo/{{internalid}}" class="card-link">
  <li class="todo-item">
    <div class="form-check">
      <input
        class="form-check-input"
        type="checkbox"
        {{#if done}}checked{{/if}}
        id="done"
        name="done"
      />
    </div>
    <div class="todo-item-content">
      <h5 class="todo-item-title">
        {{name}}
      </h5>
      <div class="grow"></div>
      <div>
        <button type="button" class="btn btn-dark" data-action="delete" data-id="{{internalid}}">Delete</button>
      </div>
    </div>

  </li>
</a>
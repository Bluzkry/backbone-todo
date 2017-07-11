TodoView = Backbone.View.extend({
  tagName: 'li',
  className: 'list-group-item',
  events: {
    'click button.delete': 'deleteTodo'
  },
  initialize: function() {
    const self = this;
    self.listenTo(self.model, 'destroy', self.removeFromView);
    self.template = _.template($('#todo-template').html());
  },
  render: function() {
    const self = this;
    self.$el.html(self.template(self.model.toJSON()));
    return self;
  },
  deleteTodo: function() {
    const self = this;
    self.model.trigger('destroy', self.model);
  },
  removeFromView: function() {
    const self = this;
    self.undelegateEvents();
    self.$el.removeData().unbind();
    self.remove();
    Backbone.View.prototype.remove.call(this);
  }
});

ApplicationView = Backbone.View.extend({
  events: {
    'keypress #todo-input': 'createTodoModel'
  },
  el: '#todo-app',
  initialize: function() {
    const self = this;
    self.listenTo(self.collection, 'add', self.addTodo);
  },
  createTodoModel: function(event) {
    const self = this;
    if (event.keyCode != 13) {
      return;
    } else {
      self.collection.add({ title: $('#todo-input').val() });
      $('#todo-input').val('');
    }
  },
  addTodo: function(todo) {
    const self = this;
    const newView = new TodoView({ model: todo });
    self.$('#todo-list').append(newView.render().el);
  }
});

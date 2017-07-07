TodoView = Backbone.View.extend({
  tagName: 'li',
  initialize: function() {
    const self = this;
    self.template = _.template($('#todo-template').html());
  },
  render: function() {
    const self = this;
    self.$el.html(self.template(self.model.toJSON()));
    return self;
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
      todosCollection.add({ title: $('#todo-input').val() });
      $('#todo-input').val('');
    }
  },
  addTodo: function(todo) {
    const self = this;
    const newView = new TodoView({ model: todo });
    self.$('#todo-list').append(newView.render().el);
  }
});

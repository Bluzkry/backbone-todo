const TodoView = Backbone.View.extend({
  tagName: 'li',
  initialize: function() {
    this.template = _.template($('#todo-template').html());
  },
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
});

const TodosView = Backbone.View.extend({
  tagName: 'ul'
});

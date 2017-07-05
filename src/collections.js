const Todos = Backbone.Collection.extend({
  model: Todo,
});

const todos = new Todos();

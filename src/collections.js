var app = app || {};

app.Todos = Backbone.Collection.extend({
  model: app.Todo,
});

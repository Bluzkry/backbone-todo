describe('TodoView', () => {
  let todoView, todoModel;

  beforeEach(() => {
    loadFixtures('fixtures.html');
    todoModel = new Backbone.Model({
      title: 'Foo'
    });
    todoView = new TodoView({ model: todoModel });
  });

  it('should have an HTML element which is a list element', () => {
    expect(todoView.el.nodeName).toEqual('LI');
  });

  it('should produce HTML that reflects the model', () => {
    $('ul.todo-list-test').append(todoView.render().el);
    expect($(todoView.el).find('p')).toHaveText('Foo');
  });
});

describe('TodosView', () => {
  let todosView;

  beforeEach(() => {
    todosView = new TodosView();
  });

  it('should have an HTML element which is a list container element', () => {
    expect(todosView.el.nodeName).toEqual('UL');
  });

});

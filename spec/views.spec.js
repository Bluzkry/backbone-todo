describe('Todo view', () => {
  beforeEach(() => {
    loadFixtures('fixtures.html');
  });

  describe('TodoView', () => {
    let todoView, todoModel;

    beforeEach(() => {
      todoModel = new Backbone.Model({
        title: 'Foo'
      });
      todoView = new TodoView({ model: todoModel });
      $('ul#todo-list').append(todoView.render().el);
    });

    it('should have an HTML element which is a list element', () => {
      expect(todoView.el.nodeName).toEqual('LI');
    });

    it('should produce HTML that reflects the model', () => {
      expect(todoView.$el.find('p')).toContainText('Foo');
    });

    it('should be deleted from the DOM when the user clicks the delete button', () => {
      $('button.delete').trigger('click');
      expect(todoView.$el).not.toBeInDOM();
    });
  });

  describe('ApplicationView', () => {
    let applicationView, todosCollection;

    beforeEach(() => {
      todosCollection = new Todos();
      applicationView = new ApplicationView({ collection: todosCollection });
    });

    it('should render to the element with the id `todo-list', () => {
      expect(applicationView.el).toHaveId('todo-app');
    });

    it('should add a list item to the DOM when the user hits `enter` on the input', () => {
      $('#todo-input').val('Foo');
      const enter = jQuery.Event('keypress');
      enter.which = 13;
      enter.keyCode = 13;
      $('#todo-input').trigger(enter);

      expect($('li')).toExist();
      expect(applicationView.$el).toContainText('Foo');
    });
  });
});


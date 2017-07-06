describe('TodoView', () => {
  let todoView;

  beforeEach(() => {
    todoView = new TodoView();
  });

  it('should have an HTML element which is a list element', () => {
    expect(todoView.el.nodeName).toEqual('LI');
  });
});

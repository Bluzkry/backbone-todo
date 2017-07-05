describe('Todo model', () => {
  let todoModel;

  beforeEach(() => {
    todoModel = new Todo({
      title: 'foo'
    });
  });

  it('should have titles when instantiated', () => {
    expect(todoModel.get('title')).toEqual('foo');
  });
});

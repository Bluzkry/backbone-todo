describe('Todo collection', () => {
  let todoModel, todosCollection;
  beforeEach(() => {
    todoModel = new Todo({
      title: 'foo'
    });
    todosCollection = new Todos();
  });

  afterEach(() => {
    // reset the collection
    todosCollection.reset();
  });

  it('should add todo models to the collection', () => {
    todosCollection.add(todoModel);
    expect(todosCollection.length).toEqual(1);
    expect(todosCollection.at(0).get('title')).toEqual('foo');
  });
});

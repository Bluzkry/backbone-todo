describe('Todo model', () => {
  it('should have titles when instantiated', () => {
    const todo = new Todo({
      title: 'Eat breakfast.'
    });
    expect(todo.get('title')).toEqual('Eat breakfast.');
  });
});

/**
 * This is a little Todo app that I created with the practical javascript course.
 * Remember that everything in life is really just one big todo!
 */

let todos = ['item1', 'item2', 'item3'];
console.log('My Todos :', todos);

todos.push('item4');
console.log(todos);
todos.push('item5');

todos[3] = 'item4 updated';

todos.splice(0, 1);
console.log(todos);

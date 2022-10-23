import './styles.css';
import { Todo,TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList();

todoList.todos.forEach( crearTodoHtml );// es lo mismo que un foreach se omite el objeto y lo que se manda por que son el mismo solo funciona con un argumento

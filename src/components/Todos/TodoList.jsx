import Todo from './Todo';
import styles from './TodoList.module.css';

//список задач, если задачи нет, то текст Todo list is empty
function TodoList({ todos, deleteTodo, toggleTodo }) {
  return (
    <div className={styles.todoList}>
      {!todos.length && (
        <h2 style={{ color: 'white', marginTop: '0 auto' }}>To do is Empty</h2>
      )}
      {todos.map((todo) => {
        return (
          <Todo
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            toggleTodo={toggleTodo}
          />
        );
      })}
    </div>
  );
}

export default TodoList;

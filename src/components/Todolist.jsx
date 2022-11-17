import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';

function Todolist(
  {
    //todos,
    //todoComplete,
    //removeTodo,
  }
) {
  const todos = useSelector((state) => state.todos.todos);
  return (
    <ul>
      {todos.map((todo) => {
        return (
          <TodoItem
            //removeTodo={removeTodo}
            key={todo.id}
            {...todo}
            // todoComplete={todoComplete}
          />
        );
      })}
    </ul>
  );
}

export default Todolist;

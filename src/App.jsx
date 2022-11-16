import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import './App.css';
import TodoForm from './components/Todos/TodoForm';
import TodoList from './components/Todos/TodoList';
import TodosActions from './components/UI/TodosActions';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodoHandler = (text) => {
    const newTodo = {
      id: uuidv4(),
      text: text,
      isCompleted: false,
    };
    console.log(newTodo);
    setTodos([...todos, newTodo]);
  };

  const todoDeleteHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodoHandler = (id) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : { ...todo };
      })
    );
  };

  const resetTodosHandler = () => {
    setTodos([]);
  };

  const deleteCompletedTodosHandler = () => {
    setTodos(todos.filter((todo) => !todo.isCompleted));
  };

  const completedTodosLength = todos.filter((todo) => todo.isCompleted).length;
  // console.log(completedTodosLength);

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodoHandler} />
      {!!todos.length && (
        <TodosActions
          resetTodos={resetTodosHandler}
          deleteCompletedTodos={deleteCompletedTodosHandler}
          completedTodo={!!completedTodosLength}
        />
      )}

      <TodoList
        toggleTodo={toggleTodoHandler}
        todos={todos}
        deleteTodo={todoDeleteHandler}
      />
      {completedTodosLength > 0 && (
        <h2
          style={{ color: 'white', marginTop: '0 auto' }}
        >{`You have done ${completedTodosLength} ${
          completedTodosLength > 1 ? 'todos' : 'todo'
        }`}</h2>
      )}
    </div>
  );
}

export default App;

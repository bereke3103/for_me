import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Todolist from './components/Todolist';
import { addTodo } from './store/todoSlice';
import './App.css';
import InputFiles from './components/InputFiles';

function App() {
  // const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const addTask = () => {
    if (text.trim().length) {
      dispatch(addTodo({ text }));
      setText('');
    }
  };

  // const addTodo = () => {
  //   if (text.trim().length) {
  //     setTodos([
  //       ...todos,
  //       {
  //         id: new Date().toISOString(),
  //         text: text,
  //         completed: false,
  //       },
  //     ]);
  //     setText('');
  //   }
  // };

  //const removeTodo = (todoId) => {
  // setTodos(todos.filter((todo) => todo.id !== todoId));
  //};

  //const toggleTodoComplete = (todoId) => {
  // setTodos(
  //   todos.map((todo) => {
  //     if (todo.id !== todoId) return todo;
  //     return {
  //       ...todo,
  //       completed: !todo.completed,
  //     };
  //   })
  // );
  //};

  return (
    <div className="App">
      <InputFiles text={text} handleSublit={addTask} handleInput={setText} />

      <Todolist
      // removeTodo={removeTodo}
      // todoComplete={toggleTodoComplete}
      // todos={todos}
      />
    </div>
  );
}

export default App;

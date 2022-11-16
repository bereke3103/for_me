import { useState } from 'react';
import styles from './TodoForm.module.css';
import Button from '../UI/Button';

//поле ввода форма и кнопка сабмит
function TodoForm({ addTodo }) {
  const [text, setText] = useState('');
  const onSubmitHandler = (event) => {
    event.preventDefault();
    addTodo(text);
    setText('');
  };

  return (
    <>
      <form onSubmit={onSubmitHandler}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter new Todo"
          className={styles.input}
        />
        <Button className={styles.button} type="submit">
          Submit
        </Button>
      </form>
    </>
  );
}

export default TodoForm;

import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri';
import Button from './Button';

function TodosActions({ resetTodos, deleteCompletedTodos, completedTodo }) {
  return (
    <>
      <Button title="Reset todos" onClick={resetTodos}>
        <RiRefreshLine />
      </Button>
      <Button
        title="Delete completed todos"
        onClick={deleteCompletedTodos}
        disabled={!completedTodo}
      >
        <RiDeleteBin2Line />
      </Button>
    </>
  );
}

export default TodosActions;

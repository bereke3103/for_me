import { useAlert } from './AlertContext/AlertContext';

function Main() {
  const { toggleAlert } = useAlert();
  return (
    <>
      <div>Привет в примере UseContext</div>
      <button onClick={toggleAlert}>Показать алерт</button>
    </>
  );
}

export default Main;

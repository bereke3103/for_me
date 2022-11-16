import { useAlertToggle } from './AlertContext/AlertContext';

function Main() {
  const toggle = useAlertToggle();
  return (
    <>
      <div>Привет в примере UseContext</div>
      <button onClick={toggle}>Показать алерт</button>
    </>
  );
}

export default Main;

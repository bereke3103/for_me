import React from 'react';
import { useAlert } from './AlertContext';

function Alert() {
  const alert = useAlert();
  console.log(alert);

  if (!alert.visible) return null;
  return (
    <div
      style={{
        background: '#ff000070',
        padding: '29px',
        margin: '61px auto',
        width: '1200px',
        borderRadius: '5px',
        color: 'white',
        textAlign: 'left',
      }}
    >
      Это очень важное сообщение
      <button onClick={alert.toggleAlert}>Убрать алерт</button>
    </div>
  );
}

export default Alert;

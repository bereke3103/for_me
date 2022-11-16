import React from 'react';
import { useAlert } from './AlertContext';

function Alert() {
  const alert = useAlert();

  if (!alert) return null;
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
    </div>
  );
}

export default Alert;

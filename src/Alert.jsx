import React from 'react';
import { useContext } from 'react';
import { AlertContext } from './App';

function Alert() {
  const alert = useContext(AlertContext);

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

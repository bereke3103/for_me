import { useState } from 'react';
import { createContext } from 'react';
import Alert from './Alert';
import './App.css';
import Main from './Main';

export const AlertContext = createContext();

function App() {
  const [alert, setAlert] = useState(false);

  const toggleAlert = () => setAlert(!alert);

  return (
    <AlertContext.Provider value={alert}>
      <div className="App">
        <Alert />
        <Main toggle={toggleAlert} />
      </div>
    </AlertContext.Provider>
  );
}

export default App;

import { useState } from 'react';
import Alert from './Alert';
import './App.css';
import Main from './Main';

function App() {
  const [toggle, setToggle] = useState(false);
  const handleToggleShow = () => {
    setToggle(!toggle);
  };
  return (
    <div className="App">
      <Main clickToggleShow={handleToggleShow} />
      {toggle ? <Alert /> : null}
    </div>
  );
}

export default App;

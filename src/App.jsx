import Alert from './AlertContext/Alert';
import { AlertProvdier } from './AlertContext/AlertContext';
import './App.css';
import Main from './Main';

function App() {
  return (
    <AlertProvdier>
      <div className="App">
        <Alert />
        <Main toggle={() => {}} />
      </div>
    </AlertProvdier>
  );
}

export default App;

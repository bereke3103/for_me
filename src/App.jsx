import Drawer from './components/Drawer';
import 'macro-css';
import Header from './components/Header';
import Card from './components/Card/Card';

const boots = [
  {
    name: 'Кран первый',
    priece: 12000,
  },
  {
    name: 'Кран второй',
    priece: 13000,
  },
  {
    name: 'Кран третий',
    priece: 14000,
  },
  {
    name: 'Кран четвертый',
    priece: 15000,
  },
];

function App() {
  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />
      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1>Все кроссовки</h1>
          <div className="search-block">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Поиск..." />
          </div>
        </div>
        <div className="d-flex">
          {boots.map((boot, index) => {
            return (
              <Card
                key={index}
                name={boot.name}
                priece={boot.priece}
                onClick={() => alert(boot.name)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;

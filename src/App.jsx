import { useEffect, useState } from 'react';
import Drawer from './components/Drawer';
import 'macro-css';
import Header from './components/Header';
import Card from './components/Card/Card';

// const boots = [
//   {
//     name: 'Кран первый',
//     priece: 12000,
//   },
//   {
//     name: 'Кран второй',
//     priece: 13000,
//   },
//   {
//     name: 'Кран третий',
//     priece: 14000,
//   },
//   {
//     name: 'Кран четвертый',
//     priece: 15000,
//   },
//   {
//     name: 'Кран пятый',
//     priece: 16000,
//   },
//   {
//     name: 'Кран шестой',
//     priece: 17000,
//   },
//   {
//     name: 'Кран седьмой',
//     priece: 18000,
//   },
//   {
//     name: 'Кран восьмой',
//     priece: 19000,
//   },
// ];

function App() {
  const [openCart, setOpenCart] = useState(false);
  const [intoBasket, setIntoBasket] = useState([]);
  const [boots, setBoots] = useState([]);

  useEffect(() => {
    fetch('https://6374f71f48dfab73a4ee5a27.mockapi.io/items')
      .then((res) => res.json())
      .then((boots) => setBoots(boots));
  }, []);

  const handlerAddIntoBasket = (obj) => {
    // console.log(obj, 'handle');
    setIntoBasket([...intoBasket, obj]);
  };

  console.log(intoBasket);

  return (
    <div className="wrapper clear">
      {openCart ? (
        <Drawer onClose={() => setOpenCart(false)} items={intoBasket} />
      ) : null}
      <Header onOpenCart={() => setOpenCart(true)} />
      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1>Все кроссовки</h1>
          <div className="search-block">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Поиск..." />
          </div>
        </div>
        <div
          className="d-flex"
          style={{ flexWrap: 'wrap', justifyContent: 'center' }}
        >
          {boots.map((boot, index) => {
            return (
              <Card
                key={index}
                name={boot.name}
                priece={boot.priece}
                addIntoBasket={handlerAddIntoBasket}
                onFavorite={() => alert('Вы добавили в закладки')}
                onPlus={(obj) => handlerAddIntoBasket(obj)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;

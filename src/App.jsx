import { useEffect, useState } from 'react';
import Drawer from './components/Drawer';
import 'macro-css';
import Header from './components/Header';
import Card from './components/Card/Card';

function App() {
  const [openCart, setOpenCart] = useState(false);
  const [intoBasket, setIntoBasket] = useState([]);
  const [boots, setBoots] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const onChangeSearchValue = (event) => {
    setSearchValue(event.target.value);
  };

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
            <input
              value={searchValue}
              placeholder="Поиск..."
              onChange={onChangeSearchValue}
            />
            {searchValue && (
              <img
                className="removeBtn cu-p"
                src="/img/minus.svg"
                alt=""
                onClick={() => setSearchValue('')}
              />
            )}
          </div>
        </div>
        {searchValue ? <h3>{`Поиск по запросу: ${searchValue}`}</h3> : null}
        <div
          className="d-flex"
          style={{
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          {boots
            .filter((boot) =>
              boot.name.toLowerCase().includes(searchValue.toLocaleLowerCase())
            )
            .map((boot, index) => {
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

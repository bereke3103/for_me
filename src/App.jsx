import { useEffect, useState } from 'react';
import axios from 'axios';
import Drawer from './components/Drawer';
import 'macro-css';
import Header from './components/Header';
import Card from './components/Card/Card';

function App() {
  const [openCart, setOpenCart] = useState(false);
  const [favoriteBasket, setFavoriteBasket] = useState([]);
  const [intoBasket, setIntoBasket] = useState([]);
  const [boots, setBoots] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const onChangeSearchValue = (event) => {
    setSearchValue(event.target.value);
  };

  useEffect(() => {
    // fetch('https://6374f71f48dfab73a4ee5a27.mockapi.io/items')
    //   .then((res) => res.json())
    //   .then((boots) => setBoots(boots));

    axios
      .get('https://6374f71f48dfab73a4ee5a27.mockapi.io/items')
      .then((res) => {
        setBoots(res.data);
      });
    axios
      .get('https://6374f71f48dfab73a4ee5a27.mockapi.io/basket')
      .then((res) => {
        setIntoBasket(res.data);
      });
  }, []);

  const handlerAddIntoBasket = (obj) => {
    axios
      .post('https://6374f71f48dfab73a4ee5a27.mockapi.io/basket', obj)
      .then((res) => {
        console.log(res.data);
      });
    setIntoBasket([...intoBasket, obj]);
  };

  const handleFavoriteBasket = (obj) => {
    axios
      .post('https://6374f71f48dfab73a4ee5a27.mockapi.io/favorite', obj)
      .then((res) => {
        setFavoriteBasket(res.data);
      });
  };

  const handleRemoveItem = (id) => {
    setIntoBasket((item) => item.filter((item) => item.id !== id));
    axios.delete(`https://6374f71f48dfab73a4ee5a27.mockapi.io/basket/${id}`);
  };

  return (
    <div className="wrapper clear">
      {openCart ? (
        <Drawer
          onClose={() => setOpenCart(false)}
          items={intoBasket}
          removeItem={handleRemoveItem}
        />
      ) : null}
      <Header intoBasket={intoBasket} onOpenCart={() => setOpenCart(true)} />
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
                  clickFavoriteIntoBasket={handleFavoriteBasket}
                  key={index}
                  name={boot.name}
                  priece={boot.priece}
                  addIntoBasket={handlerAddIntoBasket}
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

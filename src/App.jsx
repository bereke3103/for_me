import 'macro-css';

function App() {
  return (
    <div className="wrapper clear">
      <div className="overlay">
        <div className="drawer">
          <h3 className="mb-30 d-flex justify-between ">
            Корзина
            <img className="removeBtn cu-p" src="/img/minus.svg" alt="" />
          </h3>

          <div className="items" style={{ flex: 1 }}>
            <div className="cartItem mb-20 d-flex align-center">
              <img
                className="mr-20"
                width={130}
                height={130}
                src="/img/pic.png"
                alt="kran"
              />
              <div className="mr-20">
                <p className="mb-5">Мужские краны</p>
                <b>10 000 тенге</b>
              </div>
              <img className="removeBtn" src="/img/minus.svg" alt="" />
            </div>
            <div className="cartItem mb-20 d-flex align-center">
              <img
                className="mr-20"
                width={130}
                height={130}
                src="/img/pic.png"
                alt="kran"
              />
              <div className="mr-20">
                <p className="mb-5">Мужские краны</p>
                <b>10 000 тенге</b>
              </div>
              <img className="removeBtn" src="/img/minus.svg" alt="" />
            </div>
          </div>

          <div className="cartTotalBlock">
            <ul>
              <li>
                <span>Итого:</span>
                <div></div>
                <b>21 000 тенге</b>
              </li>
              <li>
                <span>Налог 5%:</span>
                <div></div>
                <b>1000 тенге</b>
              </li>
            </ul>
            <button className="greenButton">
              Оформить заказ <img src="/img/arrow.svg" alt="" />
            </button>
          </div>
        </div>
      </div>
      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img width={150} height={150} src="/img/logo.svg" alt="" />

          <div>
            <h3 className="text-uppercase">React Logo</h3>
            <p className="opacity-5">Магазин кроссовки</p>
          </div>
        </div>
        <ul className="d-flex">
          <li className="mr-30">
            <img width={30} height={30} src="/img/basket.svg" alt="" />
            <span>1000 тенге</span>
          </li>
          <li>
            <img width={30} height={30} src="/img/user.svg" alt="" />
          </li>
        </ul>
      </header>
      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1>Все кроссовки</h1>
          <div className="search-block">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Поиск..." />
          </div>
        </div>
        <div className="d-flex">
          <div className="card">
            <div className="favorite">
              <img src="/img/heart-none.svg" alt="heart" />
            </div>
            <img width={153} height={132} src="/img/pic.png" alt="" />
            <h4>Отличный кран</h4>

            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column ">
                <span>Цена:</span>
                <b>10 000 тенге</b>
              </div>
              <button className="button">
                <img width={25} height={25} src="/img/plus.svg" alt="Plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <img width={153} height={132} src="/img/pic.png" alt="" />
            <h4>Отличный кран</h4>

            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column ">
                <span>Цена:</span>
                <b>10 000 тенге</b>
              </div>
              <button className="button">
                <img width={25} height={25} src="/img/plus.svg" alt="Plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <img width={153} height={132} src="/img/pic.png" alt="" />
            <h4>Отличный кран</h4>

            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column ">
                <span>Цена:</span>
                <b>10 000 тенге</b>
              </div>
              <button className="button">
                <img width={25} height={25} src="/img/plus.svg" alt="Plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <img width={153} height={132} src="/img/pic.png" alt="" />
            <h4>Отличный кран</h4>

            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column ">
                <span>Цена:</span>
                <b>10 000 тенге</b>
              </div>
              <button className="button">
                <img width={25} height={25} src="/img/plus.svg" alt="Plus" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

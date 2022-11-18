function Drawer({ onClose, items = [], removeItem }) {
  // const onClose = props;
  return (
    <div className="overlay">
      <div className="drawer">
        <h3 className="mb-30 d-flex justify-between ">
          Корзина
          <img
            className="removeBtn cu-p"
            src="/img/minus.svg"
            alt=""
            onClick={onClose}
          />
        </h3>

        <div className="items" style={{ flex: 1 }}>
          {items.length === 0 ? (
            <div>
              <h1>КОРЗИНА ПУСТАЯ</h1>
              <button onClick={onClose}>Вернуться назад</button>
            </div>
          ) : (
            items.map((obj, index) => (
              <div key={index} className="cartItem mb-20 d-flex align-center">
                <img
                  className="mr-20"
                  width={130}
                  height={130}
                  src="/img/pic.png"
                  alt="kran"
                />
                <div className="mr-20">
                  <p className="mb-5">{obj.name}</p>
                  <b>{obj.priece} тенге</b>
                </div>
                <img
                  onClick={() => removeItem(obj.id)}
                  className="removeBtn"
                  src="/img/minus.svg"
                  alt=""
                />
              </div>
            ))
          )}
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
  );
}

export default Drawer;

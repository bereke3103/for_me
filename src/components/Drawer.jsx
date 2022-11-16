function Drawer({ onClose }) {
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
  );
}

export default Drawer;

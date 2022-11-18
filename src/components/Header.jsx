function Header(props) {
  const { onOpenCart, intoBasket } = props;
  return (
    <header className="d-flex justify-between align-center p-40">
      <div className="d-flex align-center">
        <img width={150} height={150} src="/img/logo.svg" alt="" />

        <div>
          <h3 className="text-uppercase">React Logo</h3>
          <p className="opacity-5">Магазин кроссовки</p>
        </div>
      </div>
      <ul className="d-flex align-center">
        <li className="mr-30">
          <img src="/img/heart-none.svg" alt="heart" className="cu-p" />
        </li>
        <li className="mr-30">
          {intoBasket.length > 0 ? (
            <>
              <img
                width={30}
                height={30}
                src="/img/basket.svg"
                alt=""
                className="basket cu-p"
                onClick={onOpenCart}
              />{' '}
              <span>1000 тенге</span>
            </>
          ) : null}
        </li>
        <li>
          <img width={30} height={30} src="/img/user.svg" alt="" />
        </li>
      </ul>
    </header>
  );
}

export default Header;

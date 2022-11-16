function Header(props) {
  const { onOpenCart } = props;
  return (
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
          <img
            width={30}
            height={30}
            src="/img/basket.svg"
            alt=""
            className="basket cu-p"
            onClick={onOpenCart}
          />
          <span>1000 тенге</span>
        </li>
        <li>
          <img width={30} height={30} src="/img/user.svg" alt="" />
        </li>
      </ul>
    </header>
  );
}

export default Header;

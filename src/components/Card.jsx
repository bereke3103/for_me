function Card() {
  return (
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
  );
}

export default Card;

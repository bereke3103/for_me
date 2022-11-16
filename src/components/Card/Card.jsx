import styles from '../Card/Card.module.scss';

function Card({ name, priece, onClick }) {
  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img src="/img/heart-none.svg" alt="heart" />
      </div>
      <img width={153} height={132} src="/img/pic.png" alt="" />
      <h4>{name}</h4>

      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column ">
          <span>Цена:</span>
          <b>{priece}</b>
        </div>
        <button className={styles.button} onClick={onClick}>
          <img width={25} height={25} src="/img/plus.svg" alt="Plus" />
        </button>
      </div>
    </div>
  );
}

export default Card;

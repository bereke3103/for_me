import { useState } from 'react';
import styles from '../Card/Card.module.scss';

function Card(props) {
  // console.log(props);
  const { name, priece, onFavorite, onPlus, id } = props;
  const [isAdded, setIsAdded] = useState(false);

  const handlePlusClick = () => {
    //Аргументы name и priece мы написали, потому что в в компонентах мы указали, что он принимает в себе один объект
    onPlus({ name, priece, id });
    setIsAdded(!isAdded);
    // addIntoBasket(console.log({ name, priece }));
  };

  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img src="/img/heart-none.svg" alt="heart" onClick={onFavorite} />
      </div>
      <img width={153} height={132} src="/img/pic.png" alt="" />
      <h4>{name}</h4>

      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column ">
          <span>Цена:</span>
          <b>{priece}</b>
        </div>

        <img
          className={styles.plus}
          width={25}
          height={25}
          src={isAdded ? '/img/btn-checked.svg' : '/img/btn-not-checked.svg'}
          alt="Plus"
          onClick={handlePlusClick}
        />
      </div>
    </div>
  );
}

export default Card;

import { useState } from 'react';
import styles from '../Card/Card.module.scss';

function Card(props) {
  const { name, priece, onPlus, id, clickFavoriteIntoBasket } = props;
  const [isAdded, setIsAdded] = useState(false);
  const [favorite, setFavorite] = useState(false);

  const handleClickFavorite = () => {
    clickFavoriteIntoBasket({ name, priece, id });
    setFavorite(!favorite);
  };

  const handlePlusClick = () => {
    //Аргументы name и priece мы написали, потому что в в компонентах мы указали, что он принимает в себе один объект
    onPlus({ name, priece, id });
    setIsAdded(!isAdded);
  };

  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img
          src={favorite ? '/img/heart-orange.svg' : '/img/heart-none.svg'}
          alt="heart"
          onClick={handleClickFavorite}
        />
      </div>
      <img width={153} height={132} src="/img/pic.png" alt="" />
      <h4>{name}</h4>

      <div className="d-flex justify-between align-center top">
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

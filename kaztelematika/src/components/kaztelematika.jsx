import styles from '../components/kaztelematika.module.css';
import logo from '../img/logo.svg';

// header start

export function Header({ menu }) {
  return (
    <header className={styles.header}>
      <HeaderLogo />
      <HeaderList menu={menu} />
      <FeedbackBtn />
    </header>
  );
}

function HeaderLogo() {
  return (
    <div>
      <img src={logo} alt="" />
    </div>
  );
}

function HeaderList({ menu }) {
  return (
    <ul className={styles.menuItems}>
      {menu.map((menu, index) => {
        return <HeaderItem menu={menu} key={index} />;
      })}
    </ul>
  );
}

function HeaderItem({ menu }) {
  return (
    <>
      <li>
        <a href="" className={styles.menuLinks}>
          {menu}
        </a>
      </li>
    </>
  );
}

export const FeedbackBtn = () => {
  return (
    <>
      <button className={styles.feedbackBtn}>Обратная связь</button>
    </>
  );
};

// header end

// bread start

export function Bread({ bread }) {
  return (
    <div>
      <ul className={styles.bread}>
        {bread.map((bread, index) => {
          return <BreadInner key={index} bread={bread} />;
        })}
      </ul>
    </div>
  );
}

function BreadInner({ bread }) {
  return (
    <li>
      <a className={styles.bread_a} href="">
        {bread}
      </a>
    </li>
  );
}

// bread end

// news start

export function NewsSection({ news }) {
  return (
    <div className={styles.newsSection}>
      <h1>Новости</h1>
      <div className={styles.newsItems}>
        {news.map((newItem, index) => {
          return <News key={index} {...newItem} />;
        })}
      </div>
    </div>
  );
}

function News({ img, title, data, info }) {
  return (
    <div className={styles.newItem}>
      <div className="newsImg">
        <img src={img} alt="" />
      </div>
      <div className={styles.newsInfo}>
        <div className={styles.newsInfo_title}>{title}</div>
        <div className={styles.newsInfoData}>{data}</div>
        <p>{info}</p>
      </div>
    </div>
  );
}

// news end

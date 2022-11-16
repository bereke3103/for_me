import styles from '../UI/Button.module.css';

function Button({ onClick, children, disabled = false, title }) {
  return (
    <button
      className={styles.button}
      onClick={onClick}
      title={title}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;

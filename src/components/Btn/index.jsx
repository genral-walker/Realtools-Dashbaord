import styles from './index.module.scss';

export const Btn = ({ children, type, active }) => {
  const checkBtnType = (type) => {
    switch (type) {
      case 'nav':
        return `${styles.btn} ${styles.btnNav}`;

      default:
        return active ? `${styles.btn} ${styles.active}` : `${styles.btn}`;
    }
  };

  return <button className={checkBtnType(type)}>{children}</button>;
};

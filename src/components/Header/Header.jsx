import propTypes from 'prop-types';
import styles from './Header.module.scss';

const Header = ({ img, interlocutor }) => {
  return (
    <div className={styles.header}>
      <div className="wrapper">
        <div className={styles.header__interlocutor}>
          <img src={img} alt="interlocutor" className={styles.header__img} />
          <p className={styles.header__name}>{interlocutor}</p>
        </div>
      </div>
    </div>
  );
};

export default Header;

Header.propTypes = {
  img: propTypes.string.isRequired,
  interlocutor: propTypes.string.isRequired,
};

import { useState } from 'react';
import propTypes from 'prop-types';
import styles from './Footer.module.scss';

const Footer = ({ addMessage }) => {
  const [input, setInput] = useState('');

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addMessage(input);
    setInput('');
  };

  return (
    <div className={styles.footer}>
      <div className="wrapper">
        <form onSubmit={handleSubmit} className={styles.footer__form}>
          <input
            type="text"
            value={input}
            onChange={handleInput}
            className={styles.footer__input}
            placeholder="Type a message..."
          />
          <input
            type="submit"
            disabled={!input}
            className={styles.footer__button}
            value="Send"
          />
        </form>
      </div>
    </div>
  );
};

export default Footer;

Footer.propTypes = {
  addMessage: propTypes.func.isRequired,
};

import propTypes from 'prop-types';
import { useEffect, useRef } from 'react';
import styles from './ChatBody.module.scss';
import man from '../../images/man.png';

const ChatBody = ({ messages }) => {
  const mes = useRef();

  useEffect(() => {
    mes.current.scrollTop = mes.current.scrollHeight;
  });

  return (
    <div className={styles.chatBody} ref={mes}>
      <div className="wrapper">
        <ul className={styles.chatBody__messages}>
          {messages.map((message) => {
            return (
              <li
                key={message.value + message.date}
                className={`${styles.chatBody__message}  ${
                  styles[`chatBody__message--s--${message.sender}`]
                }`}
              >
                <div className={styles.chatBody__value}>
                  {message.sender === 'interlocutor' && (
                    <img
                      src={man}
                      alt="interlocutor"
                      className={styles.chatBody__img}
                    />
                  )}
                  {message.value}
                </div>
                <p className={styles.chatBody__time}>{message.date}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ChatBody;

ChatBody.propTypes = {
  messages: propTypes.arrayOf(
    propTypes.shape({
      value: propTypes.string.isRequired,
      sender: propTypes.string.isRequired,
      date: propTypes.string.isRequired,
    }),
  ).isRequired,
};

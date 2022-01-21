import propTypes from 'prop-types';
import styles from './ChatBody.module.scss';
import man from '../../images/man.png';

const ChatBody = ({ messages }) => {
  return (
    <div className={styles.chatBody}>
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
  // eslint-disable-next-line react/forbid-prop-types
  messages: propTypes.array.isRequired,
};
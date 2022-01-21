import { useState } from 'react';
import ChatBody from './ChatBody';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import man from '../images/man.png';

import '../styles/index.scss';

function App() {
  const [messages, setMessages] = useState([
    { value: 'test_1', sender: 'interlocutor', date: '11:11:11' },
    { value: 'test_2', sender: 'me', date: '11:11:12' },
    { value: 'test_3', sender: 'me', date: '11:11:13' },
    { value: 'test_4', sender: 'interlocutor', date: '11:11:14' },
  ]);

  const addMessage = (value) => {
    const date = new Date().toLocaleTimeString();
    setMessages((prevState) => [...prevState, { value, sender: 'me', date }]);
  };

  return (
    <div className="sticky-footer">
      <Header interlocutor="John" img={man} />
      <ChatBody messages={messages} />
      <Footer addMessage={addMessage} />
    </div>
  );
}

export default App;




  // src/TelegramForm.js
  import React, { useState } from 'react';
  import axios from 'axios';
  import './forma.css'
  
  const TelegramForm = () => {
      const [name, setName] = useState('');
      const [phone, setPhone] = useState('');
      const [message, setMessage] = useState('');
      const [isChecked, setIsChecked] = useState(false); // Состояние для галочки
      const [status, setStatus] = useState('');
      const [isOpen, setIsOpen] = useState(false); // Состояние для управления видимостью формы
  
      const BOT_TOKEN = '6731657906:AAGCKDw_41ec9uYvZuIgDsnNVoU5KUsEWco'; // Замените на ваш токен
      const CHAT_ID = '-1002123434386'; // Замените на ваш chat ID
  
  
      const handleSubmit = async (e) => {
          e.preventDefault();
          if (!isChecked) {
              setStatus('Вы должны согласиться с политикой конфиденциальности.');
              return;
          }
          setStatus('Отправка...');
  
          const textMessage = `Имя: ${name}\nТелефон: ${phone}\nСообщение: ${message}`;
  
          try {
              const response = await axios.post(
                  `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
                  {
                      chat_id: CHAT_ID,
                      text: textMessage,
                  }
              );
  
              if (response.data.ok) {
                  setStatus('Спасибо за заказ. Сообщение отправлено! В течении 15 минут вам позвонят)');
                  setName('');
                  setPhone('');
                  setMessage('');
                  setIsChecked(false); // Сбрасываем галочку после отправки
              } else {
                  setStatus('Ошибка отправки сообщения.');
              }
          } catch (error) {
              setStatus('Ошибка отправки сообщения.');
          }
      };
  
      const toggleForm = () => {
          setIsOpen(!isOpen);
      };
  
      return (
          <div className="telegram-form-container">
            
              {isOpen && (
                  <form onSubmit={handleSubmit} className="telegram-form">
                      <input
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Введите ваше имя"
                          required
                      />
                      <input
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="Введите ваш телефон"
                          required
                      />
                      <textarea
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          placeholder="Введите товар и количество в кг"
                          style={{ width: '100%', height: '100px' }}
                          required
                      />
                      <label>
                          <input 
                              type="checkbox"
                              checked={isChecked}
                              onChange={(e) => setIsChecked(e.target.checked)}
                          />
                         <p className='politikaConfidealnosti'> Я согласен с <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">политикой конфиденциальности</a></p>
                      </label>
                      <button className='zakaz' type="submit">Отправить  заявку</button>
                      {status && <p>{status}</p>}
                  </form>
              )}
                <button className='zakrytFormu' onClick={toggleForm}>
                  {isOpen ? 'Закрыть форму' : 'СОЗДАТЬ ЗАКАЗ'}
              </button>
          </div>
      );
  };
  
  export default TelegramForm;
  





import emailjs from 'emailjs-com';
import { forwardRef, useContext, useState } from 'react';
import { LangContext } from '../../hoc/LangProvider/LangProvider';
import styles from './Connect.module.css';

const Connect = forwardRef((props, ref) => {
  const { t } = useContext(LangContext);
  const [nameValue, setNameValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [messageValue, setMessageValue] = useState('');

  // Відправка форми на почту
  const handleSubmitForm = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_uth4svs', 'template_snkkgtp', e.target, '9KFxfhLLjTXeLIdAR')
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    setNameValue('');
    setEmailValue('');
    setMessageValue('');
  };

  return (
    <section className={styles.container} ref={ref}>
      <div className={styles.connect}>
        <div className={styles.textBlock}>
          <h5>
            connect
            <span>()</span>
          </h5>
          <p>{t('Connect text')}</p>
        </div>
        <form onSubmit={handleSubmitForm} className={styles.sendForm}>
          <input
            className={styles.sendForm__name}
            type="text"
            placeholder={t('NAME')}
            name="name"
            value={nameValue}
            onChange={(e) => setNameValue(e.target.value)}
          />
          <input
            className={styles.sendForm__email}
            type="text"
            placeholder={t('EMAIL')}
            name="user_email"
            value={emailValue}
            onChange={(e) => setEmailValue(e.target.value)}
          />
          <textarea
            className={styles.sendForm__message}
            style={{ resize: 'none' }}
            placeholder={t('MESSAGE')}
            name="message"
            value={messageValue}
            onChange={(e) => setMessageValue(e.target.value)}
          />
          <button type="submit" className={styles.sendForm__btn}>
            {t('SEND MESSAGE')}
          </button>
        </form>
      </div>
    </section>
  );
});

export default Connect;

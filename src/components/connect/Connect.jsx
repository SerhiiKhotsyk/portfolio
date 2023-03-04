import { forwardRef, useContext } from 'react';
import { LangContext } from '../../hoc/LangProvider/LangProvider';
import styles from './Connect.module.css';

const Connect = forwardRef((props, ref) => {
  const { t } = useContext(LangContext);

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
        <form className={styles.sendForm}>
          <input className={styles.sendForm__name} type="text" placeholder={t('NAME')} />
          <input className={styles.sendForm__email} type="text" placeholder={t('EMAIL')} />
          <textarea
            className={styles.sendForm__message}
            style={{ resize: 'none' }}
            placeholder={t('MESSAGE')}
          />
          <button
            type="submit"
            className={styles.sendForm__btn}
            onClick={(e) => e.preventDefault()}>
            {t('SEND MESSAGE')}
          </button>
        </form>
      </div>
    </section>
  );
});

export default Connect;

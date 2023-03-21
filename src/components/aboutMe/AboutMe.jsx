import styles from './AboutMe.module.css';
import braces from '../../assets/images/aboutMe/braces.svg';
import teg from '../../assets/images/aboutMe/teg.svg';
import { forwardRef, useContext } from 'react';
import { LangContext } from '../../hoc/LangProvider/LangProvider';

const AboutMe = forwardRef((props, ref) => {
  const { t } = useContext(LangContext);

  return (
    <section className={styles.container} ref={ref}>
      <div className={styles.aboutMe}>
        <div className={styles.textBlock}>
          <h5>
            aboutMe
            <span>()</span>
          </h5>
          <p>{t('aboutMetext1')}</p>
          <p>{t('aboutMetext2')}</p>
          <p>{t('aboutMetext3')}</p>
        </div>
        <div className={styles.spesificInfo}>
          <a
            href="https://serhiikhotsyk.github.io/kino-space/"
            target="_blank"
            className={styles.spesificInfo__elem}>
            <div>
              <h6>{t('Lates project')}</h6>
              <p>{t('Click here!')}</p>
            </div>
            <img src={teg} alt="teg" />
          </a>
          <a
            href="https://serhiikhotsyk.github.io/react-pizza/"
            target="_blank"
            className={styles.spesificInfo__elem}>
            <div>
              <h6>{t('Hardest project')}</h6>
              <p>{t('Find here!')}</p>
            </div>
            <img src={braces} alt="braces" />
          </a>
        </div>
      </div>
    </section>
  );
});

export default AboutMe;

import styles from './Project.module.css';
import projLink from '../../../assets/images/projects/chain.svg';
import github from '../../../assets/images/projects/github.svg';
import { useTranslation } from 'react-i18next';

const Project = ({ project }) => {
  const { t } = useTranslation();

  return (
    <div className={styles.element}>
      <div className={styles.imgContainer}>
        <img src={project.img} alt="projectImage" />
        <a href={project.linkPreview} target="_blank" className={styles.imgView}>
          {t('View project')}
        </a>
      </div>
      <div className={styles.textBlock}>
        <div className={styles.textBlock__content}>
          <h4 className={styles.textBlock__title}>{project.title}</h4>
          <p className={styles.textBlock__decr}>{t(project.descr)}</p>
          <p className={styles.textBlock__stack}>
            {t('Tech stack')} : <span>{project.stack}</span>
          </p>
        </div>
        <div className={styles.textBlock__footer}>
          <span>
            <a href={project.linkPreview} target="_blank" className={styles.linkPreview}>
              <img src={projLink} className={styles.footer__img} />
              {t('Live Preview')}
            </a>
          </span>
          <span>
            <a href={project.linkGithub} target="_blank" className={styles.linkGithub}>
              <img src={github} className={styles.footer__img} />
              {t('View Code')}
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Project;

import styles from './Project.module.css';
import projLink from '../../../assets/images/projects/chain.svg';
import github from '../../../assets/images/projects/github.svg';

const Project = ({ project }) => {
  return (
    <div className={styles.element}>
      <div className={styles.imgContainer}>
        <img src={project.img} alt='projectImage' />
      </div>
      <div className={styles.textBlock}>
        <div className={styles.textBlock__content}>
          <h4 className={styles.textBlock__title}>{project.title}</h4>
          <p className={styles.textBlock__decr}>
            {project.descr}
          </p>
          <p className={styles.textBlock__stack}>Tech stack : <span>{project.stack}</span></p>
        </div>
        <div className={styles.textBlock__footer}>
          <span><a href={project.linkPreview}><img src={projLink} className={styles.footer__img} />Live Preview</a></span>
          <span><a href={project.github}><img src={github} className={styles.footer__img} />View Code</a></span>
        </div>
      </div>
    </div>
  );
}

export default Project;
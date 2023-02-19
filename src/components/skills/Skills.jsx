import styles from './Skills.module.css';
import html5 from '../../assets/images/skills/html5.svg';
import css3 from '../../assets/images/skills/css3.svg';
import javascript from '../../assets/images/skills/javascript.svg';
import react from '../../assets/images/skills/react.svg';
import redux from '../../assets/images/skills/redux.svg';
import bootstrap from '../../assets/images/skills/bootstrap.svg';
import tailwind from '../../assets/images/skills/tailwind.svg';
import sass from '../../assets/images/skills/sass.svg';
import git from '../../assets/images/skills/git.svg';
import greensock from '../../assets/images/skills/greensock.svg';
import vscode from '../../assets/images/skills/vscode.svg';
import github from '../../assets/images/skills/github.svg';

const images = [
  html5, css3, javascript, react, redux, bootstrap, tailwind, sass, git, greensock, vscode, github
];

const Skills = () => {
  return (
    <section className={styles.container}>
      <div className={styles.skills}>
        <h5>skills<span>()</span></h5>
        <div className={styles.images}>
          {images.map(img => <div className={styles.imgContainer}>
            <img src={img} alt='icon' />
          </div>)}
        </div>
      </div>
    </section>
  );
}

export default Skills;
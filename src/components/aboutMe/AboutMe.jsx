import styles from './AboutMe.module.css';
import braces from '../../assets/images/aboutMe/braces.svg';
import teg from '../../assets/images/aboutMe/teg.svg';
import { forwardRef } from 'react';

const AboutMe = forwardRef((props, ref) => {
  return (
    <section className={styles.container} ref={ref}>
      <div className={styles.aboutMe}>
        <div className={styles.textBlock}>
          <h5>
            aboutMe<span>()</span>
          </h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer velit turpis, finibus
            eu condimentum ut, posuere at ipsum. Maecenas vel consequat mauris. Quisque sodales
            ipsum aliquet aliquam placerat. Proin varius condimentum sapien. Mauris quis elit nibh.
            Morbi ut facilisis nisl. Duis et leo ut odio rhoncus porta a a dui. Nullam arcu nibh,
            bibendum in enim sed, ullamcorper feugiat nunc.
          </p>
        </div>
        <div className={styles.spesificInfo}>
          <a href="#" className={styles.spesificInfo__elem}>
            <div>
              <h6>Lates project</h6>
              <p>Click here!</p>
            </div>
            <img src={teg} alt="teg" />
          </a>
          <a href="#" className={styles.spesificInfo__elem}>
            <div>
              <h6>Hardest project</h6>
              <p>Find here!</p>
            </div>
            <img src={braces} alt="braces" />
          </a>
        </div>
      </div>
    </section>
  );
});

// const AboutMe = () => {
//     return (
//         <section className={styles.container}>
//             <div className={styles.aboutMe}>
//                 <div className={styles.textBlock}>
//                     <h5>aboutMe<span>()</span></h5>
//                     <p>
//                         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer velit turpis, finibus eu condimentum ut, posuere at ipsum. Maecenas vel consequat mauris. Quisque sodales ipsum aliquet aliquam placerat. Proin varius condimentum sapien. Mauris quis elit nibh. Morbi ut facilisis nisl. Duis et leo ut odio rhoncus porta a a dui. Nullam arcu nibh, bibendum in enim sed, ullamcorper feugiat nunc.
//                     </p>
//                 </div>
//                 <div className={styles.spesificInfo}>
//                     <div className={styles.spesificInfo__elem}>
//                         <div>
//                             <h6>Lates project</h6>
//                             <p><a href='#'>Click here!</a></p>
//                         </div>
//                         <img src={teg} alt='teg' />
//                     </div>
//                     <div className={styles.spesificInfo__elem}>
//                         <div>
//                             <h6>Hardest project</h6>
//                             <p><a href='#'>Find here!</a></p>
//                         </div>
//                         <img src={braces} alt='braces' />
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }

export default AboutMe;

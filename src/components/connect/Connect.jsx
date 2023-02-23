import { forwardRef } from 'react';
import styles from './Connect.module.css';

const Connect = forwardRef((props, ref) => {
  return (
    <section className={styles.container} ref={ref}>
      <div className={styles.connect}>
        <div className={styles.textBlock}>
          <h5>
            connect<span>()</span>
          </h5>
          <p>
            I would love to hear about your project and how I could help. Please fill in the form,
            and I’ll get back to you as soon as possible.
          </p>
        </div>
        <form className={styles.sendForm}>
          <input className={styles.sendForm__name} type="text" placeholder="NAME" />
          <input className={styles.sendForm__email} type="text" placeholder="EMAIL" />
          <textarea
            className={styles.sendForm__message}
            style={{ resize: 'none' }}
            placeholder="MESSAGE"
          />
          <button
            type="submit"
            className={styles.sendForm__btn}
            onClick={(e) => e.preventDefault()}>
            SEND MESSAGE
          </button>
        </form>
      </div>
    </section>
  );
});

// const Connect = ({ connect }) => {
//   console.log(connect);
//   return (
//     <section className={styles.container} ref={connect}>
//       <div className={styles.connect}>
//         <div className={styles.textBlock}>
//           <h5>
//             connect<span>()</span>
//           </h5>
//           <p>
//             I would love to hear about your project and how I could help. Please fill in the form,
//             and I’ll get back to you as soon as possible.
//           </p>
//         </div>
//         <form className={styles.sendForm}>
//           <input className={styles.sendForm__name} type="text" placeholder="NAME" />
//           <input className={styles.sendForm__email} type="text" placeholder="EMAIL" />
//           <textarea
//             className={styles.sendForm__message}
//             style={{ resize: 'none' }}
//             placeholder="MESSAGE"
//           />
//           <button
//             type="submit"
//             className={styles.sendForm__btn}
//             onClick={(e) => e.preventDefault()}>
//             SEND MESSAGE
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// };

export default Connect;

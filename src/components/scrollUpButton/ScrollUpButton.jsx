import { useEffect, useState } from 'react';
import styles from './ScrollUpButton.module.css';
import { FaArrowUp } from 'react-icons/fa';

const ScrollUpButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <button className={showButton ? styles.btn : styles.btnHidden} onClick={scrollUp}>
        <FaArrowUp />
      </button>
    </>
  );
};

export default ScrollUpButton;

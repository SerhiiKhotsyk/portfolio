import styles from './Footer.module.css';
import { BsFacebook, BsFillTelephoneFill } from 'react-icons/bs';
import { MdMail } from 'react-icons/md';
import { FiInstagram } from 'react-icons/fi';
import { FaTelegramPlane } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.contact}>
        <a href="tel:380976577596">
          <span>
            <BsFillTelephoneFill />
          </span>
          +380976577596
        </a>
        <a href="mailto: serhiikhotsyk@gmail.com">
          <span className={styles.mailIcon}>
            <MdMail />
          </span>
          serhiikhotsyk@gmail.com
        </a>
        <a href="https://instagram.com/khtsks_111111" target={'_blank'}>
          <span className={styles.mailIcon}>
            <FiInstagram />
          </span>
          Instagram
        </a>
        <a href="https://www.facebook.com/serhiy.hotsik" target={'_blank'}>
          <span className={styles.mailIcon}>
            <BsFacebook />
          </span>
          Facebook
        </a>
        <a href="https://t.me/Khtsksrh" target={'_blank'}>
          <span className={styles.mailIcon}>
            <FaTelegramPlane />
          </span>
          Telegram
        </a>
      </div>
    </footer>
  );
};

export default Footer;

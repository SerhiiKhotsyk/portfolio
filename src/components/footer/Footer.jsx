import styles from './Footer.module.css';
import phone from '../../assets/images/footer/phone.png';
import email from '../../assets/images/footer/email.png';
import instagram from '../../assets/images/footer/instagram.png';
import telegram from '../../assets/images/footer/telegram.png';
import facebook from '../../assets/images/footer/facebook.png';

const Footer = () => {
    return (
        <footer className={styles.container}>
            <div className={styles.contact}>
                <a href='tel:380976577596' ><img src={phone} />+380976577596</a>
                <a href="mailto: serhiikhotsyk@gmail.com"><img src={email} />serhiikhotsyk@gmail.com</a>
                <a href='https://instagram.com/khtsks_111111' target={'_blank'}><img src={instagram} />Instagram</a>
                <a href='https://www.facebook.com/serhiy.hotsik' target={'_blank'}><img src={facebook} />Facebook</a>
                <a href='https://t.me/Khtsksrh' target={'_blank'}><img src={telegram} />Telegram</a>
            </div>

        </footer>
    );
}

export default Footer;
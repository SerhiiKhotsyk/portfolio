import styles from './ProfileInfo.module.css';
import profilePhoto from '../../assets/images/header/profilePhoto.png';
import reactIcon from '../../assets/images/header/react.svg';
import TSIcon from '../../assets/images/header/typeScript.svg';
import htmlIcon from '../../assets/images/header/html.svg';

const ProfileInfo = () => {
    return (
        <section className={styles.profileInfo}>
            <div className={styles.textBlock}>
                <span>Hello, i am</span>
                <h1>&lt; Serhii <br /> Khotsyk  &frasl; &gt;</h1>
                <h5 className={styles.subTitle} >Front-end Developer</h5>
                <div className={styles.experience}>
                    <div className={styles.experience__elem}>
                        <span>7</span>
                        <p>pet-projects</p>
                    </div>
                    <div className={styles.experience__elem}>
                        <span>1000+</span>
                        <p>hours of practice</p>
                    </div>
                </div>
            </div>
            <div className={styles.photoBlock}>
                <div className={styles.photoBackground}>
                    <img src={profilePhoto} alt='profilePhoto' />
                </div>
                <div className={`${styles.iconBackground} ${styles.reactIcon}`}>
                    <img src={reactIcon} alt='reactIcon' />
                </div>
                <div className={`${styles.iconBackground} ${styles.TSIcon}`}>
                    <img src={TSIcon} alt='TSIcon' />
                </div>
                <div className={`${styles.iconBackground} ${styles.htmlIcon}`}>
                    <img src={htmlIcon} alt='htmlIcon' />
                </div>
            </div>
        </section>
    );
}

export default ProfileInfo;
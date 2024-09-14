import Image from 'next/image';
import styles from '../styles/home.module.scss';

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.menuContainer}>
        {/* Social Media Links */}
        <div className={styles.socialMedia}>
          <a href="https://facebook.com/drasivirtuve" target="_blank" rel="noopener noreferrer">
            <img src="/icons/facebook.svg" alt="Facebook" className={styles.icon} />
          </a>
          <a href="https://instagram.com/drasi.virtuve" target="_blank" rel="noopener noreferrer">
            <img src="/icons/instagram.svg" alt="Instagram" className={styles.icon} />
          </a>
        </div>

        {/* Menu Image */}
        <Image
          src="/images/menu.png"
          alt="Restaurant Menu"
          layout="responsive"
          width={1000}
          height={1500}
        />
      </div>
    </div>
  );
};

export default Home;

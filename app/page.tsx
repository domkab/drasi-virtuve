import styles from './styles/home.module.scss';
import Image from 'next/image';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.menuContainer}>
        {/* Left Social Media Icon */}
        <div className={styles.address}>Antakalnio g. 77, Vilnius</div>
        <div className={`${styles.socialMedia} ${styles.socialMediaLeft}`}>
          <a
            href="https://www.facebook.com/share/H2tt6vAqa9WJi8jx/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialItem}
          >
            <Image
              src="/icons/facebook.svg"
              alt="Facebook"
              width={32}
              height={32}
              className={styles.icon}
            />
            <span className={styles.socialText}>DrasiVirtuve</span>
          </a>
        </div>

        {/* Menu Image */}
        <Image
          src="/images/menu.png"
          alt="Restaurant Menu"
          width={1000}
          height={1500}
          className={styles.image}
        />

        {/* Right Social Media Icon */}
        <div className={`${styles.socialMedia} ${styles.socialMediaRight}`}>
          <a
            href="https://www.instagram.com/drasi.virtuve?igsh=MTJ5ZHUwdnhjM2N5dg=="
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialItem}
          >
            <Image
              src="/icons/instagram.svg"
              alt="Instagram"
              width={32}
              height={32}
              className={styles.icon}
            />
            <span className={styles.socialText}>drasi.virtuve</span>
          </a>
        </div>
      </div>
    </div>
  );
}

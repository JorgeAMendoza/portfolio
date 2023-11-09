import styles from './desktop-nav.module.css';
import Link from 'next/link';
import { spaceMono } from '@/utils/fonts';

interface DesktopNavBarProps {
  navLinks: [string, string, string, string];
}

const DesktopNavBar = ({ navLinks }: DesktopNavBarProps) => {
  return (
    <>
      <nav
        className={styles.navDesktop}
        aria-label="Portfolio Navigation"
        id="desktop-nav"
      >
        <ul className={styles.navDesktopMenu}>
          <li className={styles.navDesktopItem}>
            <a href={navLinks[0]}>About</a>
          </li>
          <li className={styles.navDesktopItem}>
            <a href={navLinks[1]}>Showcase</a>
          </li>
          <li className={styles.navDesktopItem}>
            <a href={navLinks[2]}>Projects</a>
          </li>
          <li className={styles.navDesktopItem}>
            <a href={navLinks[3]}>Contact</a>
          </li>
          <li className={styles.navDesktopItem}>
            <Link
              href="/resume.pdf"
              className={spaceMono.className}
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default DesktopNavBar;

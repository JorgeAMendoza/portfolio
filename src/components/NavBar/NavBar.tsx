import Image from 'next/image';
import utilStyles from '../../styles/utils.module.css';
import styles from './navbar.module.css';
import { useState } from 'react';
import clsx from 'clsx';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className={styles.navBar}>
      <div className={styles.navBarContainer}>
        <div>
          <Image
            src="/logo.svg"
            alt="jorge mendoza logo"
            width={148}
            height={40}
          />
        </div>
        {/* mobile nav */}
        <div>
          <button
            className={styles.mobileNavButton}
            aria-label="open the navigation menu"
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Image
              src="/icons/hamburger-menu.svg"
              alt="menu icon"
              width={25}
              height={25}
            />
          </button>
          <nav
            id="mobile-nav"
            className={`${styles.mobileNavMenu} ${clsx(
              menuOpen && styles.showMenu
            )}`}
            aria-hidden={!menuOpen}
          >
            <ul className={styles.mobileNavList}>
              <li className={styles.mobileNavItem}>About</li>
              <li className={styles.mobileNavItem}>Showcase</li>
              <li className={styles.mobileNavItem}>Projects</li>
              <li className={styles.mobileNavItem}>Contact</li>
            </ul>
          </nav>
        </div>
        {/* desktop nav */}
        <nav className={styles.nav}>
          <ul>
            <li>About</li>
            <li>Showcase</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;

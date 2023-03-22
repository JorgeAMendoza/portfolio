import Image from 'next/image';
import styles from './navbar.module.css';
import { useState } from 'react';
import clsx from 'clsx';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className={styles.navBar}>
      <div className={styles.navBarContainer}>
        <a href="#home-header">
          <Image
            src="/logo.svg"
            alt="jorge mendoza logo"
            width={148}
            height={40}
          />
        </a>
        {/* mobile nav */}
        <div className={styles.mobileNav}>
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
              <li className={styles.mobileNavItem}>
                <a href="#about-me" onClick={() => setMenuOpen(false)}>
                  About
                </a>
              </li>
              <li className={styles.mobileNavItem}>
                <a href="#project-showcase" onClick={() => setMenuOpen(false)}>
                  Showcase
                </a>
              </li>
              <li className={styles.mobileNavItem}>
                <a href="#other-projects" onClick={() => setMenuOpen(false)}>
                  Projects
                </a>
              </li>
              <li className={styles.mobileNavItem}>
                <a href="#contact-me" onClick={() => setMenuOpen(false)}>
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
        {/* desktop nav */}
        <nav className={styles.navDesktop}>
          <ul className={styles.navDesktopMenu}>
            <li className={styles.navDesktopItem}>
              <a href="#about-me" onClick={() => setMenuOpen(false)}>
                About
              </a>
            </li>
            <li className={styles.navDesktopItem}>
              <a href="#project-showcase" onClick={() => setMenuOpen(false)}>
                Showcase
              </a>
            </li>
            <li className={styles.navDesktopItem}>
              <a href="#other-projects" onClick={() => setMenuOpen(false)}>
                Projects
              </a>
            </li>
            <li className={styles.navDesktopItem}>
              <a href="#contact-me" onClick={() => setMenuOpen(false)}>
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;

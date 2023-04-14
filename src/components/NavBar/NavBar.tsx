import Image from 'next/image';
import styles from './navbar.module.css';
import { useEffect, useState } from 'react';
import clsx from 'clsx';
import useIsMobile from '@/hooks/useMedia';
import { Space_Mono } from 'next/font/google';
import Link from 'next/link';

const SpaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400'],
});

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const mobile = useIsMobile();

  useEffect(() => {
    if (!mobile) setMenuOpen(false);
  }, [mobile]);

  return (
    <div className={styles.navBar}>
      <div className={styles.navBarContainer}>
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="jorge mendoza logo"
            width={187}
            height={40}
          />
        </Link>
        {/* mobile nav */}
        <button
          className={styles.mobileNavButton}
          aria-label="open the navigation menu"
          aria-controls="mobile-nav"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Image
            src="/icons/hamburger-menu.svg"
            alt="menu icon"
            width={30}
            height={30}
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
              <div className={styles.mobileNavItemContainer}>
                <a href="#about-me" onClick={() => setMenuOpen(false)}>
                  About
                </a>
              </div>
            </li>
            <li className={styles.mobileNavItem}>
              <div className={styles.mobileNavItemContainer}>
                <a href="#project-showcase" onClick={() => setMenuOpen(false)}>
                  Showcase
                </a>
              </div>
            </li>
            <li className={styles.mobileNavItem}>
              <div className={styles.mobileNavItemContainer}>
                <a href="#other-projects" onClick={() => setMenuOpen(false)}>
                  Projects
                </a>
              </div>
            </li>
            <li className={styles.mobileNavItem}>
              <div className={styles.mobileNavItemContainer}>
                <a href="#contact-me" onClick={() => setMenuOpen(false)}>
                  Contact
                </a>
              </div>
            </li>
            <li className={styles.mobileNavItem}>
              <div className={styles.mobileNavItemContainer}>
                <a
                  href="/resume.pdf"
                  target="__blank"
                  rel="nonreferrer"
                  className={SpaceMono.className}
                  onClick={() => setMenuOpen(false)}
                >
                  Resume
                </a>
              </div>
            </li>
          </ul>
        </nav>
        {/* desktop nav */}
        <nav className={styles.navDesktop}>
          <ul className={styles.navDesktopMenu}>
            <li className={styles.navDesktopItem}>
              <Link href="/#about-me" onClick={() => setMenuOpen(false)}>
                About
              </Link>
            </li>
            <li className={styles.navDesktopItem}>
              <Link
                href="/#project-showcase"
                onClick={() => setMenuOpen(false)}
              >
                Showcase
              </Link>
            </li>
            <li className={styles.navDesktopItem}>
              <Link href="/#other-projects" onClick={() => setMenuOpen(false)}>
                Projects
              </Link>
            </li>
            <li className={styles.navDesktopItem}>
              <Link href="/#contact-me" onClick={() => setMenuOpen(false)}>
                Contact
              </Link>
            </li>
            <li className={styles.navDesktopItem}>
              <a
                href="/resume.pdf"
                className={SpaceMono.className}
                target="_blank"
                rel="noreferrer"
                onClick={() => setMenuOpen(false)}
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;

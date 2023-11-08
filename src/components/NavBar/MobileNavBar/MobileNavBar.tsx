import useClickOutside from '@/hooks/useClickOutside';
import { spaceMono } from '@/utils/fonts';
import clsx from 'clsx';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import styles from './mobile-nav.module.css';

const MobileNavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const ref = useClickOutside(() => {
    setMenuOpen(false);
    document.body.classList.remove('lock');
  });
  const router = useRouter();

  const navLinks =
    router.pathname === '/'
      ? ['#about-me', '#project-showcase', '#other-projects', '#contact-me']
      : [
          '/#about-me',
          '/#project-showcase',
          '/#other-projects',
          '/#contact-me',
        ];

  if (!menuOpen) document.body.classList.remove('lock');
  
  return (
    <>
      {!menuOpen ? (
        <button
          className={styles.mobileNavButton}
          aria-label="open the navigation menu"
          aria-controls="mobile-nav"
          onClick={() => {
            setMenuOpen(true);
            document.body.classList.add('lock');
          }}
          type="button"
        >
          <Image
            src="/icons/hamburger-menu.svg"
            alt=""
            width={30}
            height={30}
          />
        </button>
      ) : null}
      {menuOpen ? (
        <button
          className={styles.mobileNavButtonClose}
          aria-label="close the nav navigation menu"
          aria-controls="mobile-nav"
          type="button"
          onClick={() => {
            setMenuOpen(false);
            document.body.classList.remove('lock');
          }}
        >
          <Image
            src="/icons/close-menu-nav.svg"
            alt=""
            width={30}
            height={30}
          />
        </button>
      ) : null}
      <nav
        id="mobile-nav"
        className={`${styles.mobileNavMenu} ${clsx(
          menuOpen && styles.showMenu
        )}`}
        aria-hidden={!menuOpen}
        aria-label="Portfolio Navigation"
        ref={ref}
      >
        <ul className={styles.mobileNavList}>
          <li className={styles.mobileNavItem}>
            <div className={styles.mobileNavItemContainer}>
              <a href={navLinks[0]} onClick={() => setMenuOpen(false)}>
                About
              </a>
            </div>
          </li>
          <li className={styles.mobileNavItem}>
            <div className={styles.mobileNavItemContainer}>
              <a href={navLinks[1]} onClick={() => setMenuOpen(false)}>
                Showcase
              </a>
            </div>
          </li>
          <li className={styles.mobileNavItem}>
            <div className={styles.mobileNavItemContainer}>
              <a href={navLinks[2]} onClick={() => setMenuOpen(false)}>
                Projects
              </a>
            </div>
          </li>
          <li className={styles.mobileNavItem}>
            <div className={styles.mobileNavItemContainer}>
              <a href={navLinks[3]} onClick={() => setMenuOpen(false)}>
                Contact
              </a>
            </div>
          </li>
          <li className={styles.mobileNavItem}>
            <div className={styles.mobileNavItemContainer}>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="nonreferrer"
                className={spaceMono.className}
                onClick={() => setMenuOpen(false)}
              >
                Resume
              </a>
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default MobileNavBar;

import useClickOutside from '@/hooks/useClickOutside';
import { spaceMono } from '@/utils/fonts';
import clsx from 'clsx';
import Image from 'next/image';
import { useEffect, useState, useRef } from 'react';
import styles from './mobile-nav.module.css';

interface MobileNavBarProps {
  navLinks: [string, string, string, string];
}

const MobileNavBar = ({ navLinks }: MobileNavBarProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const nav = useRef<HTMLDivElement | null>(null);
  const ref = useClickOutside<HTMLUListElement>(() => {
    setMenuOpen(false);
    document.body.classList.remove('lock');
  });

  useEffect(() => {
    const navContainer = nav.current;
    const handleKey = (e: KeyboardEvent) => {
      if (!menuOpen) return;
      switch (e.key) {
        case 'Escape': {
          setMenuOpen(false);
          break;
        }
        case 'Tab': {
          const closeButton = document.querySelector(
            '#closeNav'
          ) as HTMLElement;
          const navLinks = document.querySelectorAll(
            '#navLinks a'
          ) as NodeListOf<HTMLElement>;
          if (e.shiftKey && document.activeElement === closeButton) {
            e.preventDefault();
            navLinks[navLinks.length - 1].focus();
          } else if (
            !e.shiftKey &&
            document.activeElement === navLinks[navLinks.length - 1]
          ) {
            e.preventDefault();
            closeButton?.focus();
          }
          break;
        }
      }
    };

    navContainer?.addEventListener('keydown', handleKey);

    return () => navContainer?.removeEventListener('keydown', handleKey);
  }, [menuOpen]);

  if (!menuOpen) document.body.classList.remove('lock');

  return (
    <div ref={nav}>
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
          id="closeNav"
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
      >
        <ul className={styles.mobileNavList} ref={ref} id="navLinks">
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
    </div>
  );
};

export default MobileNavBar;

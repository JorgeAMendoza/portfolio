import Image from 'next/image';
import styles from './navbar.module.css';
import { useEffect, useMemo, useState } from 'react';
import clsx from 'clsx';
import useIsMobile from '@/hooks/useMedia';
import { Space_Mono } from 'next/font/google';
import Link from 'next/link';
import useClickOutside from '@/hooks/useClickOutside';
import { useRouter } from 'next/router';

const SpaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400'],
});

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const ref = useClickOutside(setMenuOpen);
  const mobile = useIsMobile();
  const router = useRouter();

  const navLinks: [string, string, string, string] = useMemo(() => {
    if (router.pathname === '/')
      return [
        '#about-me',
        '#project-showcase',
        '#other-projects',
        '#contact-me',
      ];
    else {
      return [
        '/#about-me',
        '/#project-showcase',
        '/#other-projects',
        '/#contact-me',
      ];
    }
  }, [router.pathname]);

  useEffect(() => {
    if (!mobile) setMenuOpen(false);
  }, [mobile]);

  return (
    <div className={styles.navBar}>
      <div className={styles.navBarContainer} ref={ref}>
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
              <a href={navLinks[0]} onClick={() => setMenuOpen(false)}>
                About
              </a>
            </li>
            <li className={styles.navDesktopItem}>
              <a href={navLinks[1]} onClick={() => setMenuOpen(false)}>
                Showcase
              </a>
            </li>
            <li className={styles.navDesktopItem}>
              <a href={navLinks[2]} onClick={() => setMenuOpen(false)}>
                Projects
              </a>
            </li>
            <li className={styles.navDesktopItem}>
              <a href={navLinks[3]} onClick={() => setMenuOpen(false)}>
                Contact
              </a>
            </li>
            <li className={styles.navDesktopItem}>
              <Link
                href="/resume.pdf"
                className={SpaceMono.className}
                target="_blank"
                rel="noreferrer"
                onClick={() => setMenuOpen(false)}
              >
                Resume
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;

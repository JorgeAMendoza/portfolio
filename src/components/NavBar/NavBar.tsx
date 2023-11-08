import useIsMobile from '@/hooks/useMedia';
import { spaceMono } from '@/utils/fonts';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useMemo, useState } from 'react';
import MobileNavBar from './MobileNavBar/MobileNavBar';
import styles from './NavBar.module.css';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
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
      <div className={styles.navBarContainer}>
        <Link href="/">
          <Image
            src="/Logo.svg"
            alt="jorge mendoza logo"
            width={187}
            height={40}
            priority={true}
          />
        </Link>

        {/* mobile nav */}
        {mobile ? <MobileNavBar /> : null}

        {/* desktop nav */}
        <nav
          className={styles.navDesktop}
          aria-label="Portfolio Navigation"
          id="desktop-nav"
        >
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
                className={spaceMono.className}
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

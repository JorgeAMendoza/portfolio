import useIsMobile from '@/hooks/useMedia';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useMemo } from 'react';
import DesktopNavBar from './DesktopNavBar/DesktopNavBar';
import MobileNavBar from './MobileNavBar/MobileNavBar';
import styles from './NavBar.module.css';

const NavBar = () => {
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

  if (!mobile) document.body.classList.remove('lock');

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
        {mobile ? <MobileNavBar navLinks={navLinks} /> : null}

        {/* desktop nav */}
        {!mobile ? <DesktopNavBar navLinks={navLinks} /> : null}
      </div>
    </div>
  );
};

export default NavBar;

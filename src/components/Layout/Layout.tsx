import Head from 'next/head';
import { ReactNode } from 'react';
import NavBar from '../NavBar/NavBar';
import { Open_Sans } from 'next/font/google';
import styles from './Layout.module.css';

const openSans = Open_Sans({ subsets: ['latin'] });

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className={openSans.className}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.navContainer}>
        <NavBar />
      </header>
      <div>{children}</div>
    </div>
  );
}

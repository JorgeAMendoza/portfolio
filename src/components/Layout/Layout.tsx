import { openSans, sourceSansPro } from '@/utils/fonts';
import Head from 'next/head';
import { ReactNode } from 'react';
import NavBar from '../NavBar/NavBar';
import style from './Layout.module.css';

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
      <header className={`${sourceSansPro.className} ${style.navContainer}`}>
        <NavBar />
      </header>
      <div>{children}</div>
    </div>
  );
}

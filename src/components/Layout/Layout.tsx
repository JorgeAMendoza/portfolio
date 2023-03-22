import Head from 'next/head';
import { ReactNode } from 'react';
import NavBar from '../NavBar/NavBar';
import { Open_Sans, Source_Sans_Pro } from 'next/font/google';

const openSans = Open_Sans({ subsets: ['latin'] });
const sourceSansPro = Source_Sans_Pro({ subsets: ['latin'], weight: '600' });

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
      <header className={sourceSansPro.className}>
        <NavBar />
      </header>
      <div>{children}</div>
    </div>
  );
}

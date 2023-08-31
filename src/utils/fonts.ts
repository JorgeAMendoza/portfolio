import { Open_Sans, Source_Sans_Pro, Space_Mono } from 'next/font/google';

export const openSans = Open_Sans({ subsets: ['latin'] });
export const sourceSansPro = Source_Sans_Pro({ subsets: ['latin'], weight: '600' });
export const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400'],
});
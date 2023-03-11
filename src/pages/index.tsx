import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import Layout from '@/components/Layout/Layout';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Jorge Mendoza</title>
        <meta
          name="description"
          content="Portfolio website createdy by and for Jorge Mendoza"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}></main>
    </Layout>
  );
}

import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css';
import { HeaderGlob } from './Components/Header/HeaderGlob';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Flower-Shop</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>




{/* mainContentttttttttttttttttttttt */}
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <HeaderGlob/>

       
      </main>







{/* Fooooooooooter */}
      <footer className={styles.footer}>
       
      </footer>
    </div>
  )
}

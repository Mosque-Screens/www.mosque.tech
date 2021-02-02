import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mosque Technology Platform</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <img src="/icon-only-logo.png" alt="Mosque Tech Logo"/>
        <h1 className={styles.title}>
          Welcome to <a href="https://www.mosque.tech">Mosque.Tech!</a>
        </h1>

        <p className={styles.description}>
          Website coming soon.
        </p>
      </main>

      <footer className={styles.footer}>
        A free and open sourced online platform for Mosques.
      </footer>
    </div>
  )
}

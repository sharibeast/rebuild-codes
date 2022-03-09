import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Rebuild Codes</title>
        <meta name="description" content="rebuild codes" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main className={styles.main}>
        <h1>rebuild codes website</h1>
      </main>
    </div>
  )
}

export default Home

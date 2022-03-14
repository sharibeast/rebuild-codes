import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Rebuild from '../components/Rebuild.svg'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className={styles.bg}>
      <Head>
        <title>Rebuild Codes</title>
        <meta name="description" content="rebuild codes" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main >
        <Image src={Rebuild} alt="logo" />
        <div style={{ color: 'white', fontWeight: 'normal' }}>
          <p>rebuild codes of popular websites and apps</p>
        </div>
      </main>
    </div>
  )
}

export default Home

import type { NextPage } from 'next';
import Head from 'next/head';
import Navbar from '../components/navbar/navbar';
import Hero from '../components/hero/hero';
import Newslater from '../components/newslater/newslater';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Buf | The CLI</title>
      </Head>

      <Navbar />
      <Hero />
      <Newslater/>
    </>
  );
};

export default Home;

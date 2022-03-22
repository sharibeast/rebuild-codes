import type { NextPage } from 'next'
import Head from 'next/head'
import Rebuild from '../components/Rebuild.svg'
import dona from '../public/donanew.png'
import { AiFillGithub, AiOutlineLink } from 'react-icons/ai'
import Link from 'next/link'

import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className='h-screen bg-gradient-to-tr  from-zinc-900 to-neutral-800 py-10'>
      <Head>
        <title>Rebuild Codes</title>
        <meta name="description" content="rebuild codes" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main className='mx-4 md:mx-auto'>
        <section className='flex flex-col items-center'>
          <div>
            <Image src={Rebuild} alt="logo" />
          </div>
          <h1 className='text-2xl text-gray-400'>
            Rebuild codes of popular websites and apps
          </h1>
        </section>

        <section className='mt-10 grid grid-cols-1 sm:grid-cols-2 max-w-3xl mx-auto'>
          <div className="w-full sm:max-w-sm rounded overflow-hidden hover:shadow-lg shadow-md">
            <Image className="w-full" src={dona} alt="Sunset in the mountains" />
            <div className="px-6 py-4 ">
              <div className="font-bold text-xl text-gray-300 mb-2 flex items-center justify-between">Dona.ai
                <div className='flex gap-4'>
                  <Link href="#" passHref>
                    <div className='p-1 rounded-full hover:bg-neutral-700 hover:scale-125 transition-all duration-150'>
                      <a >
                        <AiOutlineLink />
                      </a>
                    </div>
                  </Link>

                  <Link href="#" passHref>
                    <div className='p-1 rounded-full hover:bg-neutral-700 hover:scale-125 transition-all duration-150'>
                      <a >
                        <AiFillGithub />
                      </a>
                    </div>
                  </Link>

                </div>
              </div>
              <p className="text-gray-500 text-base">
                A more human todo-list
              </p>
            </div>
            {/* <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
          </div> */}
          </div>



        </section>
      </main>

    </div>
  )
}

export default Home

import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Bot from "../assets/bot.png"
import Image from 'next/image'
import Link from 'next/link'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Home() {

  return (
    <>
      <Head>
        <title>Alpha Chatbot: Ask me everything!</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='w-full h-screen flex flex-col items-center justify-center m-auto text-center bg-slate-800'>
        <Image 
          src={Bot}
          height={150}
          width={150}
          alt='Bot'
          className='h-[150px] w-[150px] object-cover rounded-full bg-gray-900 border'
        />
        <div className='lg:w-[400px] w-full mt-10 flex flex-col items-center'>
          <h1 className='text-3xl font-semibold p-4'>Hi, I'm Your intelligent conversational companion</h1>
          <p className='font-thin text-center'>This project is using OpenAI API</p>
        </div>
        <Link href={'/chatbot'}>
          <button type="button" className="mt-20 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            START CHAT
          </button>
        </Link>
      </main>
    </>
  )
}
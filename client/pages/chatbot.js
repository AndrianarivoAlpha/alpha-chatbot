import Head from 'next/head'
import Image from 'next/image'
import * as Icon from 'react-icons/io5'
import { useState } from 'react'
import Logo from '../assets/bot.png'
import User from '../public/user.png'
import Link from 'next/link'
import { ThreeDots } from 'react-loader-spinner'

export default function ChatBot() {

  const [question, setQuestion] = useState('');
  const [loading, setLoading] = useState(false);

  const [datas, setData] = useState([]);

  function fetchResponse(e) {

    e.preventDefault();

    window.scrollTo({
      top: 100000,
      behavior: 'smooth'
    });

    setLoading(true);

    const obj = { question: question, response: 'loading' }
    datas.push(obj);

    const postData = async () => {
      const data = {
        question: question,
      };

      const fetchResponse = await fetch("/api", {
        method: "POST",
        body: JSON.stringify(data),
      });
      return fetchResponse.json();
    };

    postData().then((res) => {
      const { data } = res;

      datas[datas.length - 1].response = data

      setQuestion('')
      setLoading(false);

      window.scrollTo({
        top: 100000,
        behavior: 'smooth'
      });
    });
  }

  const Loader = <ThreeDots
    height="20"
    width="40"
    radius="2"
    color="white"
    ariaLabel="three-dots-loading"
    wrapperStyle={{}}
    wrapperClassName=""
    visible={true}
  />

  return (
    <>
      <Head>
        <title>Alpha Chatbot - Ask me everything!</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='flex flex-col justify-start w-full h-full'>
        <div className='fixed flex items-start w-full h-10 p-2'>
          <Link href='/'>
            <Icon.IoArrowBackOutline size={32} />
          </Link>
        </div>

        {/* Conversation */}
        <div className='h-full pb-5'>
          {
            datas &&
            Object.keys(datas)
              .map((key, index) => {
                return (
                  <div
                    key={key}
                    className='w-full flex flex-col gap-2 items-start lg:px-10 px-2 pt-5'
                  >
                    <div className='w-full flex items-start justify-end gap-2'>
                      <p className='py-2 px-5 bg-blue-400 rounded-l-xl rounded-b-xl'>{datas[key].question}</p>
                      <Image
                        src={User}
                        height={60}
                        width={60}
                        alt='openai-logo'
                        className='bg-white h-10 w-10 object-cover rounded-full'
                      />
                    </div>
                    <div className='w-full flex items-start justify-start gap-2'>
                      <Image
                        src={Logo}
                        height={60}
                        width={60}
                        alt='openai-logo'
                        className='bg-white h-10 w-10 object-cover rounded-full'
                      />
                      <div className='py-2 px-5 bg-slate-500 rounded-r-xl rounded-b-xl'>
                        {
                          datas[key].response === 'loading' ? Loader : <p> {datas[key].response} </p>
                        }
                      </div>
                    </div>
                  </div>
                )
              })
          }
        </div>
        <div className="bg-slate-900 p-2 border-t h-[80px] w-full lg:px-10 px-2 bottom-0 fixed ">
          <form
            onSubmit={fetchResponse}
            className="flex gap-2"
          >
            <input
              type="text"
              id="text"
              className="block w-full p-2 lg:pl-10 pl-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Type your question here..."
              required
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
            />
            {
              question &&
              <button
                type="submit"
                className="text-white right-5 bottom-2.5"
              >
                <Icon.IoSendOutline
                  size={32}
                  className="text-white hover:text-slate-500"
                />
              </button>
            }

          </form>
          <div className='text-center flex text-xs mt-2 gap-2'>
            <p className=''>Developer contact :</p>
            <a
              href="https://t.me/andrianarivoalpha"
              target='_blank'
              rel='noreferrer'
            >
              Telegram
            </a>
          </div>
        </div>

        <div className="p-2 h-[80px] w-full lg:px-10 px-2 bottom-0">
        </div>
      </main>
    </>
  )
}
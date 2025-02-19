import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Money App</title>
        <meta name="description" content="주식, 코인, 아파트 등 돈되는 정보 한눈에 보기" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">돈되는 정보 한눈에 보기!</h1>
        <p className="mb-6">주식, 코인, 아파트 등 다양한 자산 정보를 제공합니다.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link href="/stocks" className="bg-blue-500 text-white p-4 rounded">
            주식 정보
          </Link>
          <Link href="/crypto" className="bg-green-500 text-white p-4 rounded">
            코인 정보
          </Link>
          <Link href="/apartments" className="bg-purple-500 text-white p-4 rounded">
            아파트 정보
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Home

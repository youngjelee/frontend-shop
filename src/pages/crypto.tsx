import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import AssetCard from '../components/AssetCard'
import { getCrypto } from '@/services/cryptoService'
import { useEffect, useState } from 'react'

interface Crypto {
  id: string;
  name: string;
  price: number;
}

const CryptoPage: NextPage = () => {
  const [cryptos, setCryptos] = useState<Crypto[]>([])

  useEffect(() => {
    async function fetchCrypto() {
      const data = await getCrypto()
      setCryptos(data)
    }
    fetchCrypto()
  }, [])

  return (
    <div>
      <Head>
        <title>Crypto - Money App</title>
      </Head>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">코인 정보</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {cryptos.map(coin => (
            <AssetCard
              key={coin.id}
              title={coin.name}
              description="코인 정보"
              value={`$${coin.price}`}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default CryptoPage

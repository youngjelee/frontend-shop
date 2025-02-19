import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import AssetCard from '../components/AssetCard'
import { getStocks } from '@/services/stocksService'
import { useEffect, useState } from 'react'

interface Stock {
  symbol: string;
  name: string;
  price: number;
}

const Stocks: NextPage = () => {
  const [stocks, setStocks] = useState<Stock[]>([])

  useEffect(() => {
    async function fetchStocks() {
      const data = await getStocks()
      setStocks(data)
    }
    fetchStocks()
  }, [])

  return (
    <div>
      <Head>
        <title>Stocks - Money App</title>
      </Head>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">주식 정보</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {stocks.map(stock => (
            <AssetCard
              key={stock.symbol}
              title={`${stock.name} (${stock.symbol})`}
              description="주식 정보"
              value={`$${stock.price}`}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Stocks

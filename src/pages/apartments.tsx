import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import AssetCard from '../components/AssetCard'
import { getApartments } from '@/services/apartmentsService'
import { useEffect, useState } from 'react'

interface Apartment {
  id: string;
  name: string;
  price: number;
}

const Apartments: NextPage = () => {
  const [apartments, setApartments] = useState<Apartment[]>([])

  useEffect(() => {
    async function fetchApartments() {
      const data = await getApartments()
      setApartments(data)
    }
    fetchApartments()
  }, [])

  return (
    <div>
      <Head>
        <title>Apartments - Money App</title>
      </Head>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">아파트 정보</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {apartments.map(apt => (
            <AssetCard
              key={apt.id}
              title={apt.name}
              description="아파트 정보"
              value={`$${apt.price}`}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Apartments

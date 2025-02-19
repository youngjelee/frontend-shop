interface Apartment {
  id: string;
  name: string;
  price: number;
}

const dummyApartments: Apartment[] = [
  { id: 'apt1', name: '강남 아파트', price: 500000 },
  { id: 'apt2', name: '서초 아파트', price: 450000 },
  { id: 'apt3', name: '송파 아파트', price: 600000 },
]

export async function getApartments(): Promise<Apartment[]> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(dummyApartments), 500)
  })
}

interface Crypto {
  id: string;
  name: string;
  price: number;
}

const dummyCrypto: Crypto[] = [
  { id: 'bitcoin', name: 'Bitcoin', price: 20000 },
  { id: 'ethereum', name: 'Ethereum', price: 1500 },
  { id: 'dogecoin', name: 'Dogecoin', price: 0.3 },
]

export async function getCrypto(): Promise<Crypto[]> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(dummyCrypto), 500)
  })
}

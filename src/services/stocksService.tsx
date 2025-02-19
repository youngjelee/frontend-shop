interface Stock {
  symbol: string;
  name: string;
  price: number;
}

const dummyStocks: Stock[] = [
  { symbol: 'AAPL', name: 'Apple Inc.', price: 150 },
  { symbol: 'GOOGL', name: 'Alphabet Inc.', price: 2800 },
  { symbol: 'AMZN', name: 'Amazon.com Inc.', price: 3400 },
]

export async function getStocks(): Promise<Stock[]> {
  // 실제 API 호출 대신 더미 데이터를 반환합니다.
  return new Promise((resolve) => {
    setTimeout(() => resolve(dummyStocks), 500)
  })
}

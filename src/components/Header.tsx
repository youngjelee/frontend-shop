import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
  return (
    <header className="bg-white shadow-md py-4 px-6 flex items-center justify-between">
      <div className="flex items-center">
        <Image src="/images/logo.png" alt="Logo" width={40} height={40} />
        <span className="ml-2 font-bold text-xl">Money App</span>
      </div>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="hover:text-blue-500">
              Home
            </Link>
          </li>
          <li>
            <Link href="/stocks" className="hover:text-blue-500">
              Stocks
            </Link>
          </li>
          <li>
            <Link href="/crypto" className="hover:text-blue-500">
              Crypto
            </Link>
          </li>
          <li>
            <Link href="/apartments" className="hover:text-blue-500">
              Apartments
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header

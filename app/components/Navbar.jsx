import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {

  return (
    <nav>
      <Link href="/">HOME</Link>
      <Link href="/pricing">PRICING</Link>
      <Link href="/contactus">CONTACT US</Link>
    </nav>
  )
}
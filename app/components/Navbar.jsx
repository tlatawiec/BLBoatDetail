import Link from 'next/link'
import ContactUs  from './contactus'
import Image from 'next/image'

export default function Navbar() {

  return (
    <nav>
      <Link href="/">Brighton's Boat Detailing</Link>
      <Link href="/pricing">PRICING</Link>
      <ContactUs />
    </nav>
  )
}
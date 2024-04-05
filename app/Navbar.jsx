import Link from 'next/link'
import ContactUs from './home/contactus'
import Image from 'next/image'
import slogo from '../public/slogo.png'

export default function Navbar() {

  return (
    <nav className="my-0">
      <Link href="/">
        <div className="flex flex-col items-center">
          <Image
            src={slogo}
            alt = 'Navigation bar logo'
            height={50}
            width = "true"
          />
          <p>Brighton's Marine Service</p>
        </div>
      </Link>
      <Link href="/quote" className="self-end">Get a Quote</Link>
      <Link href="/meettheowner" className="self-end">Meet the Owner</Link>
      <ContactUs />
    </nav>
  )
}
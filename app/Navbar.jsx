  import Link from 'next/link'
import ContactUs from './home/contactus'
import Image from 'next/image'
import slogo from './images/slogo.png'

export default function Navbar() {

  return (
    <nav className="my-0">
      <Link href="/">
        <div className="flex flex-col items-center">
          <Image
            src={slogo}
            height={50}
            width={50}
          />
          <p>Brighton's Marine Service</p>
        </div>
      </Link>
      <Link href="/pricing" className="self-end">Pricing</Link>
      <Link href="/meettheowner" className="self-end">Meet the Owner</Link>
      <ContactUs />
    </nav>
  )
}
import Link from 'next/link'
import ContactUs from './home/contactus'
import Image from 'next/image'

import fblogo from '../public/facebook.png'
import slogo from '../public/slogo.png'// Assuming you have a ContactUs component

export default function Navbar() {
  return (
    <nav>
      <Link href="/" className="hover:text-blue flex flex-col items-center ml-4">
        <Image
          src={slogo}
          alt="Navigation bar logo"
          height={50}
          width={50} // Update the width as needed
        />
        <p className="opacity-1 text-xs hidden px-2 sm:flex sm:text-base">Brighton&apos;s Marine Service</p>
      </Link>
      <Link href="/quote" className="nav-link">Quote</Link>
      <Link href="/gallery" className="nav-link">Gallery</Link>
      <Link href="/meettheowner" className="nav-link">Our Owner</Link>


      <a className="nav-link self-end" href="https://www.facebook.com/brighton.marine.services">
        <Image
          src = { fblogo }
          alt="Link to business Facebook page"
          height= {25}
          width = {25}
        />
      </a>
      <ContactUs />


    </nav>
  );
}


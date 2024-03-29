import Image from 'next/image'
import b1 from '../images/bwboat1.webp'
import Banner from './banner.jsx'

export default function Services() {

  return (
    // overall container
    <div className="mx-auto w-auto flex flex-wrap">
      <Banner img = { b1 } title = "WAXING" />
      <Banner img = { b1 } title = "INTERIOR" />
      <Banner img = { b1 } title = "CARPET" />
      <Banner img = { b1 } title = "FULL WASH" />
    </div>
  )
}
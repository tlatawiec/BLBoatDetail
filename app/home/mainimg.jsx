import Image from 'next/image'
import bgIMG from '../images/megatron.jpg'
export default function BGIMG() {

  return (
    <div className="relative w-full max-w-screen-full">
      <div className="relative">
        <Image
          src={bgIMG}
          alt="Picture of detailed boat"      
          fit = 'fill'
          objectFit='cover'
          objectPosition='center'
        />
      </div>

      <div className="absolute top-0 left-0 w-full flex items-center justify-center mt-20">
        <h1 className="text-white text-4xl font-thin italic">Bringing Out the Best in Your Boat's Appearance</h1>
      </div>

      <div className="absolute bottom-0 left-0 w-full flex items-center justify-center mb-20 ">
        <h2 className="max-w-lg text-center text-white text-xl font-thin italic border-t border-white">From meticulous cleaning to expert detailing, we enhance every contour and surface to ensure your boat shines with pride on the water.</h2>
      </div>
    </div>
  )
}
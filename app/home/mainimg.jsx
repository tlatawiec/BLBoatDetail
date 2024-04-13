import Image from 'next/image'
import bgIMG from '../../public/megatron.jpg'
export default function BGIMG() {

  return (
    <div className="relative w-full">
      <div className="relative">
        <Image
          src={bgIMG}
          alt="Picture of detailed boat"      
          fit ='cover'
        />
      </div>

      <div className="absolute top-0 left-0 w-full flex items-center justify-center mt-20">
        <h1 className="text-sm text-white font-thin italic sm:text-3xl">Bringing Out the Best in Your Boat&apos;s Appearance</h1>
      </div>

      <div className="absolute sm:bottom-0 sm:left-0 sm:w-full flex items-center justify-center mb-20 ">
        <h2 className="text-xs mx-10 max-w-full text-center text-white  font-thin italic border-t border-white sm:text-lg">From meticulous cleaning to expert detailing, we enhance every contour and surface to ensure your boat shines with pride on the water.</h2>
      </div>
    </div>
  )
}
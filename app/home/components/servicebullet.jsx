import ship from '../../../public/ship.png'
import Image from 'next/image'

export default function Bullet({ service, description }) {

  return (
    <div className="text-center">
      <div className="w-full flex flex-row justify-center items-center">

        <div className='flex-1/3'>
          <Image className=""
            src = { ship }
            alt = "Boat bullet point icon"
            height = { 20 }
            width = { true }
            fit = 'cover'
          />
        </div>
        <h3 className='my-2 py-0 ml-2'>{ service }</h3>
        
      </div>
      <p className="font-thin mx-10">{ description }</p>
    </div>
    
  )
}
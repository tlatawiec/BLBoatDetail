import Image from 'next/image'
export default function BeforeAfter({ before, after }) {

  return (
    <div className='h-full overflow-hidden flex flex-wrap justify-center py-6'>
      <div className='baaPicture'>
        <Image
          src={before}
          alt="Boat before being detailed"
          fit = 'cover'
        />
      </div>

      <div className='baaPicture'>
        <Image
          src={after}
          alt="Boat after being detailed"
          fit = 'cover'
        />
      </div>
    </div>

  )
}
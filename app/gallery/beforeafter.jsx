import Image from 'next/image'
export default function BeforeAfter({ before, after }) {

  return (
    <div className='h-full overflow-hidden flex flex-wrap justify-center my-12 py-12 '>
      <div className='w-5/12 mx-5 relative'>
        <Image
          src={before}
          alt="Boat before being detailed"
          fit = "cover"
        />
      </div>

      <div className='w-5/12 mx-5 relative'>
        <Image
          src={after}
          alt="Boat after being detailed"
          fit = "cover"
        />
      </div>
    </div>

  )
}
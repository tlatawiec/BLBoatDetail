import Image from 'next/image'
import blee from '../../public/ownerpicture.jpg'

export default function MeetTheOwnerPage() {
  return (
    <main>
      <title>Meet the Owner: Brighton Marine Services</title>

      <h1 className='text-center text-5xl'>MEET THE OWNER</h1>
      <div className='w-2/3 border h-auto mx-auto my-12 rounded-lg shadow-2xl flex flex-wrap items-center'>
        <div className= 'w-1/4 mx-12'>
          <h2 className='text-center mx-auto items-center font-normal text-sm my-8'>Brighton Lee</h2>
          <div>
            <Image className='m-auto'
              src={blee}
              alt='Brighton Lee, founder and CEO of Brighton Marine Services'
              height={200}
              width={200}
            />
          </div>

          <h3 className='font-thin text-l text-center mt-4'>Founder and CEO</h3>
        </div>

        <p className='text-md text-center my-12 mx-8 w-1/2'>
          Hello, My name is Brighton Lee. I'm currently a sophomore at Indiana University studying Finance and Entrepreneurship & Innovation.
          I've spent the last 20 years of my life growing up on the Fox River and have been on the water about just as long. I've grown up helping
          my father maintain our boat and used what he taught me as well as the own experience I’ve gathered servicing a multitude of other boats to
          start this business. With that being said here at Brighton Marine Services our goal is to get you back on the water quickly as possible with
          the best looking boat as possible!
        </p>
      </div>
    </main>
  )
}

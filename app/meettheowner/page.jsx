import Image from 'next/image'
export default function() {

  return(
    <div className='w-2/3 border h-auto mx-auto my-20 bg-black rounded-lg'>
      <h1 className='text-center text-white font-normal text-4xl my-8'>Brighton Lee</h1>
      {/* <Image 
        src=''
        alt=''
        height='100'
        width='100'
      /> */}

      <h2 className='font-thin text-xl text-center text-white'>Founder and CEO</h2>
      <p className='text-md text-center my-12 mx-8 text-white'>
        Hey, I'm Brighton, and I'm proud to call Fox River Grove my hometown. Currently, I'm diving into the world of business at Indiana University, 
        but my heart has always belonged to the water. Growing up surrounded by rivers and lakes instilled in me a deep appreciation for boats and 
        their upkeep. That's why I founded our boat detailing business—to bring together my passion for boating and business. Whether you're a seasoned 
        boater or just dipping your toes into the water, I'm here to ensure your vessel looks its best. Let's sail together toward a boat that sparkles 
        and shines!
      </p>
    </div>
  )
}
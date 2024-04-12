import BeforeAfter from './beforeafter.jsx'

import bd1  from '../../public/bd-1.jpg'
import bd11 from '../../public/bd-11.jpg'

import bd2  from '../../public/bd-2.jpg'
import bd22 from '../../public/bd-22.jpg'

import bd3  from '../../public/bd-3.jpg'
import bd33 from '../../public/bd-33.jpg'

import bd4  from '../../public/bd-4.jpg'
import bd44 from '../../public/bd-44.jpg'

export default function Gallery() {
  return (
    <main className='h-full'>
      <title>Gallery</title>
      <h1 className="text-center text-5xl">GALLERY</h1>
      <p className="text-center mt-8">Here's a few examples of our past work:</p>
      <div className="w-5/6 flex flex-row mx-auto text-center justify-center my-12">
        <h2 className="w-5/12 text-3xl font-normal">Before</h2>
        <h2 className="w-5/12 text-3xl font-normal">After</h2>
      </div>
      <div className='shadow-2xl w-5/6 mx-auto'>
        <BeforeAfter before={bd1} after={bd11} /> 
        <BeforeAfter before={bd2} after={bd22} /> 
        <BeforeAfter before={bd3} after={bd33} /> 
        <BeforeAfter before={bd4} after={bd44} /> 
      </div>
    </main>
  )
}

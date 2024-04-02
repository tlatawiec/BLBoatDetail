import FiveStar from './fivestar.jsx'

export default function TestimonialComponent({name, testimonial}) {

  return (
    <div className="my-10 h-full flex-col w-11/12 mx-auto shadow-lg overflow-hidden">
      <FiveStar />
      <p className="text-center mt-5 text-xl font-thin">{ testimonial }</p>
      <h4 className="text-center font-normal py-5">-{ name }</h4>
    </div>
  )
}
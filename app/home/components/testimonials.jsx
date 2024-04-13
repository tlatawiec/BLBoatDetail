import TestimonialComponent from './testcomponent.jsx'
export default async function Testimonials() {

  return(
    <div className="h-full mb-10">
      <h2 className="text-center text-3xl italic font-thin underline underline-offset-4 decoration-1 my-20">Don&apos;t Just Take Our Word For It -</h2>
      <TestimonialComponent name="Tommy Latawiec" testimonial= "Absolutely thrilled with the exceptional service provided by [Boat Detailing Business]. Their attention to detail and dedication to restoring my boat&apos;s shine surpassed all expectations. I couldn&apos;t be happier with the results. Highly recommend!"/>
      <TestimonialComponent name="Drew Borzych" testimonial= "Choosing [Boat Detailing Business] was the best decision I made for my boat. Their meticulous attention to detail and commitment to excellence left my vessel looking better than ever. I&apos;m impressed by their professionalism and dedication to customer satisfaction. Highly recommend them to anyone looking to give their boat a new lease on life!" />
    </div>
  )
}
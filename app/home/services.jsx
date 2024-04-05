import b1 from '../../public/bwboat1.webp'
import Banner from './components/banner.jsx'

export default function Services() {

  return (
    // overall container
    <div className="mx-auto flex flex-wrap w-auto">
      <div className="w-1/3 p-4 flex flex-col relative">
        <Banner img={b1} title="EXTERIOR" />
        <p className="flex-1 border-t-2 text-center w-3/4 mx-auto my-4 py-4">Elevate your boat's exterior with our professional waxing service. Our meticulous process restores shine and provides long-lasting protection against the elements. Using high-quality products and expert techniques, we leave your vessel with a brilliant, mirror-like finish, ensuring durability and resilience on the water. Trust us to keep your boat looking its best season after season.</p>
      </div>

      <div className="w-1/3 p-4 flex flex-col relative">
        <Banner img={b1} title="INTERIOR" />
        <p className="flex-1 border-t-2 text-center w-3/4 mx-auto my-4 py-4">Revitalize your boat's carpeting with our professional cleaning service. Our expert team employs specialized techniques and top-quality products to lift dirt, stains, and odors, leaving your carpet fresh and rejuvenated. Whether it's regular maintenance or deep cleaning, we tailor our services to meet your needs, ensuring your boat's carpet looks and feels its best.</p>
      </div>

      <div className="w-1/3 p-4 flex flex-col relative">
        <Banner img={b1} title="CARPET" />
        <p className="flex-1 border-t-2 text-center w-3/4 mx-auto my-4 py-4">Transform your boat's interior with our professional detailing service. From thorough cleaning to meticulous restoration, we ensure every surface shines like new. Using top-quality products and expert techniques, we remove dirt, stains, and odors, leaving your boat's interior pristine and inviting. Trust us to enhance your boating experience with our unparalleled interior detailing service.</p>
      </div>
    </div>
  )
}
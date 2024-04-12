import b1 from '../../public/bwboat1.webp'
import Banner from './components/banner.jsx'
import Bullet  from './components/servicebullet.jsx'


export default function Services() {

  return (
    // overall container
    <div className="mx-auto flex flex-wrap w-7/6 justify-center">
      <div className="w-5/12 p-4 flex flex-col relative shadow-xl rounded-lg mx-4 my-8">

        <Banner img={b1} title="Exterior Detailing" />

        <Bullet service = "Full Exterior Wash"  description= "Complete exterior service that refurnishes the shine of your boat." />
        <Bullet service = "Hull Cleaning" description="Complete restoration of your boat's hull to get it looking good as new."/>
        <Bullet service = "Metal Polishing" description="Restore the shine of your boat's metalalic accents."/>
        <Bullet service = "Waxing/Buffing" description="Bring back the shine of your boat's exterior."/>

      </div>

      <div className="w-5/12 p-4 flex flex-col relative bg-light rounded-lg shadow-xl rounded-lg mx-4 my-8">

        <Banner img={b1} title="Interior Detailing" />

        <Bullet service = "Full Exterior Wash"  description= "Complete exterior service that refurnishes the shine of your boat." />
        <Bullet service = "Hull Cleaning" description="Complete restoration of your boat's hull to get it looking good as new."/>
        <Bullet service = "Metal Polishing" description="Restore the shine of your boat's metalalic accents."/>
        <Bullet service = "Waxing/Buffing" description="Bring back the shine of your boat's exterior."/>

      </div>
    </div>
  )
}
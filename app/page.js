import Services from "./home/services"
import BGIMG from "./home/mainimg"
import Testimonials from "./home/components/testimonials";
import ServiceHeader from "./home/serviceheader";

export default function Home() {
  return (
    <main className="min-h-full">
      <BGIMG />
      <Testimonials />
      <ServiceHeader />
      <Services />
    </main>
  );
}

import Services from "./home/services"
import BGIMG from "./home/mainimg"
import Testimonials from "./home/components/testimonials";
import ServiceHeader from "./home/serviceheader";
import Introduction from "./home/introduction";

export default function Home() {
  return (
    <main className="min-h-full">
      <title>Welcome to Brighton Marine Services: Your Trusted Partner for Boat Maintenance</title>
      <BGIMG />
      <Introduction />
      <ServiceHeader />
      <Services />
      <Testimonials />
    </main>
  );
}



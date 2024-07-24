import { OurSpeciality } from "@/components/home/OurSpeciality";
import Stats from "@/components/home/Stats";
import Faq from "@/pages/faq";
import Wcu from "@/pages/wcu/WCU";
import { Banner } from "@/components/home/Banner";
import Slideshow from "@/components/slideshow";
export default function Home() {
  return (
    <main className="min-h-screen">
      <Banner />
      <OurSpeciality />
      <Stats />
      <Wcu />
      <Slideshow />
      {/* <Faq /> */}
    </main>
  );
}

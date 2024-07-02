import { OurSpeciality } from "@/pages/ourspeciality";
import Stats from "@/pages/stats";
import Faq from "@/pages/faq";
import Wcu from "@/pages/wcu";
import { Banner } from "@/components/Banner";
import Slideshow from "@/components/slideshow";
export default function Home() {
  return (
    <main className="">
      <Banner />
      <OurSpeciality />
      <Stats />
      <Wcu />
      <Slideshow />
      <Faq />
    </main>
  );
}

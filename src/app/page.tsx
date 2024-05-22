import { OurSpeciality } from "@/pages/ourspeciality";
import Stats from "@/pages/stats";
import Faq from "@/pages/faq";
import Wcu from "@/pages/wcu";
import BannerHome from "@/pages/bannerhome";
import Slideshow from "@/components/slideshow";
export default function Home() {
  return (
    <main className="">
      <BannerHome />
      <OurSpeciality />
      <Stats />
      <Wcu />
      <Slideshow />
      <Faq />
    </main>
  );
}

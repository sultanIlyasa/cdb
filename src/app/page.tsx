import { OurSpeciality } from "@/app/pages/OurSpeciality";
import Stats from "@/app/pages/stats";
import Faq from "@/app/pages/FAQ";
import Wcu from "@/app/pages/wcu";
import Footer from "@/app/pages/Footer";
import BannerHome from "@/app/pages/BannerHome";
export default function Home() {
  return (
    <main className="">
      <BannerHome />
      <OurSpeciality />
      <div className="px-10 py-8">
        <Stats />
        <Wcu />
        <Faq />
      </div>
      <Footer />
    </main>
    
    
  );
}

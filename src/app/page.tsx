import { Banner } from "@/components/Banner";
import { OurSpeciality } from "@/components/OurSpeciality";


export default function Home() {
  const images = ["/banner1.png", "/banner2.png"];

  return (
    <main className="">
      <Banner />
      <OurSpeciality />
    </main>
  );
}

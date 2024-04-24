import Navbar from "@/components/Navbar";
import { Banner } from "@/components/Banner";
import { OurSpeciality } from "@/components/OurSpeciality";

export default function Home() {
  const images = ["/banner1.png", "/banner2.png"];

  return (
    <main className="">
      
      <Banner className="h-[40rem]" images={images} duration={5000}>
        <div className="z-50 flex flex-col justify-center md:flex">
          <h1 className="font-bold  md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
            WE SERVE BETTER AND FASTER!
          </h1>
          <p className="text-[#F5F5F5] text-center text-[24px]">
            From laying strong foundations to creating high quality print,{" "}
            <br />
            we are your <span className="text-yellow-500">
              one-stop-shop
            </span>{" "}
            for all your
            <span className="text-yellow-500"> construction</span> and
            <span className="text-yellow-500"> printing</span> needs. <br />
            Trust us to build your dreams and bring your ideas to life, every
            step of the way.
          </p>

          <div className="flex flex-row justify-center gap-5">
            <button className="w-[258px] h-[66px] px-4 py-2 backdrop-blur-sm bg-[#3B71CA]  text-white text-center rounded-[20px] relative mt-4 hover:bg-[#F3F8FF] hover:text-[#0F6FFF]">
            <span>Contact Us</span>
          </button>
            <button className="w-[258px] h-[66px] px-4 py-2 backdrop-blur-sm bg-[#3B71CA]  text-white text-center rounded-[20px] relative mt-4 hover:bg-[#F3F8FF] hover:text-[#0F6FFF]">
            <span>See Our Products</span>
          </button>
          </div>
          
        </div>
      </Banner>
      <OurSpeciality />
    </main>
  );
}

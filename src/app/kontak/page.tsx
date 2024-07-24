import { InfiniteMovingCards } from "@/components/ui/InfiniteMovingCards";
import { Mitras } from "@/lib/data";
import React from "react";

const page = () => {
  return (
    <main>
      <div className="flex flex-col min-h-screen justify-center items-center mx-auto w-[80%] gap-10">
        <div className="text-center  flex flex-col gap-4">
          <h4 className="text-[#ED3237] text-sm sm:text-base md:text-lg lg:text-xl  font-semibold">
            PARTNERSHIP
          </h4>
          <h2 className=" text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">
            Berkolaborasi dengan kemitraan terkemuka di industri
          </h2>
        </div>
        <div className="w-full text-center">
          <p className="text-xs sm:text-sm md:text-base lg:text-lg">
            Kami telah berkesempatan untuk bekerja sama dengan berbagai
            perusahaan, yang telah memperkaya perjalanan kami dan mendorong
            inovasi industri. Berkomitmen untuk keunggulan, kami menghargai
            setiap kesempatan yang dipercayakan kepada kami.
          </p>
        </div>
        <div className="w-full overflow-hidden mx-auto">
          <InfiniteMovingCards items={Mitras} />
        </div>
      </div>
    </main>
  );
};

export default page;

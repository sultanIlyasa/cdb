import * as React from "react";

export default function Profile() {
  return (
    <>
      <div className="flex flex-col-reverse sm:flex-row mb-12 lg:mb-20 ">
        <div className="w-[320px] sm:w-10/12 lg:w-6/12 sm:max-lg:mx-5 mx-auto my-6 lg:my-28">
          <h2 className="text-[#1F204C] font-bold text-lg lg:text-3xl leading-5 text-center lg:text-left mb-3 lg:mb-8">
            PT. CAHAYA DUA BERLIAN
          </h2>
          <br />
          <p className="text-justify text-[#666666] text-sm lg:text-xl leading-8">
            Perusahaan kami berdiri sejak tahun 2007 dengan cakupan pasar yang
            meliputi industri manufaktur, perkantoran, pendidikan, lembaga
            pemerintah, dan ritel. Saat ini, tidak kurang dari 20 perusahaan
            dari berbagai bidang, mulai dari skala nasional, regional, hingga
            UMKM, telah menjadi klien kami.
            <br />
            <br />
            Dengan dukungan para ahli di bidangnya dan berbagai pengalaman dalam
            melaksanakan pekerjaan konstruksi dan Agro Industri, PT. Cahaya Dua
            Berlian selalu siap untuk berpartisipasi dalam mengimplementasikan
            proyek-proyek baik di sektor pemerintah maupun swasta.
          </p>
        </div>
        <div>
          <img
            src="./profile.png"
            className="w-full h-[220px] sm:h-[316px] lg:h-[585px] object-cover"
          />
        </div>
      </div>
    </>
  );
}

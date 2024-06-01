import * as React from "react";

export default function Profile() {
  return (
    <>
      <div className="flex flex-row justify-center mb-[71px] ">
        <div className="w-6/12 ml-[68px] mr-[57px] mt-[77px]">
          <h2 className="text-[#1F204C] font-bold text-[30px] min-h-[77px]">PT. CAHAYA DUA BERLIAN</h2>
          <br />
          <p className="text-justify text-[#666666] text-[20px]">
            Perusahaan kami berdiri sejak tahun 2007 dengan cakupan pasar yang 
            meliputi industri manufaktur, perkantoran, pendidikan, lembaga 
            pemerintah, dan ritel. Saat ini, tidak kurang dari 20 perusahaan dari berbagai 
            bidang, mulai dari skala nasional, regional, hingga UMKM, telah menjadi 
            klien kami.
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
              className="w-[683px]"
            />
        </div>
      </div>
    </>
  );
}

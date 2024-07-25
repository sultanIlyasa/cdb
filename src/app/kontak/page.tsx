"use client";
import { InfiniteMovingCards } from "@/components/ui/InfiniteMovingCards";
import { Mitras, Produks } from "@/lib/data";
import Image from "next/image";
import React, { useState } from "react";

const KontakPage = () => {
  const [formData, setFormData] = useState({
    namaDepan: "",
    namaBelakang: "",
    email: "",
    nomorTelephone: "",
    jasa: "",
    pesan: "",
  });

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

 const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const sender = {
        address: formData.email,
    };

    const recipients = {
        name: "CDB",
        address: "CDB@gmail.com"
    };

    const subject = "Kontak Email Cahaya Dua Berlian";
    const message = `
      <div class="contact-info" style="font-family: Arial, sans-serif; color: #333; background-color: #f9f9f9; padding: 20px; border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); max-width: 600px; margin: auto;">
        <h2 style="color: #007BFF; border-bottom: 2px solid #007BFF; padding-bottom: 10px; margin-bottom: 20px;">Kontak Kolaborasi</h2>
        <p style="margin: 0; padding: 8px 0;"><strong>Nama:</strong> ${formData.namaDepan} ${formData.namaBelakang}</p>
        <p style="margin: 0; padding: 8px 0;"><strong>Nomor HP:</strong> ${formData.nomorTelephone}</p>
        <p style="margin: 0; padding: 8px 0;"><strong>Jasa:</strong> ${formData.jasa}</p>
        <p style="margin: 0; padding: 8px 0;"><strong>Pesan:</strong> ${formData.pesan}</p>
      </div>
    `;

    fetch('/api/kirim-kontak-email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ sender, recipients, subject, message })
    })
        .then(response => response.json())
        .then(data => setFormData(data))
        .catch(error => setFormData(error));

    console.log("Form submitted:", formData);

    setFormData({
      namaDepan: "",
      namaBelakang: "",
      email: "",
      nomorTelephone: "",
      jasa: "",
      pesan: "",
    });
    resetRadioButtons();
};

function resetRadioButtons() {
  const radioButtons = document.querySelectorAll('input[type="radio"]') as NodeListOf<HTMLInputElement>;
  radioButtons.forEach(radioButton => {
    radioButton.checked = false;
  });
}

  return (
    <main>
      <div className="flex flex-col min-h-screen justify-center items-center mx-auto w-[80%] gap-10">
        <div className="text-center  flex flex-col gap-4">
          <h4 className="text-[#ED3237] text-sm sm:text-base md:text-lg lg:text-xl  font-semibold">
            PARTNERSHIP
          </h4>
          <h2 className="text-[#7374C5] text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">
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
      <div className="bg-[#EDEDF8] py-20">
        <div className="flex flex-col min-h-screen justify-center items-center mx-auto w-[80%] gap-10">
          <div className="text-center  flex flex-col gap-4">
            <h2 className="text-[#7374C5] text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">
              Apakah anda tertarik untuk berkolaborasi bersama kami?
            </h2>
          </div>
          <div className="flex flex-col md:flex-row w-full p-6 bg-white rounded-xl">
            <div className="flex flex-col bg-[#7374C5] text-white rounded-lg p-10 w-full gap-10 md:w-fit">
              <h2 className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">
                Kontak
              </h2>
              <div className="flex w-full gap-4 items-center">
                <Image
                  src={"/phone.png"}
                  alt=""
                  width={24}
                  height={24}
                  className="w-auto h-6"
                />
                <span>021-89452944</span>
              </div>
              <div className="flex w-full gap-4 items-center">
                <Image
                  src={"/email.png"}
                  alt=""
                  width={24}
                  height={24}
                  className="w-auto h-6"
                />
                <span>marketing@cahayaduaberlian.com</span>
              </div>
              <div className="flex w-full gap-4 items-center">
                <Image
                  src={"/location.png"}
                  alt=""
                  width={24}
                  height={24}
                  className="w-auto h-6 "
                />
                <span>Jln. Letnan Marsaid II No 14. Margajaya, Bekasi</span>
              </div>
            </div>
            <div className="p-10 w-full">
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-4 w-full"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col">
                    <label htmlFor="namaDepan" className="font-bold">
                      Nama Depan
                    </label>
                    <input
                      type="text"
                      name="namaDepan"
                      id="namaDepan"
                      placeholder="Jhon"
                      value={formData.namaDepan}
                      onChange={handleChange}
                      className="py-4 px-2 bg-transparent text-[#000000] text-sm border-b border-[#8D8D8D]"
                      required
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="namaBelakang" className="font-bold">
                      Nama Belakang
                    </label>
                    <input
                      type="text"
                      name="namaBelakang"
                      id="namaBelakang"
                      placeholder="Doe"
                      value={formData.namaBelakang}
                      onChange={handleChange}
                      className="py-4 px-2 bg-transparent text-[#000000] text-sm border-b border-[#8D8D8D]"
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col">
                    <label htmlFor="email" className="font-bold">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="example@mail.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="py-4 px-2 bg-transparent text-[#000000] text-sm border-b border-[#8D8D8D]"
                      required
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="nomorTelephone" className="font-bold">
                      Nomor Telephone
                    </label>
                    <input
                      type="tel"
                      name="nomorTelephone"
                      id="nomorTelephone"
                      placeholder="+628939120930"
                      value={formData.nomorTelephone}
                      onChange={handleChange}
                      className="py-4 px-2 bg-transparent text-[#000000] text-sm border-b border-[#8D8D8D]"
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-col">
                  <label htmlFor="jasa" className="font-bold">
                    Pilih Jasa
                  </label>
                  {Produks.map((value, index) => (
                    <div className="flex items-center gap-2" key={index}>
                      <input
                        type="radio"
                        id={`jasa-${index}`}
                        name="jasa"
                        value={value.nama}
                        onChange={handleChange}
                        className="mr-2"
                      />
                      <label htmlFor={`jasa-${index}`}>{value.nama}</label>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col">
                  <label htmlFor="pesan" className="font-bold">
                    Pesan
                  </label>
                  <textarea
                    name="pesan"
                    id="pesan"
                    placeholder="Tulis pesan Anda..."
                    value={formData.pesan}
                    onChange={handleChange}
                    className="py-4 px-2 bg-transparent text-[#000000] text-sm border-b border-[#8D8D8D]"
                  ></textarea>
                </div>
                <div className="flex w-full items-center justify-end">
                  <button
                    type="submit"
                    className="w-full text-white md:w-fit bg-[#3B71CA] hover:bg-blue-800 focus:ring-4 focus:outline-none font-bold focus:ring-blue-300 py-4 px-8 rounded-xl text-base sm:text-lg md:text-xl"
                  >
                    Kirim
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default KontakPage;

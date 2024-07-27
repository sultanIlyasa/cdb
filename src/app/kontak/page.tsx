"use client";
import { InfiniteMovingCards } from "@/components/ui/InfiniteMovingCards";
import { Mitras, Produks } from "@/lib/data";
import Image from "next/image";
import React, { ChangeEvent, useState } from "react";

const KontakPage = () => {
  const [isPending, setPending] = useState(false);
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    namaDepan: "",
    namaBelakang: "",
    email: "",
    nomorTelephone: "",
    jasa: "",
    pesan: "",
    attachment: null as File | null,
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData((prevData) => ({
      ...prevData,
      attachment: file,
    }));
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    setPending(true);

    const sender = {
      address: formData.email,
    };

    const recipients = {
      name: "CDB",
      address: "CDB@gmail.com",
    };

    const subject = "Kontak Email Cahaya Dua Berlian";
    const message = `
  <div
    style="
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      max-width: 100%;
      margin: auto;
      background-color: #f0f4f8;
      padding: 30px;
      border-radius: 12px;
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
    "
  >
    <h2
      style="
        color: #2c3e50;
        text-align: center;
        font-size: 28px;
        margin-bottom: 30px;
        text-transform: uppercase;
        letter-spacing: 2px;
      "
    >
      Permohonan Kerjasama
    </h2>

    <div
      style="
        background-color: white;
        padding: 25px;
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
      "
    >
      <p
        style="
          margin: 0;
          padding: 12px 0;
          border-bottom: 1px solid #e0e0e0;
          display: flex;
          align-items: center;
        "
      >
        <span style="font-weight: bold; color: #34495e; min-width: 120px">Nama</span>
        <span style="color: #3498db">: ${formData.namaDepan} ${formData.namaBelakang}</span>
      </p>
      <p
        style="
          margin: 0;
          padding: 12px 0;
          border-bottom: 1px solid #e0e0e0;
          display: flex;
          align-items: center;
        "
      >
        <span style="font-weight: bold; color: #34495e; min-width: 120px">Nomor HP</span>
        <span style="color: #3498db">: ${formData.nomorTelephone}</span>
      </p>
      <p
        style="
          margin: 0;
          padding: 12px 0;
          border-bottom: 1px solid #e0e0e0;
          display: flex;
          align-items: center;
        "
      >
        <span style="font-weight: bold; color: #34495e; min-width: 120px">Jasa</span>
        <span style="color: #3498db">: ${formData.jasa}</span>
      </p>
      <p
        style="margin: 0; padding: 12px 0; display: flex; align-items: flex-start"
      >
        <span style="font-weight: bold; color: #34495e; min-width: 120px">Pesan</span>
        <span style="color: #3498db; flex: 1">: ${formData.pesan}</span>
      </p>
    </div>
  </div>
`;

    const formDataToSend = new FormData();
    formDataToSend.append("sender", JSON.stringify(sender));
    formDataToSend.append("recipients", JSON.stringify(recipients));
    formDataToSend.append("subject", subject);
    formDataToSend.append("message", message);

    if (formData.attachment) {
      formDataToSend.append("attachment", formData.attachment);
    }

    const response = await fetch("/api/kirim-kontak-email", {
      method: "POST",
      body: formDataToSend,
    })
      .then((response) => {
        if (response.ok) {
          setMessage("Email telah terkirim");
        } else {
          setMessage("Email tidak terikirm");
        }
      })
      .catch((error) => setFormData(error));

    setPending(false);

    setFormData({
      namaDepan: "",
      namaBelakang: "",
      email: "",
      nomorTelephone: "",
      jasa: "",
      pesan: "",
      attachment: null,
    });
    resetRadioButtons();
  };

  function resetRadioButtons() {
    const radioButtons = document.querySelectorAll(
      'input[type="radio"]'
    ) as NodeListOf<HTMLInputElement>;
    radioButtons.forEach((radioButton) => {
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
              {message && (
                <div className="flex w-full bg-green-500 p-4 rounded-xl text-white mb-4">
                  <p>{message}</p>
                </div>
              )}
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
                  <label htmlFor="attachment" className="font-bold">
                    Attachment
                  </label>
                  <input
                    type="file"
                    name="attachment"
                    id="attachment"
                    placeholder="example@mail.com"
                    // value={formData.attachment == null ?? : ""}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      handleFileChange(e)
                    }
                    className="py-4 px-2 bg-transparent text-[#000000] text-sm border-b border-[#8D8D8D]"
                  />
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
                    disabled={isPending}
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

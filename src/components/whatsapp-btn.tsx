import React from "react";
import Link from "next/link";
import Image from "next/image";

interface WhatsAppButtonProps {
  phoneNumber: string;
  prefilledText?: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  phoneNumber,
  prefilledText,
}) => {
  const baseUrl = `https://wa.me/${phoneNumber}`;
  let whatsappUrl = baseUrl;

  if (prefilledText) {
    whatsappUrl += `?text=${encodeURIComponent(prefilledText)}`;
  }

  return (
    <Link href={whatsappUrl} target="_blank">
      <button
        type="button"
        className={`rounded-2xl bg-green-600 px-4 py-4 text-white duration-150 hover:bg-green-600/70 fixed bottom-4 right-4 z-50`}
      >
        <Image
          src={"/whatsapp.png"}
          alt="whatsapp"
          width={32}
          height={32}
          className="w-full h-full object-cover"
        />
      </button>
    </Link>
  );
};

export default WhatsAppButton;

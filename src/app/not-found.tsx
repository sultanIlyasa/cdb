import React from "react";

const NotFound = () => {
  return (
    <main className="min-h-screen mx-auto flex flex-col justify-center items-center gap-10">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-red-500">
        404
      </h1>
      <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl">
        Maaf halaman yang anda cari tidak ditemukan
      </p>
    </main>
  );
};

export default NotFound;

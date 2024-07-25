import { Kategori, Link, Mitra, pelanggan } from "@/types";

export const Produks: Kategori[] = [
  {
    nama: "Konstruksi",
    slug: "konstruksi",
    subKategori: [
      {
        nama: "Design & Konstruksi Indoor",
        slug: "design-&-konstruksi-indoor",
        deskripsi: null,
        cover: "/produk/konstruksi/construction1.png",
        gambar: [
          "/produk/konstruksi/designIndoor/DesignIndoor1.png",
          "/produk/konstruksi/designIndoor/DesignIndoor2.png",
          "/produk/konstruksi/designIndoor/DesignIndoor3.png",
        ],
        produk: [],
      },
      {
        nama: "Instalasi",
        slug: "instalasi",
        deskripsi: null,
        cover: "/produk/konstruksi/construction2.png",
        gambar: [
          "/produk/konstruksi/instalasi/Instalasi1.png",
          "/produk/konstruksi/instalasi/Instalasi2.png",
          "/produk/konstruksi/instalasi/Instalasi3.png",
          "/produk/konstruksi/instalasi/Instalasi4.png",
          "/produk/konstruksi/instalasi/Instalasi5.png",
        ],
        produk: [
          {
            nama: "Papan Nama Ruangan",
            slug: "papan-nama-ruangan",
            deskripsi: null,
            cover: "/produk/konstruksi/instalasi/PapanNamaRuangan.png",
            gambar: [],
          },
          {
            nama: "Papan Tanda Arah",
            slug: "papan-tanda-arah",
            deskripsi: null,
            cover: "/produk/konstruksi/instalasi/PapanTandaArah.png",
            gambar: [],
          },
          {
            nama: "Papan Akrilik",
            slug: "papan-akrilik",
            deskripsi: null,
            cover: "/produk/konstruksi/instalasi/PapanAkrilik.png",
            gambar: [],
          },
          {
            nama: "Stiker Sandblast",
            slug: "stiker-sandblast",
            deskripsi: null,
            cover: "/produk/konstruksi/instalasi/StikerSanblas.png",
            gambar: [],
          },
        ],
      },
    ],
  },
  {
    nama: "Percetakan",
    slug: "percetakan",
    subKategori: [
      {
        nama: "Souvenir & Konveksi",
        slug: "souvenir-&-konveksi",
        deskripsi: null,
        cover: "/produk/percetakan/printing1.png",
        gambar: [
          "/produk/percetakan/souvenir/SouvenirKonveksi1.png",
          "/produk/percetakan/souvenir/SouvenirKonveksi2.png",
          "/produk/percetakan/souvenir/SouvenirKonveksi3.png",
          "/produk/percetakan/souvenir/SouvenirKonveksi4.png",
          "/produk/percetakan/souvenir/SouvenirKonveksi5.png",
          "/produk/percetakan/souvenir/SouvenirKonveksi6.png",
          "/produk/percetakan/souvenir/SouvenirKonveksi7.png",
          "/produk/percetakan/souvenir/SouvenirKonveksi8.png",
          "/produk/percetakan/souvenir/SouvenirKonveksi9.png",
          "/produk/percetakan/souvenir/SouvenirKonveksi10.png",
        ],
        produk: [],
      },
      {
        nama: "Promosi",
        slug: "promosi",
        deskripsi: null,
        cover: "/produk/percetakan/printing2.png",
        gambar: [
          "/produk/percetakan/promosi/Promosi1.png",
          "/produk/percetakan/promosi/Promosi2.png",
        ],
        produk: [],
      },
      {
        nama: "Kemasan",
        slug: "kemasan",
        deskripsi: null,
        cover: "/produk/percetakan/printing3.png",
        gambar: [
          "/produk/percetakan/kemasan/Kemasan1.png",
          "/produk/percetakan/kemasan/Kemasan2.png",
        ],
        produk: [],
      },
      {
        nama: "Perlengkapan Kantor",
        slug: "perlengkapan-kantor",
        deskripsi: null,
        cover: "/produk/percetakan/printing4.png",
        gambar: [
          "/produk/percetakan/instalasi/Instalasi1.png",
          "/produk/percetakan/instalasi/Instalasi2.png",
          "/produk/percetakan/instalasi/Instalasi3.png",
          "/produk/percetakan/instalasi/Instalasi4.png",
          "/produk/percetakan/instalasi/Instalasi5.png",
        ],
        produk: [],
      },
    ],
  },
];

export const Links: Link[] = [
  {
    label: "Produk Kami",
    url: "/produk",
  },
  {
    label: "Tentang Kami",
    url: "/tentang",
  },
  {
    label: "Kontak Kami",
    url: "/kontak",
  },
];

export const Mitras: Mitra[] = [
  { url: "/images/client-1.png", label: null },
  { url: "/images/client-2.png", label: null },
  { url: "/images/client-3.png", label: null },
  { url: "/images/client-4.png", label: null },
  { url: "/images/client-5.png", label: null },
  { url: "/images/client-6.png", label: null },
  { url: "/images/client-7.png", label: null },
  { url: "/images/client-8.png", label: null },
  { url: "/images/client-9.png", label: null },
  { url: "/images/client-10.png", label: null },
  { url: "/images/client-11.png", label: null },
  { url: "/images/client-12.png", label: null },
  { url: "/images/client-13.png", label: null },
  { url: "/images/client-14.png", label: null },
];

export const Pelanggans: pelanggan[] = [
  {
    nama: "Jhon Doe",
    foto: "/client1.png",
    perusahaan: "CDB",
    tahun: "2024",
    judul: "text",
    deskripsi: "lorem ipsum",
  },
  {
    nama: "Jane Smith",
    foto: "/client1.png",
    perusahaan: "ABC Company",
    tahun: "2023",
    judul: "text",
    deskripsi: "lorem ipsum",
  },
  {
    nama: "Michael Johnson",
    foto: "/client1.png",
    perusahaan: "XYZ Corporation",
    tahun: "2022",
    judul: "text",
    deskripsi: "lorem ipsum",
  },
];

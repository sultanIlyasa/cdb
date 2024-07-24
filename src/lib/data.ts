import { Kategori, Link } from "@/types";

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
          "/produk/percetakan/instalasi/Instalasi1.png",
          "/produk/percetakan/instalasi/Instalasi2.png",
          "/produk/percetakan/instalasi/Instalasi3.png",
          "/produk/percetakan/instalasi/Instalasi4.png",
          "/produk/percetakan/instalasi/Instalasi5.png",
        ],
        produk: [],
      },
      {
        nama: "Promosi",
        slug: "promosi",
        deskripsi: null,
        cover: "/produk/percetakan/printing2.png",
        gambar: [
          "/produk/percetakan/instalasi/Instalasi1.png",
          "/produk/percetakan/instalasi/Instalasi2.png",
          "/produk/percetakan/instalasi/Instalasi3.png",
          "/produk/percetakan/instalasi/Instalasi4.png",
          "/produk/percetakan/instalasi/Instalasi5.png",
        ],
        produk: [],
      },
      {
        nama: "Kemasan",
        slug: "kemasan",
        deskripsi: null,
        cover: "/produk/percetakan/printing3.png",
        gambar: [
          "/produk/percetakan/instalasi/Instalasi1.png",
          "/produk/percetakan/instalasi/Instalasi2.png",
          "/produk/percetakan/instalasi/Instalasi3.png",
          "/produk/percetakan/instalasi/Instalasi4.png",
          "/produk/percetakan/instalasi/Instalasi5.png",
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
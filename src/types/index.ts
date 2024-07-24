export type Kategori = {
  nama: string;
  slug: string;
  subKategori: subKategori[];
};

export type subKategori = {
  nama: string;
  slug: string;
  deskripsi: string | null | undefined;
  cover: string | null | undefined;
  gambar: string[] | null | undefined;
  produk: Produk[];
};

export type Produk = {
  nama: string;
  slug: string;
  deskripsi: string | null | undefined;
  cover: string | null | undefined;
  gambar: string[] | null | undefined;
};

export type Link = {
  url: string;
  label: string;
};
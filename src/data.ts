import { FaBriefcase, FaCreditCard, FaMoneyBillWave } from "react-icons/fa";

export const newsData = [
  {
    id: 1,
    title: "Promo Spesial Bunga 0% untuk Kredit Mobil",
    date: "2025-03-07",
    description:
      "Nikmati bunga 0% untuk kredit mobil hingga akhir bulan ini. Syarat & ketentuan berlaku.",
    image: "/images/promo-mobil.jpeg",
    category: "Promo",
    details: `
      Program bunga 0% ini berlaku untuk pembelian mobil tertentu dengan tenor hingga 3 tahun.  
      **Cara mendapatkan promo ini:**  
      1. Ajukan kredit mobil melalui aplikasi CBank atau cabang terdekat.  
      2. Pilih mobil yang termasuk dalam program promo.  
      3. Lakukan pembayaran DP sesuai ketentuan.  
      4. Nikmati bunga 0% selama tenor yang ditentukan.  
      
      *Promo ini berlaku hingga akhir bulan dan terbatas untuk pelanggan pertama yang mengajukan!*
    `,
  },
  {
    id: 2,
    title: "CBank Raih Penghargaan Bank Digital Terbaik",
    date: "2025-03-05",
    description:
      "CBank mendapatkan penghargaan sebagai Bank Digital Terbaik dalam ajang FinTech Awards 2025.",
    image: "/images/bank-award.jpeg",
    category: "Berita",
    details: `
      CBank dinobatkan sebagai **Bank Digital Terbaik 2025** dalam ajang FinTech Awards karena inovasi layanan digital yang unggul.  
      **Beberapa faktor yang membuat CBank menang:**  
      - Sistem keamanan perbankan berbasis AI.  
      - Layanan perbankan tanpa cabang dengan fitur lengkap.  
      - Kecepatan transaksi real-time di seluruh layanan.  
      
      *CBank terus berinovasi untuk memberikan layanan terbaik bagi nasabah di era digital!*
    `,
  },
  {
    id: 3,
    title: "Diskon 50% untuk Transaksi Kartu Kredit di Restoran",
    date: "2025-03-01",
    description:
      "Dapatkan diskon hingga 50% saat makan di restoran tertentu dengan kartu kredit CBank.",
    image: "/images/diskon-resto.jpg",
    category: "Promo",
    details: `
      Promo ini berlaku untuk pemegang kartu kredit CBank yang makan di restoran mitra selama bulan Maret 2025.  
      **Cara mendapatkan diskon ini:**  
      1. Gunakan kartu kredit CBank saat membayar di restoran yang berpartisipasi.  
      2. Diskon 50% otomatis diterapkan saat transaksi.  
      3. Promo hanya berlaku pada transaksi minimal Rp 200.000.  
      
      *Nikmati makan enak dengan harga lebih hemat bersama CBank!*
    `,
  },
];

export const services = [
  {
    id: 1,
    name: "Tabungan Digital",
    description: "Buka rekening dalam hitungan menit tanpa perlu ke bank.",
    icon: FaMoneyBillWave,
  },
  {
    id: 2,
    name: "Kredit Cepat",
    description: "Ajukan pinjaman dengan bunga kompetitif dan proses cepat.",
    icon: FaCreditCard,
  },
  {
    id: 3,
    name: "Investasi",
    description: "Berbagai produk investasi untuk masa depan finansial Anda.",
    icon: FaBriefcase,
  },
];

export const faqs = [
  {
    id: 1,
    question: "Bagaimana cara membuka rekening?",
    answer: "Anda bisa membuka rekening secara online melalui aplikasi kami.",
  },
  {
    id: 2,
    question: "Apa saja syarat pengajuan kredit?",
    answer: "Syarat utama adalah memiliki penghasilan tetap dan KTP.",
  },
  {
    id: 3,
    question: "Berapa lama proses persetujuan kredit?",
    answer:
      "Proses persetujuan kredit biasanya memakan waktu 1-3 hari kerja tergantung pada kelengkapan dokumen.",
  },
  {
    id: 4,
    question: "Apakah ada biaya administrasi untuk transaksi?",
    answer:
      "Beberapa transaksi mungkin dikenakan biaya administrasi. Anda bisa melihat detailnya di aplikasi perbankan kami.",
  },
  {
    id: 5,
    question: "Bagaimana cara menghubungi layanan pelanggan?",
    answer:
      "Anda bisa menghubungi layanan pelanggan melalui live chat di aplikasi atau menghubungi call center kami di 1500-123.",
  },
];

export const teamMembers = [
  {
    name: "Asep Jamaludin",
    role: "Frontend Developer",
    img: "/images/users/user1.png",
    ig: "#",
    github: "#",
    linkedin: "#",
  },
  {
    name: "Budi Santoso",
    role: "Backend Developer",
    img: "/images/users/user2.jpg",
    ig: "#",
    github: "#",
    linkedin: "#",
  },
  {
    name: "Citra Dewi",
    role: "UI/UX Designer",
    img: "/images/users/user3.jpg",
    ig: "#",
    github: "#",
    linkedin: "#",
  },
  {
    name: "Dewi Lestari",
    role: "Project Manager",
    img: "/images/users/user4.jpg",
    ig: "#",
    github: "#",
    linkedin: "#",
  },
];

// ../data.ts
export const brandLogos = [
  {
    name: "Amazon",
    image:
      "https://amazon-blogs-brightspot-lower.s3.amazonaws.com/about/00/92/0260aab44ee8a2faeafde18ee1da/amazon-logo-inverse.svg",
  },
  {
    name: "Shopee",
    image:
      "https://www.mendaftarkerja.com/wp-content/uploads/2024/09/IMG_2812.png",
  },
  {
    name: "Tokopedia",
    image: "https://www.julo.co.id/sites/default/files/2024-10/tokopedia.webp",
  },
  { name: "Lazada", image: "https://blog.alconost.com/hubfs/Lazada.svg" },
  {
    name: "Bukalapak",
    image:
      "https://hybrid.co.id/wp-content/uploads/2020/03/6d348add535c3c623309ebf5c1ee0c88_brand-architecture-bukalapak-primary@2x-1.png",
  },
  {
    name: "Blibli",
    image: "https://logowik.com/content/uploads/images/bliblicom1753.jpg",
  },
  {
    name: "Zalora",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt26xkMirIuF1VVGPpU0lCWc7XwpVz3uvixQ&s",
  },
  {
    name: "Traveloka",
    image:
      "https://interworks.com/wp-content/uploads/2023/02/Traveloka_Primary_Logo.webp",
  },
  {
    name: "Gojek",
    image:
      "https://www.pranataprinting.com/wp-content/uploads/2021/05/Sejarah-Singkat-Perusahaan-Gojek-Dan-Perkembangannya.jpg",
  },
  {
    name: "Grab",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsY2Mxbw-W5Fmx-ExXurEX-Z1_m4SjdN7Cgg&s",
  },
  {
    name: "Tiket.com",
    image:
      "https://www.linkaja.id/uploads/images/YW50aWtvZGVfXzE2OTY2NzU4MThfbG9nby10aWtldC1jb20tcG5n.png",
  },
];

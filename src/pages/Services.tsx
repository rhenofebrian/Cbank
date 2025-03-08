import { motion } from "framer-motion";

const services = [
  {
    name: "Tabungan",
    img: "https://images.pexels.com/photos/4386379/pexels-photo-4386379.jpeg",
    desc: "Nikmati berbagai jenis tabungan dengan bunga kompetitif dan kemudahan akses kapan saja. Tabungan kami dirancang untuk memenuhi kebutuhan keuangan Anda, mulai dari tabungan harian hingga deposito berjangka.",
    details: [
      "Bunga kompetitif sesuai dengan jenis tabungan.",
      "Fasilitas kartu ATM dan mobile banking.",
      "Bebas biaya administrasi untuk jenis tabungan tertentu.",
      "Bisa digunakan untuk autodebet pembayaran tagihan.",
    ],
  },
  {
    name: "Kredit",
    img: "https://images.pexels.com/photos/4386366/pexels-photo-4386366.jpeg",
    desc: "Dapatkan pinjaman dengan suku bunga rendah, proses cepat, dan fleksibilitas pembayaran. Kami menawarkan berbagai pilihan kredit seperti KTA, KPR, dan kredit kendaraan dengan cicilan ringan.",
    details: [
      "Kredit Tanpa Agunan (KTA) untuk kebutuhan mendesak.",
      "Kredit Pemilikan Rumah (KPR) dengan tenor fleksibel.",
      "Kredit kendaraan dengan DP rendah dan cicilan ringan.",
      "Suku bunga rendah dan transparan tanpa biaya tersembunyi.",
    ],
  },
  {
    name: "Investasi",
    img: "https://images.pexels.com/photos/6693655/pexels-photo-6693655.jpeg",
    desc: "Pilih berbagai produk investasi untuk mengembangkan aset dan meraih keuntungan maksimal. Kami menyediakan reksa dana, obligasi, saham, dan berbagai instrumen investasi lainnya yang sesuai dengan profil risiko Anda.",
    details: [
      "Reksa dana dengan berbagai jenis pilihan risiko.",
      "Investasi saham melalui platform digital yang mudah.",
      "Obligasi negara dan swasta dengan keuntungan stabil.",
      "Dukungan konsultasi investasi dari ahli keuangan.",
    ],
  },
  {
    name: "Internet Banking",
    img: "https://images.pexels.com/photos/4386374/pexels-photo-4386374.jpeg",
    desc: "Akses layanan perbankan secara online dengan fitur lengkap. Kelola rekening, bayar tagihan, transfer dana, dan lainnya dengan mudah dan aman melalui Internet Banking kami.",
    details: [
      "Cek saldo dan riwayat transaksi kapan saja.",
      "Transfer antarbank dan ke e-wallet dengan cepat.",
      "Keamanan transaksi dengan autentikasi OTP.",
      "Pembayaran tagihan listrik, air, dan internet.",
    ],
  },
  {
    name: "E-Wallet & Pembayaran Digital",
    img: "https://images.pexels.com/photos/4386326/pexels-photo-4386326.jpeg",
    desc: "Gunakan layanan e-wallet kami untuk transaksi digital dengan mudah dan cepat. Isi saldo, transfer, dan bayar tagihan hanya dengan beberapa klik.",
    details: [
      "Terintegrasi dengan berbagai platform pembayaran digital.",
      "Bisa digunakan untuk belanja online dan offline.",
      "Fitur top-up saldo dengan metode pembayaran fleksibel.",
      "Transaksi cepat dengan QRIS dan NFC.",
    ],
  },
];

export default function Services() {
  return (
    <div className="w-full min-h-screen bg-white dark:bg-black">
      <div className="container mx-auto p-6 md:p-12 mt-16 bg-transparent">
        <h2 className="text-4xl font-bold text-blue-600 text-center">
          Layanan Perbankan
        </h2>
        <p className="mt-4 text-gray-700 dark:text-gray-300 text-center max-w-2xl mx-auto">
          Kami menyediakan berbagai layanan perbankan yang dirancang untuk
          memenuhi kebutuhan finansial Anda, dari tabungan hingga investasi.
        </p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10">
          {services.map(({ name, img, desc, details }, index) => (
            <motion.div
              key={index}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative flex flex-col items-center md:items-start gap-6 rounded-xl p-6 md:p-8 shadow-lg bg-white dark:bg-gray-900 bg-opacity-50 backdrop-blur-md hover:shadow-2xl transition-all duration-300 border border-gray-300 dark:border-gray-800 h-full"
            >
              <motion.img
                src={img}
                alt={name}
                className="w-full h-48 md:h-56 object-cover rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
                whileHover={{ scale: 1.05 }}
              />
              <div className="flex flex-col flex-1 w-full">
                <h3 className="text-2xl font-semibold bg-gradient-to-r from-blue-500 to-blue-700 text-transparent bg-clip-text text-center md:text-left">
                  {name}
                </h3>
                <p className="mt-4 text-gray-600 dark:text-white leading-relaxed max-w-lg mx-auto md:mx-0 text-center md:text-left">
                  {desc}
                </p>
                <ul className="mt-4 list-disc list-inside text-gray-600 dark:text-white space-y-2 max-w-lg mx-auto md:mx-0">
                  {details.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-5xl mx-auto px-6">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          {/* Logo & Deskripsi */}
          <div>
            <h2 className="text-2xl font-bold text-blue-400">CBank</h2>
            <p className="text-gray-400 mt-2">
              Bank modern yang membantu keuangan Anda lebih baik. Aman, cepat,
              dan terpercaya.
            </p>
          </div>

          {/* Navigasi Footer */}
          <div>
            <h3 className="text-lg font-semibold text-white">Navigasi</h3>
            <ul className="mt-3 space-y-2">
              {[
                { name: "Beranda", link: "/" },
                { name: "Layanan", link: "/services" },
                { name: "Simulasi Kredit", link: "/loan-simulation" },
                { name: "Promo & Berita", link: "/news" },
                { name: "Kontak", link: "/contact" },
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href={item.link}
                    className="text-gray-400 hover:text-blue-400 transition duration-300"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Ikon Sosial Media */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold text-white">Ikuti Kami</h3>
            <div className="flex space-x-4 mt-3">
              {[
                { icon: FiFacebook, link: "https://facebook.com" },
                { icon: FiTwitter, link: "https://twitter.com" },
                { icon: FiInstagram, link: "https://instagram.com" },
                { icon: FiLinkedin, link: "https://linkedin.com" },
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 text-2xl transition duration-300"
                >
                  <item.icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-6 pt-4 text-center text-gray-500 text-sm">
          © 2025 CPS Bank. Semua Hak Dilindungi.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

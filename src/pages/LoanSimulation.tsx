import { useState } from "react";
import { motion } from "framer-motion";

export default function LoanSimulator() {
  const [loanAmount, setLoanAmount] = useState<string>("10000000"); // Default 10 juta
  const [interestRate, setInterestRate] = useState<number>(5); // Default 5% per tahun
  const [tenor, setTenor] = useState<number>(12); // Default 12 bulan
  const [installment, setInstallment] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  // Fungsi untuk format angka ke Rupiah
  const formatRupiah = (value: number) =>
    value.toLocaleString("id-ID", { style: "currency", currency: "IDR" });

  // Fungsi untuk membersihkan input (hanya angka)
  const cleanNumber = (value: string) => value.replace(/\D/g, ""); // Ambil hanya digit

  // Fungsi menghitung cicilan per bulan
  const calculateInstallment = () => {
    const cleanLoanAmount = Number(cleanNumber(loanAmount));

    if (cleanLoanAmount <= 0 || interestRate <= 0 || tenor <= 0) {
      alert("Masukkan angka yang valid!");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      const monthlyRate = interestRate / 100 / 12;
      const installmentAmount =
        (cleanLoanAmount * monthlyRate) /
        (1 - Math.pow(1 + monthlyRate, -tenor));

      setInstallment(installmentAmount);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-black px-4">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center">
          Simulasi Kredit
        </h2>

        {/* Input Form */}
        <div className="space-y-4">
          {/* Jumlah Pinjaman */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Jumlah Pinjaman (Rp)
            </label>
            <input
              type="text"
              value={loanAmount}
              onChange={(e) => setLoanAmount(cleanNumber(e.target.value))}
              onBlur={() =>
                setLoanAmount(Number(loanAmount).toLocaleString("id-ID"))
              }
              className="mt-1 p-2 w-full border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white text-right"
            />
          </div>

          {/* Suku Bunga */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Suku Bunga (% per tahun)
            </label>
            <input
              type="number"
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              className="mt-1 p-2 w-full border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white text-right"
              min={1}
            />
          </div>

          {/* Tenor */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Tenor (bulan)
            </label>
            <input
              type="number"
              value={tenor}
              onChange={(e) => setTenor(Number(e.target.value))}
              className="mt-1 p-2 w-full border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white text-right"
              min={1}
            />
          </div>

          {/* Tombol Hitung */}
          <button
            onClick={calculateInstallment}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition flex justify-center"
          >
            {loading ? "Menghitung..." : "Hitung Cicilan"}
          </button>
        </div>

        {/* Hasil Perhitungan dengan Animasi */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={installment !== null ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mt-4 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg text-center"
        >
          {installment !== null && (
            <>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Cicilan Per Bulan
              </h3>
              <p className="text-xl font-bold text-blue-600 dark:text-blue-400">
                {formatRupiah(installment)}
              </p>
            </>
          )}
        </motion.div>
      </div>
    </div>
  );
}

import AppRouter from "./router";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-black">
      <Navbar />
      <main className="flex-grow pt-16">
        {" "}
        {/* Tambahkan pt-16 agar tidak tertutup Navbar */}
        <AppRouter />
      </main>
      <Footer />
    </div>
  );
}

export default App;

import AppRouter from "./router";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-950">
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

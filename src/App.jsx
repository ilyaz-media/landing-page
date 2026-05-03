import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Layanan from "./pages/Layanan";
import Portofolio from "./pages/Portofolio";
import Testimoni from "./pages/Testimoni";
import About from "./pages/about/About";
import Harga from "./pages/Harga";

export default function App() {
  return (
    <div className="font-poppins scroll-smooth">
      <Navbar/>
      <Home/>
      <About/>
      <Layanan/>
      <Portofolio/>
      <Harga/>
      <Testimoni/>
    </div>
  );
}

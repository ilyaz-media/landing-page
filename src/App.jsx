import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Layanan from "./pages/Layanan";
import Portofolio from "./pages/Portofolio";
import Testimoni from "./pages/Testimoni";
import About from "./pages/about/About";
import Harga from "./pages/Harga";
import aos from 'aos';
import 'aos/dist/aos.css'; 


import { useEffect } from "react";




export default function App() {

  useEffect(()=>{
    aos.init({

      duration:1100,
      once :false
      
    })
  },[])
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

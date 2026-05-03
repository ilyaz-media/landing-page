import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [openBar, setOpenBar] = useState(false);
  return (
    <div className="fixed right-0 left-0 z-10">
      <nav className="flex justify-between px-5 md:px-10 items-center py-5  bg-white">
        <div className="text-xl font-semibold">
          Ilyas <span className="text-cyan-500">Project</span>
        </div>
        <div className="flex gap-10 hidden md:flex text-sm">
          <a href="#home">Berada</a>
          <a href="#services">Layanan</a>
          <a href="#portofolio">Portofolio</a>
          <a href="#price">Harga</a>
          <a href="#testimoni">Testimoni</a>
          <a href="#faq">FAQ</a>
        </div>
        <button className=" hidden md:block text-white bg-cyan-400 px-3 py-2 text-sm rounded-lg">
          Hubungi Kami
        </button>

        <button className="md:hidden" onClick={() => setOpenBar(!openBar)}>
          {openBar ? <FaTimes /> : <FaBars />}
        </button>
      </nav>
      {openBar && (
        <div className="flex flex-col gap-3 bg-white p-5">
          <a href="#home">Berada</a>
          <a href="#services">Layanan</a>
          <a href="#portofolio">Portofolio</a>
          <a href="#price">Harga</a>
          <a href="#testimoni">Testimoni</a>
          <a href="#faq">FAQ</a>
          <button className=" mt-3 text-white bg-cyan-400 px-3 py-2 text-sm rounded-lg">
            Hubungi Kami
          </button>
        </div>
      )}
    </div>
  );
}

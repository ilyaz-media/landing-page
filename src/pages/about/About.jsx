import img from "../../assets/1.png";
import { FolderOpen,Send,Download } from "lucide-react";
import mockup from '../../assets/5.png';
import { FaFacebook, FaGithub, FaInstagram, FaJs, FaLinkedin, FaReact } from "react-icons/fa";
import { SiFramer, SiTailwindcss } from "react-icons/si";

import "./about.css";


export default function About() {
  return (
    <div id="about" className="scroll-mt-20 min-h-screen py-10 mt-10 px-5 lg:px-20">
      <h2 className="text-center text-cyan-500">ABOUT US</h2>
      <h1 className="text-2xl lg:text-3xl font-semibold text-center">
        Tentang Saya
      </h1>

      {/* grid 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-10">
        {/* left */}
        <div className="blurAbout">
          <img src={img} className="h-[400px] object-contain w-full" alt="" />
          <FaGithub className="absolute shadow-lg text-black p-2 bg-white rounded-lg   bottom-[10%] left-[15%] lg:left-[23%]" size={40}/>
          <FaInstagram className="absolute shadow-lg text-red-400 p-2 bg-white rounded-lg   bottom-[10%] right-[15%] lg:right-[23%]" size={40}/>
          <FaLinkedin className="absolute shadow-lg text-blue-500 p-2 bg-white rounded-lg   top-[60%] left-[5%] lg:left-[16%]" size={40}/>
          <FaFacebook className="absolute shadow-lg text-blue-500 p-2 bg-white rounded-lg   top-[60%] right-[5%] lg:right-[16%]" size={40}/>

        </div>
        {/* right */}
        <div className="p-5 flex flex-col justify-center gap-5">
          {/* 1 */}
          <p className="text-sm leading-normal">
            Saya adalah seorang web developer yang fokus membantu pembuatan
            website modern, responsif, dan sesuai kebutuhan klien. Saya
            menggunakan teknologi seperti React dan Tailwind CSS untuk membangun
            tampilan yang cepat, bersih, dan profesional. Bagi saya, website
            bukan hanya soal desain, tetapi juga bagaimana website tersebut
            dapat memberikan dampak nyata bagi bisnis atau personal branding
            Anda.
          </p>
          {/* 3 */}
          <div className="flex gap-5">
            <button className=" px-3 py-2 text-sm lg:text-base lg:px-5 lg:py-3 text-white bg-cyan-500 flex items-center rounded-lg shadow-lg gap-2 ">
              Lihat Portofolio <FolderOpen />
            </button>{" "}
            <button className="px-3 py-2 text-sm lg:text-base lg:px-5 lg:py-3 text-cyan-600 bg-white flex items-center rounded-lg shadow-lg gap-2 ">
              Download CV <Download/>
            </button>{" "}
          </div>
        </div>
      </div>

      {/* grid 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 px-5 md:px-5 items-center mt-10 ">
        {/* left */}
        <div className="flex-1 ">
          <h1 className="text-xl font-semibold">
            Membantu Anda Memiliki Website Profesional
          </h1>
          <p className="text-sm mt-3 leading-normal">
            Saya membantu individu dan bisnis membangun website yang tidak hanya
            menarik secara visual, tetapi juga optimal dalam performa dan
            pengalaman pengguna. Setiap project saya kerjakan dengan detail dan
            pendekatan yang terstruktur agar hasilnya maksimal dan sesuai dengan
            tujuan yang ingin dicapai.
          </p>
           <button className="px-3 py-3 flex items-center gap-1 rounded-lg shadow-lg text-white bg-cyan-500 mt-5 text-sm lg:text-base">
            Konsultasi Gratis <Send/>
          </button>
        </div>
        {/* right */}
        <div className=" flex-1  relative blurMockup ">
            <img src={mockup} className="h-[400px] w-full object-contain " alt="" />
          <FaReact className="absolute top-[16%] p-2 bg-slate-700 text-teal-500 rounded-lg shadow-lg left-[9%] lg:left-[20%]" size={50}/>
          <FaJs className="absolute top-[40%] p-2 bg-slate-900 text-yellow-400 rounded-lg shadow-lg right-[5%] lg:right-[20%]" size={50}/>
          <SiTailwindcss className="absolute bottom-[30%] p-2 bg-slate-700 text-teal-500 rounded-lg shadow-lg left-[5%] lg:left-[21%]" size={50}/>
        </div>  
      </div>
    </div>
  );
}

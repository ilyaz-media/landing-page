import { FolderOpen, MonitorSmartphone, Send, Shield, ShieldCheck, Zap } from "lucide-react";
import mockup from '.././assets/4.png';


import './home.css'

export default function Home() {
  return (
    <div id="home" className="scroll-mt-20 min-h-screen pt-20 bg-gradient-to-b from-white to-cyan-50 grid grid-cols-1 lg:grid-cols-2   px-5 lg:px-10">
      {/* left */}
      <div className="  flex flex-col justify-center gap-5 text-gray-800 py-10  ">
        <h1 className="text-cyan-500 bg-cyan-50 rounded-lg w-fit px-2">
          JASA PEMBUATAN WEBSITE PROFESIONAL
        </h1>
        <h1 className=" text-2xl lg:text-5xl leading-tight font-[550]">
          Buat Website Impianmu Profesional, Modern, <br />
         <span className="text-cyan-500">dan cepat</span>
        </h1>

        <div>
          <p className="leading-6 text-xs lg:text-sm">
            Kami membantu bisnis Anda tampil lebih profesional <br /> di dunia
            digital dengan website yang menarik, <br /> responsif, dan mudah di
            kelola
          </p>
        </div>
        {/* cta */}
        <div className="flex gap-2">
          <button className="px-3 py-3 flex items-center gap-1 rounded-lg shadow-lg text-white bg-cyan-500 text-sm lg:text-base">
            Konsultasi Gratis <Send/>
          </button>
          <a href="#portofolio" className="px-5 py-3 flex bg-white items-center rounded-lg shadow-lg gap-2 text-sm lg:text-base ">
            Lihat Project <FolderOpen/>
          </a>
        </div>
        {/* highlight */}
        <div className=" flex flex-col mt-10 lg:flex-row justify-center  gap-3  text-sm ">
          <div className="   flex gap-2">
            <div className="left p-5 rounded-full bg-white"><ShieldCheck/></div>
            <div className="right ">
              <h1 className="font-bold">Desain Modern</h1>
              <p className="text-xs">Tampilan Profesional dan menarik</p>
            </div>
          </div>
          <div className="   flex gap-2">
            <div className="left p-5 rounded-full bg-white"><MonitorSmartphone/></div>
            <div className="right ">
              <h1 className="font-bold">Responsif</h1>
              <p className="text-xs">Nyaman di semua perangkat</p>
            </div>
          </div>
          <div className="   flex gap-2">
            <div className="left p-5 rounded-full bg-white"><Zap/></div>
            <div className="right ">
              <h1 className="font-bold">Performa cepat </h1>
              <p className="text-xs">Website cepat diakses dan SEO friendly</p>
            </div>
          </div>
         
         
        </div>
      </div>

      {/* right */}
      <div className=" mockup  relative p-5">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="absolute z-[-1] bottom-[2%] lg:bottom-[10%]  h-full w-full right-[-6%] ">
  <path fill="#22d3ee" d="M38.8,-61.3C47.8,-54.5,51,-39.6,60.1,-25.7C69.1,-11.8,83.9,1.2,83.6,12.9C83.3,24.6,67.8,34.9,53.7,40.7C39.6,46.4,27,47.6,14.8,51.9C2.6,56.2,-9.1,63.7,-21.9,64.5C-34.7,65.4,-48.6,59.8,-53.6,49.1C-58.7,38.5,-55,22.9,-57.3,8.1C-59.6,-6.7,-68,-20.8,-67.6,-34.7C-67.2,-48.6,-58,-62.3,-45.3,-67.4C-32.6,-72.5,-16.3,-69.1,-0.7,-68C14.9,-66.8,29.7,-68.1,38.8,-61.3Z" transform="translate(100 100)" />
</svg>
<img src={mockup} alt="" className="ml-8 lg:ml-20" />
      </div>
    </div>
  );
}

import {
  BookOpen,
  Check,
  Globe,
  Icon,
  Layout,
  MessageSquare,
  Monitor,
  Rocket,
  Search,
  Settings,
  ShieldCheck,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function Harga() {
  const fitures = [
    {
      title: "Hingga 5 Halaman",
      subTitle: "Beranda, tentang, Layanan, portofolio, Kontak",
      icon: Layout,
    },
    {
      title: "Desain Responsif dan modern",
      subTitle: "Tampilan optimal di semua perangkat",
      icon: Monitor,
    },
    {
      title: "SEO Dasar",
      subTitle: "Meta tag, optimasi kecepatan dasar, friendly URL",
      icon: Search,
    },
    {
      title: "Form Kontak & Whatsapp",
      subTitle: "Memudahkan komunikasi dengan pelanggan",
      icon: MessageSquare,
    },
    {
      title: "Bantuan Deploy Ke Hosting",
      subTitle: "Saya bantu proses upload hingga online",
      icon: Rocket,
    },
    {
      title: "Panduan Penggunaan Website",
      subTitle: "Dokumentasi sederhana untuk mengelola website",
      icon: BookOpen,
    },
  ];

  const catatan = [
    {
      title: "Domain & hosting",
      ket: "Tidak termasuk dalam harga. Klien membeli sendiri sesuai kebutuhan.",
      Icon: Globe,
    },
    {
      title: "Bantuan Setup",
      ket: "kami siap membantu proses pembelian domain, hosting, dan setup awal.",
      Icon: Settings,
    },
    {
      title: "Fleksibel",
      ket: "Butuh halaman atau fitur lain ? Bisa disesuaikan dengan kebutuhan Anda.",
      Icon: ShieldCheck,
    },
  ];

  return (
    <div id="price" className=" scroll-mt-20 mt-10 py-5 px-5 md:px-10">
      <div className="text-center">
        <h1 className=" text-cyan-500">PRICE</h1>
        <h1 className=" text-3xl font-semibold mt-2">
          Paket Website Profesional
        </h1>
        <p className="text-sm hidden  md:inline mt-2">
          Solusi website profesional dengan desai modern, responsif, <br /> dan
          hasil terbaik untuk bisnis anda.
        </p>
      </div>

      {/* grid */}
      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-5 mt-10">
        <div className="p-5 rounded-lg grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-2 shadow-lg">
          {/* left */}
          <div className="lg:p-5 rounded-lg">
            <h1 className="text-2xl font-semibold">Paket Basic</h1>
            <p className=" my-5 text-xs lg:text-sm">
              Cocok untuk bisnis kecil, personal branding,
              <br /> dan UMKM yang ingin tampil profesional
            </p>
            <hr />
            {/* daftar keterangan */}
            <div className="flex flex-col ">
              {fitures.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    className={` ${index !== fitures.length - 1 ? "border-b border-dashed" : ""}  flex items-center`}>
                    {/* logo */}
                    <div className="p-5">
                      <Icon size={40} className="p-1 text-cyan-600" />
                    </div>
                    {/* ket */}
                    <div>
                      <h2 className="font-semibold">{item.title}</h2>
                      <p className="text-xs hidden lg:inline">{item.subTitle}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* center */}
          <div className="p-10 flex flex-col justify-center gap-10  border-l border-gray-200">
            {/* 1 */}
            <div className="flex flex-col  gap-5">
              <p className="font-semibold">Mulai dari</p>
              <h1 className=" text-4xl lg:text-5xl font-bold">Rp.1.000.000</h1>
              <p className="text-cyan-600 bg-cyan-50 w-fit p-2 rounded-3xl font-semibold ml-10">
                Sekali bayar
              </p>
            </div>
            {/* 2*/}
            <div className="flex flex-col gap-5">
              <li className="list-none flex gap-5">
                <Check className="rounded-full bg-cyan-600 text-white p-1 rounded-full" />
                Revisi 2 -3 kali
              </li>
              <li className="list-none flex gap-5">
                <Check className="rounded-full bg-cyan-600 text-white p-1 rounded-full" />
                Pngerjaan 5 -7 hari kerja
              </li>
              <li className="list-none flex gap-5">
                <Check className="rounded-full bg-cyan-600 text-white p-1 rounded-full" />
                Garansi Bug 10 hari
              </li>
              <li className="list-none flex gap-5">
                <Check className="rounded-full bg-cyan-600 text-white p-1 rounded-full" />
                Support via Whatsapp
              </li>
            </div>
            {/* 3 */}
            <div className="flex flex-col gap-5 items-center justify-center">
              <button className="text-white bg-cyan-500 flex gap-5 items-center text-sm lg:text-base rounded-lg px-3 lg:px-5 py-3 w-fit shadow-lg">
                <FaWhatsapp size={30} /> Konsultasi sekarang
              </button>
              <p className="flex gap-5 text-xs items-center text-gray-600">
                <ShieldCheck className="text-cyan-500" />
                100% Aman & Transparant
              </p>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="p-10  rounded-lg bg-gradient-to-b from-white to-blue-100 ">
          <h1 className="text-2xl font-bold">Catatan Penting</h1>

          {/* grid */}
          <div className="flex flex-col gap-1 mt-10">
            {catatan.map((item) => {
              const Icon = item.Icon;
              return (
                <div className="flex text-sm p-2 items-center  px-5">
                  <Icon  size={60} className="text-cyan-600"/>
                  <div className="p-5">
                    <h2 className="font-semibold text-base">{item.title}</h2>
                    <p className="mt-1">{item.ket}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

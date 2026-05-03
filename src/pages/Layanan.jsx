import { LayoutDashboard, PenTool, Settings, ShoppingCart } from "lucide-react";

export default function Layanan() {
  const services = [
    {
      icon: LayoutDashboard,
      title: "Website Company Profile",
      description: "Tampilkan profil bisnis anda secara profesional dan tingkatkan kepercayaan klien",
    },
    {
      icon: ShoppingCart,
      title: "Website UMKM",
      description: "Miliki toko online sendiri untuk jualan lebih luas dan kelola produk dengan mudah",
    },
    {
      icon: PenTool,
      title: "Landing Page",
      description: "Tingkatkan konversi iklan dengan landing page yang menarik dan berfokus pada tujuan",
    },
    {
      icon: Settings,
      title: "Custom Website",
      description: "Solusi custom website sesuai kebutuhan bisnis anda yang unik dan kompleks",
    },
  ];

  return (
    <div id="services" className="scroll-mt-20 bg-slate-50 py-10 min-h-[80vh]  px-5 text-center" >
    <div className="w-[80%] mx-[auto]">
      <h1 className=" text-cyan-500">LAYANAN KAMI</h1>
      <h1 className="text-2xl font-semibold leading- mt-2">
        Solusi Lengkap Untuk Kebutuhan Website Anda
      </h1>
      <p className="hidden lg:inline leading-6 mt-2 text-sm text-gray-700">
        Kami menyediakan berbagai layanan pembuatan website yang di rancang{" "}
        <br /> untuk membantu bisnis Anda berkembang di dunia digital.
      </p>
    </div>

      {/*  */}

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 p-2  lg:p-10 mt-5">
        {services.map((item) => {
          const Icon = item.icon;
          return (
            <div className=" py-5 px-5 bg-white text-start  text-gray-800 border-slate-300 rounded-2xl"  >
                <div className="flex flex-col"  data-aos='fade-up' >

                <div className="bg-slate-100 w-16 h-16 flex items-center justify-center rounded-lg ">
              <Icon  className="text-cyan-600" />
                </div>
                <div>
              <h1 className="font-bold text-sm lg:text-xl mt-5">{item.title}</h1>
              <p className="text-xs lg:text-sm mt-2">{item.description}</p>
                </div>
                </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

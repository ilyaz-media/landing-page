import { Send } from "lucide-react";
export default function Testimoni() {
  const testimonials = [
    {
      nama: "andre",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis nobis voluptas eius.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam doloremque recusandae sunt!",
      pangkat: "CEO kusumaFood",
    },
    {
      nama: "andre",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis nobis voluptas eius.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam doloremque recusandae sunt!",
      pangkat: "CEO kusumaFood",
    },
    {
      nama: "andre",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis nobis voluptas eius.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam doloremque recusandae sunt!",
      pangkat: "CEO kusumaFood",
    },
  ];

  return (
    <div className=" bg-cyan-500 text-white  py-5">
      <div className="w-[90%] mx-[auto] text-center">
        {/* <h1 className="">TESTIMONI</h1>
        <h1 className="text-2xl font-semibold leading- mt-2">
          Apa kata klien kami ?
        </h1>

        <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          {testimonials.map((item) => {
            return (
              <div className="bg-white text-gray-600 text-start py-10 px-5 rounded-lg">
                <p className="text-sm">{item.review}</p>
                <div className="flex gap-2 mt-5">
                  <div className="p-5 rounded-full bg-indigo-200 w-[60px] "></div>
                  <div>
                    <h1 className="font-bold mt-5 text-xl">{item.nama}</h1>
                    <p className="text-xs">{item.pangkat}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div> */}
        <div className="rounded-lg bg-white p-5  flex flex-col gap-10 lg:flex-row  lg:gap-80 justify-center">
          <div className="flex gap-2 ">
            <div></div>
            <div className="flex flex-col  text-gray-800 text-start">
              <h1 className="font-bold">Punya proyek website ?</h1>
              <p className="text-xs">Konsultasikan kebutuhan anda sekarang!</p>
            </div>
          </div>
          <button className="px-5 py-3 flex items-center gap-1 rounded-lg shadow-lg text-white bg-cyan-500 w-fit  ">
            Konsultasi Gratis <Send />
          </button>
        </div>
      </div>
    </div>
  );
}

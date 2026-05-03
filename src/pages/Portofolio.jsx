import img1 from '../assets/projects/3.png'
import img2 from '../assets/projects/2.png'
import img3 from '../assets/projects/1.png'
import img4 from '../assets/projects/4.png'

export default function Portofolio() {

const projects =[
    {
        gambar: img1,
        judul:'Company profile',
        deskripsi:'PT.solusi bangunan'
    },
    {
        gambar: img2,
        judul:'Website UMKM',
        deskripsi:'PT.IlyasFood'
    },
    {
        gambar: img3,
        judul:'Portofolio',
        deskripsi:'ilyas samsudin'
    },
    {
        gambar: img4,
        judul:'landing page',
        deskripsi:'ilyas project'
    },
  
]





  return (
    <div id='portofolio' className=" scroll-mt-20 px-5 lg:px-20 bg-white py-20">
      <div className=" w-[100%] lg:w-[50%] mx-[auto] text-center">
        <h1 className=" text-cyan-500">PORTOFOLIO</h1>
        <h1 className="text-2xl font-semibold leading- mt-2">
          Beberapa Hasil Karya Saya
        </h1>
        <p className=" hidden  lg:block leading-6 mt-2 text-gray-800 text-xs lg:text-sm">
          Berikut adalah beberapa proyek website yang telah Saya selesaikan{" "}
          
          untuk berbagai klien dari berbagai industri
        </p>
      </div>
      <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-2">
        {projects.map((item)=> {
            return <div className='p-2 text-gray-800'>
                <img src={item.gambar} className='rounded-md shadow-lg' alt="" />
                <div className='p-2 mt-2 text-sm'>
                    <h1 className='font-bold'>{item.judul}</h1>
                    <p className='text-gray-500'>{item.deskripsi}</p>
                </div>
            </div>
        })}
      </div>
    </div>
  );
}

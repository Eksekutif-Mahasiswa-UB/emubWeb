import Heder from '../assets/Berita/heroimage.webp';
import HederName from '../assets/Berita/Berita.png';
import { useEffect, useState } from 'react';
import Skeleton from '../components/Skeleton';
import { getAllBerita } from '../api/services/berita';
import { Link } from "react-router-dom";
import axios from 'axios';


const Berita = () => {
  const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('https://superapart.me/api/lihatBerita');
          console.log(response.data)
          setData(response.data);
          setLoading(false);
        } catch (error) {
          console.log(error);
          setLoading(false);
        }
      };
      fetchData();

      console.log(data.gambar)

    }, []);

    const formatTanggal = (dateString) => {
        const bulanIndo = [
          "Januari", "Februari", "Maret", "April", "Mei", "Juni",
          "Juli", "Agustus", "September", "Oktober", "November", "Desember"
        ];
      
        const date = new Date(dateString);
        const tanggal = date.getDate();
        const bulan = bulanIndo[date.getMonth()];
        const tahun = date.getFullYear();
      
        return `${tanggal} ${bulan} ${tahun}`;
      };
    const skeleton =[
        1,2,3
    ]
  return (
    <div className='bg-primary-white font-helvetica-regular'>
      <header className='h-fit w-full text-primary-white relative font-helvetica-regular'>
        <img src={Heder} className='w-full aspect-auto' draggable="false" alt="hero" />
        <img src={HederName} draggable="false" className='absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-3/4 w-1/6' alt="text" />
        <h1 className='text-[3vw] font-semibold  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-4/4'>EM UB <span className='font-medium'>2024</span></h1>
      </header>
      <main className='container mx-auto lg:px-24 md:px-10 px-4 grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 grid-rows-1 gap-10 md:py-10 py-5 lg:py-20'>
      {loading ? (
        skeleton.map((item)=>(
           
          <div className='w-full text-primary-charcoalGray  aspect-[12/9] bg-white shadow-lg lg:shadow-2xl flex'>
          <div className='w-3/4 h-full p-3 font-medium relative rounded-lg overflow-hidden'>
            <div className='flex justify-between items-center'>
              <Skeleton></Skeleton>
   

            </div>
            <Skeleton className={'w-full text-base md:text-xl lg:text-2xl font-semibold line-clamp-2'}>
            </Skeleton>
            <Skeleton className={'line-clamp-5 lg:text-base text-xs'}></Skeleton>
           
            <Skeleton className={'absolute bottom-3 active:scale-95 duration-200 ease-in-out left-1/2 -translate-x-1/2 px-2 py-1 rounded  text-primary-white lg:text-base  text-xs'}></Skeleton>
      
          </div>
          <Skeleton className='w-1/4 h-full '>
          
          </Skeleton>

        </div>
        
        ))
        ) : data && data.length > 0 ? (
                    data.map((item)=>(
                      <div className='w-full text-primary-charcoalGray  aspect-[12/9] bg-white shadow-lg lg:shadow-2xl flex'>
                      <div className='w-3/4 h-full p-3 font-medium relative rounded-lg overflow-hidden'>
                        <div className='flex justify-between items-center'>
                          <small>{formatTanggal(item.created_at)}</small>
                          {/* <small className='bg-primary-tealBlue text-primary-white rounded-3xl px-2 py-1'>LUGRI</small> */}
            
                        </div>
                        <h1 className='w-full text-base md:text-xl lg:text-2xl font-semibold line-clamp-2'>
                        {item.judul}
                        </h1>
                        <article dangerouslySetInnerHTML={{__html: item.informasi}} className='line-clamp-5 prose-sm  lg:text-base text-xs'></article>
                        <Link to={`/berita/${item.idBerita}`}>
                        <button className='absolute bottom-3 active:scale-95 duration-200 ease-in-out left-1/2 -translate-x-1/2 bg-primary-charcoalGray px-2 py-1 rounded  text-primary-white lg:text-base  text-xs'>Baca Selengkapnya</button>
                        </Link>
                      </div>
                      <div className='w-1/4 h-full bg-black'>
                        <img src={`https://superapart.me/storage/app/public/${item.gambar[0].replace("/", "//")}`} alt="card-img" draggable="false" className='w-full h-full object-cover ' />
                      </div>
            
                    </div>
                    ))
                ) : (
                    <div>No Data Available</div>
                  )}
        
      
        

      </main>



    </div>
  )
}

export default Berita
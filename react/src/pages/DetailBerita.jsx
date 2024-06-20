import { Splide, SplideSlide } from "@splidejs/react-splide";
import React, { useEffect, useState } from "react";
import "../../src/styles/detailBerita.css";
import Card from "../components/detailBerita/Card";
import { Link, useParams } from "react-router-dom";
import { getAllBerita, getBeritaById} from "../api/services/berita";
import { formatTanggal } from "../utils/util";
import Skeleton from "../components/Skeleton";



const DetailBerita = () => {
    const [data,setData] =useState({});
    const [another,setAnother]=useState([])

    const [loading,setLoading] = useState(true)
    const {id}=useParams()

    useEffect(() => {
        window.scroll(0,0)
     const fetchData = async()=>{
        try {
            const response = await getBeritaById(id)
            const response1 = await getAllBerita()
            setData(response.data)
        
            setAnother(response1.data.filter(item => item.idBerita !== parseInt(id)).slice(0, 3))
            
            setLoading(false)
        } catch (error) {
            setLoading(false)
            console.log(id)
        }
    }
    fetchData()

    return(
        setLoading(true)
    )

}, [id])




    const dummy = [
        {
          title: 'Program Kegiatan Mahasiswa Berprestasi',
          img: 'https://source.unsplash.com/random/900×700/?student-achievement',
          date: '15 Mei 2024',
        },
        {
          title: 'Proker Universitas Terbaik 2024',
          img: 'https://source.unsplash.com/random/900×700/?university-award',
          date: '1 Juni 2024',
        },
        {
          title: 'Kompetisi Karya Ilmiah Tingkat Nasional',
          img: 'https://source.unsplash.com/random/900×700/?scientific-research',
          date: '10 Juli 2024',
        },
      ];

    return (
        <div className="bg-primary-white font-helvetica-regular bg-paper">
            <section className="lg:h-[75vh] h-[25vh] ">
                {
                    loading?(
                        <Skeleton className={'h-full w-full  '} />
                    ):(
                        <Splide
                            options={{
                                autoplay: true,
                                speed: 500,
                                interval: 2000,
                                rewind: true,
                                rewindSpeed: 500,
                            }}
                        >
                            {
                                data.gambar&&data.gambar.map((item,index)=>(
                            <SplideSlide key={index} className="lg:h-[75vh] h-[25vh] ">
                                <img
                                    src={item}
                                    alt={item}
                                    className="h-full w-full object-cover"
                                />
                            </SplideSlide>
        
                                ))
                            }
                        
                        </Splide>

                        )
                }
            </section>
            <section className="mx-auto container px-2 lg:px-10 pb-5 lg:pb-20 ">
                <div className="w-full bg-gradient-to-b px-0.5 pb-0.5 from-primary-charcoalGray rounded-b-lg to-primary-tealBlue">
                    <div className="bg-primary-white bg-paper w-full lg:px-5 px-2 pb-2 lg:pb-5 rounded-b-lg">
                        <div className="w-full bg-gradient-to-b px-0.5 pb-0.5 from-primary-charcoalGray rounded-b-lg to-primary-tealBlue">
                            <div className="bg-primary-white bg-paper w-full  rounded-b-lg px-2 lg:px-20">
                                 {
                                    loading?(
                                <div className="shadow-2xl w-full -mt-8 lg:-mt-10 relative z-30 p-4 lg:p-12 bg-primary-white border border-primary-charcoalGray border-opacity-15">
                                    <Skeleton className={'w-full h-20 mb-3'}/>
                                    <Skeleton className={'w-1/4 mx-auto h-5'}/>
                                    <Skeleton className={'w-full h-5 mt-2'}/>
                                    <Skeleton className={'w-full h-5 mt-2'}/>
                                 
                            
                                </div>

                                    ):(
                                <div className="shadow-2xl w-full -mt-8 lg:-mt-10 relative z-30 p-4 lg:p-12 bg-primary-white border border-primary-charcoalGray border-opacity-15">
                                    <h1 className="lg:text-5xl text-2xl font-helvetica-extraBold w-full lg:w-5/6 mx-auto text-center mt-3 text-primary-charcoalGray">
                                        {data.judul}
                                    </h1>
                                    <p className="w-fit mx-auto mt-3 text-primary-tealBlue text-xl">
                                    {data.created_at&&formatTanggal(data.created_at)}
                                    </p>
                                    <main className="flex flex-col lg:prose-lg  md:prose prose-sm gap-2 lg:gap-5 px-5 lg:px-36 text-xs lg:text-base  text-primary-charcoalGray py-10" >
                                     {data&&data.informasi&&data.informasi}
                                    </main>
                                </div>

                                    )
                                 }
                                <div className="py-5 lg:py-10 ">
                                    <h3 className="lg:text-2xl text-lg font-helvetica-extraBold text-primary-tealBlue">
                                        BERITA LAINNYA
                                    </h3>
                                    <div className="grid grid-cols-3 grid-rows-1 gap-1 lg:gap-10 mt-5">
                                        {
                                            loading?
                                            (
                                                <>
                                                <Skeleton className={'w-full aspect-video'}></Skeleton>
                                                <Skeleton className={'w-full aspect-video'}></Skeleton>
                                                <Skeleton className={'w-full aspect-video'}></Skeleton>
                                                </>
                                            ):(
                                                
                                                    another&&another.map((item,index)=>(
                                                        <Link key={index} to={`/berita/${item.idBerita}`}>
                                                        <Card img={item.gambar[0]} key={index} title={item.judul} time={data.created_at&&formatTanggal(data.created_at)} />
                                                        
                                                        </Link>
                                                    ))
                                                  

                                            )
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DetailBerita;

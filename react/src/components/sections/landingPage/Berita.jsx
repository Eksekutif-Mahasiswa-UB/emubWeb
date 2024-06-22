import { Icon } from "@iconify/react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import React, { useState, useEffect } from "react";
import Quotes from "../../../assets/LandingPage/quotes.png";
import { getAllBerita } from "../../../api/services/berita";
import Skeleton from "../../Skeleton";
import { Link } from "react-router-dom";
import axios from "axios";

const Berita = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    "https://superapart.me/api/lihatBerita"
                );
                console.log(response.data);
                setData(response.data);
                setLoading(false);
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    const formatTanggal = (dateString) => {
        const bulanIndo = [
            "Januari",
            "Februari",
            "Maret",
            "April",
            "Mei",
            "Juni",
            "Juli",
            "Agustus",
            "September",
            "Oktober",
            "November",
            "Desember",
        ];

        const date = new Date(dateString);
        const tanggal = date.getDate();
        const bulan = bulanIndo[date.getMonth()];
        const tahun = date.getFullYear();

        return `${tanggal} ${bulan} ${tahun}`;
    };
    const skeleton = [1, 2, 3];

    return (
        <section className=" px-4 lg:px-24 mt-10 lg:mt-20 font-helvetica-regular container mx-auto ">
            <div className="flex items-end gap-5">
                <div className="flex flex-col font-helvetica-extraBold w-fit whitespace-nowrap">
                    <h3 className="text-primary-charcoalGray text-2xl lg:text-5xl font-black ">
                        BERITA
                    </h3>
                    <h3 className="text-primary-tealBlue text-2xl lg:text-5xl font-black ">
                        EM UB 2024
                    </h3>
                </div>
                <div className="w-full h-0.5 lg:h-1 bg-gradient-to-r from-primary-skyBlue to-primary-tealBlue"></div>
            </div>
            <main className="lg:px-20 px-10  relative">
                <Splide
                    options={{
                        gap: 20,
                        perMove: 1,
                        autoplay: true,
                        speed: 500,
                        interval: 4000,
                        rewind: true,
                        rewindSpeed: 500,
                        pagination: false,
                        breakpoints: {
                            4000: {
                                perPage: 3,
                            },
                            768: {
                                perPage: 1,
                            },
                        },
                    }}
                >
                    {loading ? (
                        skeleton.map((item) => (
                            <SplideSlide className=" h-fit py-10">
                                <div className="aspect-[9/13] w-full group hover:shadow-xl duration-300 ease-in-out relative rounded border overflow-hidden">
                                    <Skeleton
                                        className={"w-full aspect-video"}
                                    ></Skeleton>
                                    <div className="w-full  py-1 px-2 ">
                                        <div className="flex py-2 items-start justify-between">
                                            <Skeleton
                                                className={"w-1/4 h-5"}
                                            ></Skeleton>
                                            <Skeleton
                                                className={"w-1/5 h-5"}
                                            ></Skeleton>
                                        </div>
                                        <Skeleton
                                            className={"w-full h-20"}
                                        ></Skeleton>
                                        <div className="px-3 lg:px-5 mt-5 flex flex-col gap-2 ">
                                            <Skeleton
                                                className={"w-full h-5 "}
                                            ></Skeleton>
                                            <Skeleton
                                                className={"w-full h-5 "}
                                            ></Skeleton>
                                        </div>
                                        <Skeleton
                                            className={
                                                "w-4/6 h-10 absolute left-1/2 bottom-3 lg:bottom-5 -translate-x-1/2  "
                                            }
                                        ></Skeleton>
                                    </div>
                                </div>
                            </SplideSlide>
                        ))
                    ) : data && data.length > 0 ? (
                        data.map((item) => (
                            <SplideSlide className=" h-fit py-10">
                                <div className="aspect-[9/13] w-full group hover:shadow-xl duration-300 ease-in-out relative rounded border overflow-hidden">
                                    <div className="w-full aspect-video overflow-hidden">
                                        {item.gambar &&
                                        item.gambar.length > 0 ? (
                                            <Splide
                                                options={{
                                                    arrows: false,
                                                    autoplay: true, 
                                                    interval: 3000, 
                                                    pauseOnHover: false, 
                                                    pauseOnFocus: false, 
                                                    resetProgress: false, 
                                                    loop:true,
                                                    rewind:true
                                                }}
                                            >
                                                {item.gambar.map(
                                                    (url, imgIndex) => (
                                                        <SplideSlide
                                                            key={imgIndex}
                                                        >
                                                            <img
                                                                src={`https://superapart.me/storage/app/public/${url.replace(
                                                                    "/",
                                                                    "//"
                                                                )}`}
                                                                className="w-full aspect-video object-cover group-hover:rotate-1 group-hover:scale-[101%]   duration-700 ease-in-out"
                                                                alt=""
                                                            />
                                                        </SplideSlide>
                                                    )
                                                )}
                                            </Splide>
                                        ) : (
                                            "No Images"
                                        )}
                                    </div>
                                    <div className="w-full  py-1 px-2 ">
                                        <div className="flex items-start justify-between">
                                            <small className="text-xs">
                                                {formatTanggal(item.created_at)}
                                            </small>
                                            {/* <div className="w-fit px-3 py-1.5 text-xs rounded-2xl bg-primary-tealBlue text-slate-100">LUGRI</div> */}
                                        </div>
                                        <div className="px-3 lg:px-5">
                                            <h1 className="lg:mt-3 mt-1 text-sm sm:text-lg lg:text-2xl font-bold h-fit lg:h-16 line-clamp-2">
                                                {item.judul}
                                            </h1>
                                            <p
                                                className="text-xs prose-2xl  h-fit mt-1 lg:mt-3 line-clamp-3 lg:line-clamp-4"
                                                dangerouslySetInnerHTML={{
                                                    __html: item.informasi,
                                                }}
                                            ></p>
                                        </div>
                                        <Link to={`/berita/${item.idBerita}`}>
                                            <button className="w-4/6 absolute left-1/2 bottom-3 lg:bottom-5 text-xs lg:text-base -translate-x-1/2 mx-auto rounded py-1 lg:py-2 bg-primary-charcoalGray text-slate-100 active:scale-95 duration-300 ease-in-out ">
                                                Baca Selengkapnya
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </SplideSlide>
                        ))
                    ) : (
                        <div>No Data Available</div>
                    )}
                </Splide>
            </main>
            <div className="flex items-center gap-5">
                <div className="w-4/6 h-0.5 lg:h-1 bg-gradient-to-r to-primary-skyBlue from-primary-tealBlue"></div>
                <img
                    src={Quotes}
                    alt="quotes"
                    className="h-7 lg:h-12 aspect-auto"
                />
            </div>
        </section>
    );
};

export default Berita;

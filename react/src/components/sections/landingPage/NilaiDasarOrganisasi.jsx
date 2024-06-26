import React from "react";
import Obyektif from "../../../assets/nilaiDasarOrganisasi/Obyektif.png";
import Rasional from "../../../assets/nilaiDasarOrganisasi/Rasional.png";
import Progres from "../../../assets/nilaiDasarOrganisasi/Progres.png";
import Dinamis from "../../../assets/nilaiDasarOrganisasi/Dinamis.png";
import Terbuka from "../../../assets/nilaiDasarOrganisasi/Terbuka.png";
import begron from "../../../assets/nilaiDasarOrganisasi/Value.png";
const NilaiDasarOrganisasi = () => {
    return (
        <section className="lg:mt-10 mt-5 px-4 lg:px-24 container mx-auto ">
            <div
                className="w-full mx-auto  p-4 lg:p-8 rounded-xl "
                style={{
                    backgroundImage: `url(${begron})`,
                }}
            >
                <h1 className="font-helvetica-extraBold text-xl lg:text-4xl text-transparent bg-clip-text bg-gradient-to-r  inline-block from-primary-charcoalGray to-primary-tealBlue mb-5 lg:mb-10 ">
                    Nilai Dasar Organisasi
                </h1>
                <div className="flex justify-center flex-wrap w-full  gap-2 lg:gap-7">
                    <div className="w-[45%] lg:w-1/4 rounded-xl shadow-2xl p-2 lg:p-4 relative group aspect-[16/15] overflow-hidden bg-primary-tealBlue">
                        <h3 className="text-base lg:text-4xl text-shadow text-white font-helvetica-regular font-bold group-hover:text-primary-tealBlue duration-500 z-20 relative ease-in-out  ">
                            Obyektif
                        </h3>
                        <img
                            src={Obyektif}
                            loading="lazy"
                            className="w-3/4 ms-auto aspect-square object-cover duration-300 ease-in-out z-20 relative"
                            alt="Obyektif"
                            draggable="false"
                        />
                        <div className="w-full h-0 flex flex-col justify-end absolute bottom-0 left-0 origin-bottom duration-500 ease-in-out group-hover:h-full bg-[#DCF7FB] z-10 group-hover:py-4 group px-4 "></div>
                    </div>

                    <div className="w-[45%] lg:w-1/4 rounded-xl shadow-2xl p-2 lg:p-4 relative group aspect-[16/15] overflow-hidden bg-[#2D9596]">
                        <h3 className="text-base lg:text-4xl text-shadow text-white font-helvetica-regular font-bold group-hover:text-primary-tealBlue duration-500 z-20 relative ease-in-out  ">
                            Rasional
                        </h3>
                        <img
                            src={Rasional}
                            loading="lazy"
                            className="w-3/4 ms-auto aspect-square object-cover duration-300 ease-in-out z-20 relative"
                            alt="Rasional"
                            draggable="false"
                        />
                        <div className="w-full h-0 flex flex-col justify-end absolute bottom-0 left-0 origin-bottom duration-500 ease-in-out group-hover:h-full bg-[#DCF7FB] z-10 group-hover:py-4 group px-4 "></div>
                    </div>

                    <div className="w-[45%] lg:w-1/4 rounded-xl shadow-2xl p-2 lg:p-4 relative group aspect-[16/15] overflow-hidden bg-[#628E90]">
                        <h3 className="text-base lg:text-4xl text-shadow text-white font-helvetica-regular font-bold group-hover:text-primary-tealBlue duration-500 z-20 relative ease-in-out  ">
                            Progres
                        </h3>
                        <img
                            src={Progres}
                            loading="lazy"
                            className="w-3/4 ms-auto aspect-square object-cover duration-300 ease-in-out z-20 relative"
                            alt="Progres"
                            draggable="false"
                        />
                        <div className="w-full h-0 flex flex-col justify-end absolute bottom-0 left-0 origin-bottom duration-500 ease-in-out group-hover:h-full bg-[#DCF7FB] z-10 group-hover:py-4 group px-4 "></div>
                    </div>

                    <div className="w-[45%] lg:w-1/4 rounded-xl shadow-2xl p-2 lg:p-4 relative group aspect-[16/15] overflow-hidden bg-[#007B8E]">
                        <h3 className="text-base lg:text-4xl text-shadow text-white font-helvetica-regular font-bold group-hover:text-primary-tealBlue duration-500 z-20 relative ease-in-out  ">
                            Dinamis
                        </h3>
                        <img
                            src={Dinamis}
                            loading="lazy"
                            className="w-3/4 ms-auto aspect-square object-cover duration-300 ease-in-out z-20 relative"
                            alt="Dinamis"
                            draggable="false"
                        />
                        <div className="w-full h-0 flex flex-col justify-end absolute bottom-0 left-0 origin-bottom duration-500 ease-in-out group-hover:h-full bg-[#DCF7FB] z-10 group-hover:py-4 group px-4 "></div>
                    </div>

                    <div className="w-[45%] lg:w-1/4 rounded-xl shadow-2xl p-2 lg:p-4 relative group aspect-[16/15] overflow-hidden bg-[#176B87]">
                        <h3 className="text-base lg:text-4xl text-shadow text-white font-helvetica-regular font-bold group-hover:text-primary-tealBlue duration-500 z-20 relative ease-in-out  ">
                            Terbuka
                        </h3>
                        <img
                            src={Terbuka}
                            loading="lazy"
                            className="w-3/4 ms-auto aspect-square object-cover duration-300 ease-in-out z-20 relative"
                            alt="Terbuka"
                            draggable="false"
                        />
                        <div className="w-full h-0 flex flex-col justify-end absolute bottom-0 left-0 origin-bottom duration-500 ease-in-out group-hover:h-full bg-[#DCF7FB] z-10 group-hover:py-4 group px-4 "></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NilaiDasarOrganisasi;

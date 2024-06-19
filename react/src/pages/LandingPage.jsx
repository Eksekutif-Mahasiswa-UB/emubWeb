import "@splidejs/react-splide/css/core";
import "@splidejs/react-splide/css";

import "../styles/landingPage.css";

import AboutImg from '../assets/aboutImage.webp'

import ProkerUnggulan from "../components/sections/landingPage/ProkerUnggulan";
import NilaiDasarOrganisasi from "../components/sections/landingPage/NilaiDasarOrganisasi";
import TautanPintas from "../components/sections/landingPage/TautanPintas";
import HeroSection from "../components/sections/landingPage/HeroSection";
import VisiMisi from "../components/sections/landingPage/VisiMisi";
import Berita from "../components/sections/landingPage/Berita";
import CeriteraKita from "../components/sections/landingPage/CeriteraKita";


const LandingPage = () => {
  
    return (
        <div className="scroll-smooth bg-primary-white " >
            <HeroSection />
            {/* <CeriteraKita/> */}
            <section className="w-full relative overflow-hidden  ">
                <img src={AboutImg} alt="img" className="w-full aspect-auto relative z-10" draggable='false' />
                <div className="w-full h-8 lg:h-16 bg-primary-white absolute -top-4 lg:-top-8 left-0 rounded-[100%] z-20 "></div>
            <div className="w-full h-8 lg:h-16 bg-primary-white absolute -bottom-4  lg:-bottom-8 left-0 rounded-[100%] z-20"></div>
            </section>
         
            <VisiMisi />
          

            <ProkerUnggulan />
            <NilaiDasarOrganisasi />
            <Berita/>
            <TautanPintas />
        </div>
    );
};

export default LandingPage;

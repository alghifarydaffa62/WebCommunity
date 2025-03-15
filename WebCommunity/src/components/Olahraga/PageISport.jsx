import '../../App.css'
import { Link } from 'react-router-dom'
import Navbar from '../navbar'
import Footer from "../footer"
import FadeContent from '../../AwesomeStyle/FadeContent/FadeContent'
import AnimatedContent from '../../AwesomeStyle/AnimatedContent/AnimatedContent'
import isp1 from '../../assets/Isport1.jpeg'
import isp2 from '../../assets/Isport2.jpeg'
import isp3 from '../../assets/Isport3.jpeg'
import isp4 from '../../assets/Isport4.jpeg'
import isport from '../../assets/i-sport.jpeg'
import { useEffect } from 'react'
import Dokumentasi from '../Dokumentasi'

const images = [isp1, isp2, isp3, isp4]

export default function Isport() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <div>
            <Navbar />

            <div>
                <div className='px-8 md:px-[10rem] mt-28'>
                    <Link to="/KomunitasOlahraga" className="font-poppins font-semibold underline text-blue-900">
                        Kembali ke halaman komunitas
                    </Link>
                </div>

                <div className="flex flex-col md:flex-row justify-center gap-4 lg:gap-16 items-center mt-9 px-6">
                    <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
                        <div>
                            <img src={isport} alt="Web Developer" className="w-[22rem] h-[22rem] object-contain rounded-4xl" />
                        </div>
                    </FadeContent>

                    <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
                        <div className="max-w-md text-center md:text-left">
                            <div className="mb-6 space-y-3">
                                <h1 className="text-4xl font-poppins text-[#174B86] font-bold">
                                    I-Sport
                                </h1>
                                <p className="text-justify text-gray-700">
                                    I-Sport adalah komunitas bagi mahasiswa yang memiliki minat dalam dunia e-sports. 
                                    Kami mewadahi pemain dan penggemar game kompetitif seperti Mobile Legends, Valorant, 
                                    dan berbagai game e-sports lainnya. Di sini, anggota dapat berlatih, bertanding, dan 
                                    networking dengan sesama pecinta e-sports.
                                </p>
                            </div>

                            <div className="space-y-3">
                                <h3 className="text-lg font-bold text-[#174B86]">Topik Pembahasan:</h3>
                                <div className="flex flex-wrap justify-center md:justify-start gap-3">
                                    {["E-Sport", "Valorant", "Mobile Legends"].map(topic => (
                                        <span key={topic} className="text-sm py-2 px-4 bg-[#1A57A7] rounded-full text-white">
                                            {topic}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </FadeContent>
                </div>

                <AnimatedContent
                    distance={50}
                    direction="vertical"
                    reverse={false}
                    config={{ tension: 80, friction: 20 }}
                    initialOpacity={0.2}
                    animateOpacity
                    scale={1}
                    threshold={0.2}
                >
                    <div className="flex justify-center mt-8 md:mt-10">
                        <Link to="https://www.google.com/url?q=https://chat.whatsapp.com/IrTPp1vGFecDQLr2YiOuz2&sa=D&source=editors&ust=1742045142759955&usg=AOvVaw3Y2ObFniLnMrVz8TJGPRHg" target='_blank' className="py-3 px-6 bg-emerald-500 rounded-full text-white font-semibold shadow-md hover:bg-emerald-600 transition">
                            Gabung dengan komunitas
                        </Link>
                    </div>
                </AnimatedContent>
            </div>

            <Dokumentasi dokum={images}/>
            <Footer />
        </div>
    )
}
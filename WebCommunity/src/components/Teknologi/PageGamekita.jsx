import '../../App.css'
import { Link } from 'react-router-dom'
import Navbar from '../navbar'
import Footer from "../footer"
import FadeContent from '../../AwesomeStyle/FadeContent/FadeContent'
import AnimatedContent from '../../AwesomeStyle/AnimatedContent/AnimatedContent'
import Gamekita from '../../assets/gamekita.jpg'
import gamekita1 from '../../assets/gamekita1.png'
import gamekita2 from '../../assets/gamekita2.jpg'
import gamekita3 from '../../assets/gamekita3.png'
import gamekita4 from '../../assets/gamekita4.jpg'
import { useEffect } from 'react'
import Dokumentasi from '../Dokumentasi'

const images = [gamekita1, gamekita2, gamekita3, gamekita4]

export default function GameKita() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return(
        <div>
            <Navbar/>
            
            <div>
                <div className='px-8 md:px-[10rem] mt-28'>
                    <Link to="/KomunitasTeknologi" className="font-poppins font-semibold underline text-blue-900">
                        Kembali ke halaman komunitas
                    </Link>
                </div>
                
                <div className="flex flex-col md:flex-row justify-center gap-4 lg:gap-16 items-center mt-9 px-6">
                    <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
                        <div>
                            <img src={Gamekita} alt="Web Developer" className="w-[22rem] h-[22rem] object-contain rounded-4xl" />
                        </div>
                    </FadeContent>

                    <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
                        <div className="max-w-md text-center md:text-left">
                            <div className="mb-6 space-y-3">
                                <h1 className="text-4xl font-poppins text-[#174B86] font-bold">
                                    GameKita
                                </h1>
                                <p className="text-justify text-gray-700">
                                GameKita adalah komunitas bagi para mahasiswa yang tertarik dengan 
                                dunia pengembangan game. Di sini, anggota dapat belajar, berbagi, dan 
                                berkolaborasi dalam menciptakan game, mulai dari konsep hingga 
                                implementasi. Komunitas ini juga menjadi wadah untuk mengeksplorasi 
                                teknologi, tren, dan inovasi terbaru dalam industri game development.
                                </p>
                            </div>

                            <div className="space-y-3">
                                <h3 className="text-lg font-bold text-[#174B86]">Topik Pembahasan:</h3>
                                <div className="flex flex-wrap justify-center md:justify-start gap-3">
                                    {["Pembuatan Game", "Pemrograman Game", "3d Design"].map(topic => (
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
                        <Link to="/" className="py-3 px-6 bg-emerald-500 rounded-full text-white font-semibold shadow-md hover:bg-emerald-600 transition">
                            Gabung dengan komunitas
                        </Link>
                    </div>
                </AnimatedContent>
            </div>
            
            <Dokumentasi dokum={images}/>
            <Footer/>
        </div>
    )
}
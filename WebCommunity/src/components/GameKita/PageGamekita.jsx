import '../../App.css'
import { Link } from 'react-router-dom'
import Navbar from '../navbar'
import Footer from "../footer"
import FadeContent from '../../AwesomeStyle/FadeContent/FadeContent'
import AnimatedContent from '../../AwesomeStyle/AnimatedContent/AnimatedContent'
import webdev from '../../assets/webdev.jpeg'
import WebdevDocum from '../Webdev/webdevDocum'

export default function GameKita() {
    return(
        <div>
            <Navbar/>
            
            <div>
                <div className='mx-[10rem] mt-14'>
                    <Link to="/KomunitasTeknologi" className="font-poppins font-semibold underline text-blue-900">
                        Kembali ke halaman komunitas
                    </Link>
                </div>
                
                <div className="flex justify-center gap-16 items-center mt-18">
                    <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
                        <div>
                            <img src={webdev} alt="Web Developer" className="w-[22rem] h-[22rem] object-contain" />
                        </div>
                    </FadeContent>

                    <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
                        <div className="max-w-md">
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
                                <div className="flex flex-wrap gap-3">
                                    <span className="text-sm py-2 px-4 bg-[#1A57A7] rounded-full text-white">
                                        Pembuatan Game
                                    </span>
                                    <span className="text-sm py-2 px-4 bg-[#1A57A7] rounded-full text-white">
                                        Pemrograman Game
                                    </span>
                                    <span className="text-sm py-2 px-4 bg-[#1A57A7] rounded-full text-white">
                                        3d Design
                                    </span>
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
                    <div className="flex justify-center">
                        <Link to="/" className="py-3 px-6 bg-emerald-500 rounded-full text-white font-semibold shadow-md hover:bg-emerald-600 transition">
                            Gabung dengan komunitas
                        </Link>
                    </div>
                </AnimatedContent>
            </div>
            
            <WebdevDocum/>
            <Footer/>
        </div>
    )
}
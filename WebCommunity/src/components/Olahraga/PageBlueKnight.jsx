import '../../App.css'
import { Link } from 'react-router-dom'
import Navbar from '../navbar'
import Footer from "../footer"
import FadeContent from '../../AwesomeStyle/FadeContent/FadeContent'
import AnimatedContent from '../../AwesomeStyle/AnimatedContent/AnimatedContent'
import BlueKnek from '../../assets/BlueKnight.jpeg'
import blue1 from '../../assets/bluknek1.jpg'
import blue2 from '../../assets/bluknek2.jpg'
import blue3 from '../../assets/bluknek3.jpg'
import { useEffect } from 'react'
import Dokumentasi from '../Dokumentasi'

const images = [blue1, blue2, blue3]

export default function BlueKnight() {
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

                <div className="flex flex-col md:flex-col lg:flex-row justify-center gap-4 lg:gap-16 items-center mt-9 px-6">
                    <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
                        <div>
                            <img src={BlueKnek} alt="Web Developer" className="w-[22rem] h-[22rem] object-contain" />
                        </div>
                    </FadeContent>

                    <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
                        <div className="max-w-md text-center md:text-left">
                            <div className="mb-6 space-y-3">
                                <h1 className="text-4xl font-poppins text-[#174B86] font-bold md:text-center">
                                    Blue Knight
                                </h1>
                                <p className="text-justify text-gray-700">
                                Blue Knight merupakan komunitas olahraga voli yang menjadi tempat bagi mahasiswa untuk mengasah keterampilan, 
                                meningkatkan teamwork, serta berpartisipasi dalam pertandingan seru-seru an dan kegiatan voli lainnya.
                                </p>
                            </div>

                            <div className="space-y-3">
                                <h3 className="text-lg font-bold text-[#174B86]">Topik Pembahasan:</h3>
                                <div className="flex flex-wrap justify-center md:justify-start gap-3">
                                    {["Permainan Bola Volly"].map(topic => (
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
                        <Link to="https://www.google.com/url?q=https://chat.whatsapp.com/LLPmTuH1Pl383ctggeB7dk&sa=D&source=editors&ust=1742044877501356&usg=AOvVaw3ZPIdhB0ShE-TbaHY-ByE_" target='_blank' className="py-3 px-6 bg-emerald-500 rounded-full text-white font-semibold shadow-md hover:bg-emerald-600 transition">
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
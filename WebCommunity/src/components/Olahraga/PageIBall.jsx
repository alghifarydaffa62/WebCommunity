import '../../App.css'
import { Link } from 'react-router-dom'
import Navbar from '../navbar'
import Footer from "../footer"
import FadeContent from '../../AwesomeStyle/FadeContent/FadeContent'
import AnimatedContent from '../../AwesomeStyle/AnimatedContent/AnimatedContent'
import ball1 from '../../assets/Iball1.jpg'
import ball2 from '../../assets/Iball2.jpeg'
import ball3 from '../../assets/Iball3.jpeg'
import { useEffect } from 'react'
import Dokumentasi from '../Dokumentasi'

const images =[ball1, ball2, ball3]

export default function IBall() {
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
                            <img src={ball2} alt="I-Ball" className="w-[22rem] h-[22rem] object-cover rounded-lg" />
                        </div>
                    </FadeContent>

                    <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
                        <div className="max-w-md text-center md:text-left">
                            <div className="mb-6 space-y-3">
                                <h1 className="text-4xl font-poppins text-[#174B86] font-bold md:text-center">
                                    I - Ball
                                </h1>
                                <p className="text-justify text-gray-700">
                                I - Ball merupakan komunitas olahraga Basket yang menjadi tempat bagi mahasiswa 
                                untuk mengasah keterampilan, meningkatkan teamwork, serta berpartisipasi dalam 
                                pertandingan seru-seru an dan kegiatan basket lainnya.
                                </p>
                            </div>

                            <div className="space-y-3">
                                <h3 className="text-lg font-bold text-[#174B86]">Topik Pembahasan:</h3>
                                <div className="flex flex-wrap justify-center md:justify-start gap-3">
                                    {["Permainan Bola Basket"].map(topic => (
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
                        <Link to="https://www.google.com/url?q=https://chat.whatsapp.com/K4gHoZhpPfF6lqpfbOtWPf&sa=D&source=editors&ust=1742044961512052&usg=AOvVaw2Ygq_R4Q84TaEg3TpbaUvJ" target='_blank' className="py-3 px-6 bg-emerald-500 rounded-full text-white font-semibold shadow-md hover:bg-emerald-600 transition">
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
import '../../App.css'
import { Link } from 'react-router-dom'
import Navbar from '../navbar'
import futsal from '../../assets/futsal.jpeg'
import Footer from '../footer'
import FadeContent from '../../AwesomeStyle/FadeContent/FadeContent'
import AnimatedContent from '../../AwesomeStyle/AnimatedContent/AnimatedContent'
import futsal1 from '../../assets/ORoverview.jpeg'
import futsal2 from '../../assets/ORoverview2.jpeg'
import futsal3 from '../../assets/ORoverview3.jpeg'
import { useEffect } from 'react'
import Dokumentasi from '../Dokumentasi'

const images = [futsal1, futsal2, futsal3]

export default function BlueIce() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
      
    return(
        <div>
            <Navbar/>

            <div>
                <div className='px-8 md:px-[10rem] mt-28'>
                    <Link to="/KomunitasOlahraga" className="font-poppins font-semibold underline text-blue-900">
                        Kembali ke halaman komunitas
                    </Link>
                </div>
                
                <div className="flex flex-col md:flex-col lg:flex-row justify-center gap-4 lg:gap-16 items-center mt-9 px-6">
                    <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
                        <div>
                            <img src={futsal} alt="Web Developer" className="w-[20rem] h-[20rem] object-contain rounded-4xl" />
                        </div>
                    </FadeContent>

                    <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
                        <div className="max-w-md text-center md:text-left">
                            <div className="mb-6 space-y-3">
                                <h1 className="text-4xl font-poppins text-[#174B86] font-bold md:text-center">
                                    Blue Ice
                                </h1>
                                <p className="text-justify text-gray-700">
                                Blue Ice merupakan komunitas olahraga futsal 
                                yang menjadi tempat bagi mahasiswa untuk mengasah 
                                keterampilan, meningkatkan teamwork, serta berpartisipasi 
                                dalam pertandingan seru-seru an dan kegiatan futsal lainnya.
                                </p>
                            </div>

                            <div className="space-y-3">
                                <h3 className="text-lg font-bold text-[#174B86]">Bidang Olahraga:</h3>
                                <div className="flex flex-wrap justify-center md:justify-start gap-3">
                                    <span className="text-sm py-2 px-4 bg-[#1A57A7] rounded-full text-white">
                                        Permainan Futsal
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
                    <div className="flex justify-center mt-8 md:mt-10">
                        <Link to="https://www.google.com/url?q=https://chat.whatsapp.com/CIbjP0ph9l533bneciGmUg&sa=D&source=editors&ust=1742045051905288&usg=AOvVaw2A8iwvIvy_SXxVf_qGzbwe" target='_blank' className="py-3 px-6 bg-emerald-500 rounded-full text-white font-semibold shadow-md hover:bg-emerald-600 transition">
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
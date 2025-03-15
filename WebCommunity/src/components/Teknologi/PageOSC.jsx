import "../../App.css"
import Navbar from "../navbar"
import { Link } from "react-router-dom"
import osc from '../../assets/OSC (1).jpg'
import Footer from "../footer"
import FadeContent from '../../AwesomeStyle/FadeContent/FadeContent'
import AnimatedContent from '../../AwesomeStyle/AnimatedContent/AnimatedContent'
import osc1 from '../../assets/osc1.jpg'
import osc2 from '../../assets/osc2.jpg'
import osc3 from '../../assets/osc3.jpg'
import osc4 from '../../assets/osc4.png'
import { useEffect } from "react"
import Dokumentasi from "../Dokumentasi"

const images = [osc1, osc2, osc3, osc4]

export default function OSC() {
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

                <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
                    <div className="flex flex-col md:flex-row justify-center gap-4 lg:gap-16 items-center mt-9 px-6">
                        <img src={osc} alt="Web Developer" className="w-[20rem] h-[20rem] object-contain" />
                
                        <div className="max-w-md text-center md:text-left">
                            <div className="mb-6 space-y-3">
                                <h1 className="text-4xl font-poppins text-[#174B86] font-bold">
                                    Open Source Community
                                </h1>
                                <p className="text-justify text-gray-700 max-w-md">
                                Wadah bagi mahasiswa yang tertarik dengan dunia open 
                                source dan keamanan siber. Di komunitas ini, kamu bisa 
                                berdiskusi, berbagi ilmu, dan mengeksplorasi berbagai 
                                aspek teknologi, termasuk cybersecurity dan CTF (Capture The Flag).
                                </p>
                            </div>
                
                            <div className="space-y-3">
                                <h3 className="text-lg font-bold text-[#174B86]">Topik Pembahasan:</h3>
                                <div className="flex flex-wrap justify-center md:justify-start gap-2">
                                    {["Cyber Security", "CTF", "Linux", "Computer Networking"].map(topic => (
                                            <span key={topic} className="text-sm py-2 px-4 bg-[#1A57A7] rounded-full text-white">
                                                {topic}
                                            </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </FadeContent>
                
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
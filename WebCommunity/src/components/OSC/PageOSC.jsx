import "../../App.css"
import Navbar from "../navbar"
import { Link } from "react-router-dom"
import osc from '../../assets/OSC (1).jpg'
import DocumOSC from "./DokumOSC"
import Footer from "../footer"
import FadeContent from '../../AwesomeStyle/FadeContent/FadeContent'
import AnimatedContent from '../../AwesomeStyle/AnimatedContent/AnimatedContent'

export default function OSC() {
    return(
        <div>
            <Navbar/>

            <div>
                <div className='mx-[10rem] mt-28'>
                    <Link to="/KomunitasTeknologi" className="font-poppins font-semibold underline text-blue-900">
                        Kembali ke halaman komunitas
                    </Link>
                </div>

                <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
                    <div className="flex justify-center gap-16 items-center mt-9">
                        <img src={osc} alt="Web Developer" className="w-[22rem] h-[22rem] object-contain" />
                
                        <div>
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
                                <div className="flex flex-wrap gap-3">
                                    <span className="text-sm py-2 px-4 bg-[#1A57A7] rounded-full text-white">
                                        Cyber Security
                                    </span>
                                    <span className="text-sm py-2 px-4 bg-[#1A57A7] rounded-full text-white">
                                        CTF
                                    </span>
                                    <span className="text-sm py-2 px-4 bg-[#1A57A7] rounded-full text-white">
                                        Linux
                                    </span>
                                    <span className="text-sm py-2 px-4 bg-[#1A57A7] rounded-full text-white">
                                        Open Source
                                    </span>
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
                    <div className="flex justify-center">
                        <Link to="/" className="py-3 px-6 bg-emerald-500 rounded-full text-white font-semibold shadow-md hover:bg-emerald-600 transition">
                            Gabung dengan komunitas
                        </Link>
                    </div>
                </AnimatedContent>
            </div>

            <DocumOSC/>
            <Footer/>
        </div>
    )
}
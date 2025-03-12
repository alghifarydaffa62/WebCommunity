import '../../App.css'
import Navbar from '../navbar'
import webdev from '../../assets/webdev.jpeg'
import { Link } from 'react-router-dom'
import WebdevDocum from './webdevDocum'
import Footer from '../footer'

export default function Webdev() {
    return(
        <div>
            <Navbar/>

            <div>
                <div className="flex justify-center gap-16 items-center mt-18">
                    <img src={webdev} alt="Web Developer" className="w-[22rem] h-[22rem] object-contain" />

                    <div className="max-w-md">
                        <div className="mb-6 space-y-3">
                            <h1 className="text-4xl font-poppins text-[#174B86] font-bold">
                                Web Developer
                            </h1>
                            <p className="text-justify text-gray-700">
                                Wadah pengembangan bagi mahasiswa yang tertarik dan ingin berkembang 
                                di dunia pengembangan web. Di sini, kamu bisa belajar, berbagi, dan 
                                berkolaborasi dalam menciptakan website yang fungsional dan menarik. 
                                Komunitas ini juga menjadi wadah untuk mengeksplorasi tren terbaru dan 
                                mengasah kreativitas.
                            </p>
                        </div>

                        <div className="space-y-3">
                            <h3 className="text-lg font-bold text-[#174B86]">Topik Pembahasan:</h3>
                            <div className="flex flex-wrap gap-3">
                                <span className="text-sm py-2 px-4 bg-[#1A57A7] rounded-full text-white">
                                    Pemrograman Website
                                </span>
                                <span className="text-sm py-2 px-4 bg-[#1A57A7] rounded-full text-white">
                                    Node JS
                                </span>
                                <span className="text-sm py-2 px-4 bg-[#1A57A7] rounded-full text-white">
                                    Tailwind CSS
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <Link to="/" className="py-3 px-6 bg-emerald-500 rounded-full text-white font-semibold shadow-md hover:bg-emerald-600 transition">
                        Gabung dengan komunitas
                    </Link>
                </div>
            </div>
            
            <WebdevDocum/>
            <Footer/>
        </div>
    )
}
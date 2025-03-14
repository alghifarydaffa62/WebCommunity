import '../App.css'
import Navbar from './navbar'
import { Link } from 'react-router-dom'

export default function Event() {
    return(
        <div>
            <Navbar/>

            <div className="flex flex-col items-center justify-center h-screen px-6">
                <h1 className="font-poppins font-semibold text-[#174B86] text-xl lg:text-2xl text-center max-w-xl">
                    Halaman ini akan segera hadir! Nantikan informasi terbaru mengenai event komunitas dan hal menarik lainnya di sini!!
                </h1>
                <button className='mt-4 py-3 px-5 bg-[#1A57A7] rounded-full font-poppins text-white font-semibold text-sm md:text-base'>
                    <Link to='/'>Kembali ke beranda</Link>
                </button>
            </div>
            
        </div>
    )
}
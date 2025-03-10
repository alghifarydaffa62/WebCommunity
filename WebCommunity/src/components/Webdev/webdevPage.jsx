import '../../App.css'
import Navbar from '../navbar'
import webdev from '../../assets/webdev.jpeg'
import { Link } from 'react-router-dom'

export default function Webdev() {
    return(
        <div>
            <Navbar/>

            <div className='flex justify-center gap-[4rem] items-center mt-8'>
                <img src={webdev} alt="" className='w-[25rem] h-[25rem]'/>
                <div>
                    <div className='mb-6'>
                        <h1 className='text-4xl font-poppins text-[#174B86] font-bold'>Web Developer</h1>
                        <p className='mt-2 text-light font-poppins text-justify max-w-md'>Wadah pengembangan bagi mahasiswa 
                            yang tertarik dan ingin berkembang di dunia pengembangan web. Di sini, kamu bisa belajar, 
                            berbagi, dan berkolaborasi dalam menciptakan website yang fungsional 
                            dan menarik. Komunitas ini juga menjadi wadah untuk mengeksplorasi 
                            tren terbaru dan mengasah kreativitas.</p>
                    </div>
                    <div>
                        <h3 className='text-lg font-bold font-poppins text-[#174B86]'>Topik Pembahasan:</h3>
                        <div className="flex gap-3 mt-2">
                            <p className='text-sm py-2 px-4 bg-[#1A57A7] rounded-full font-poppins text-white'>Pemrograman Website</p>
                            <p className='text-sm py-2 px-4 bg-[#1A57A7] rounded-full font-poppins text-white'>Node JS</p>
                            <p className='text-sm py-2 px-4 bg-[#1A57A7] rounded-full font-poppins text-white'>Tailwind CSS</p>
                        </div>
                    </div>
                    <button className='mt-8 py-3 px-5 bg-emerald-500 rounded-full font-poppins text-white font-semibold'>
                        <Link to='/'>Gabung dengan komunitas</Link>
                    </button>  
                </div>
            </div>
            
             
        </div>
    )
}
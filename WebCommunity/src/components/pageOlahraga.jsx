import '../App.css'
import { Link } from 'react-router-dom'
import Navbar from './navbar'
import tekno from '../assets/tekno.png'

export default function Olahraga() {
    return(
        <div>
            <Navbar/>
            <div className='flex justify-center items-center gap-[5rem] font-poppins h-[100vh]'>
                        <div>   
                            <h1 className='text-5xl font-poppins text-[#174B86] font-bold'>Komunitas Olahraga</h1>
                            <p className='max-w-md text-justify font-light text-sm mt-3'>Wadah bagi mahasiswa yang ingin mengeksplorasi dan 
                                berkembang di dunia teknologi. Di sini, kamu bisa 
                                bertemu dengan orang-orang yang memiliki minat yang sama, 
                                berbagi wawasan, serta berkolaborasi dalam berbagai kegiatan 
                                yang berkaitan dengan programming</p>

                            <button className='mt-4 py-3 px-5 align-middle bg-[#1A57A7] rounded-full font-poppins text-white text-semibold'>
                                <Link to='/'>Jelajahi Komunitas</Link>
                            </button>
                        </div>
                        <img src={tekno} alt="" className='w-[35vw] h-[65vh]'/>
                    </div>
                  
        </div>
    )
}
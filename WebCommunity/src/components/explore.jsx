import '../App.css'
import { Link } from 'react-router-dom'
import IT from '../assets/IT.png'
import sport from '../assets/sports.png'

export default function Explore() {
    return(
        <div className='font-poppins my-[3rem]'>
            <div>
                <h1 className='text-center  text-5xl text-[#174B86] font-bold'>JELAJAHI KOMUNITAS</h1>
                <p className='text-center mt-2'>Terdapat dua jenis komunitas, komunitas teknologi dan komunitas olahraga</p>
            </div>

            <div className="jenisKomunitas flex justify-center gap-8 mt-[3rem]">
                <div className="OR p-7 rounded-xl bg-[#003399] text-white">
                    <img src={sport} alt="" className='w-[45px] h-[45px] p-2 bg-[#02266F] rounded-md'/>
                    <h2 className='text-xl font-bold mt-2'>Komunitas Olahraga</h2>
                    <p className='font-light mt-1 mb-[2rem]'>Komunitas yang berfokus pada<br/>aktivitas fisik, bermain, serta<br/>berolahraga</p>
                    <Link to='/KomunitasOlahraga'>Lihat Selengkapnya</Link>
                </div>
                <div className="OR p-7 rounded-xl bg-[#003399] text-white">
                    <img src={IT} alt="" className='w-[45px] h-[45px] p-2 bg-[#02266F] rounded-md'/>
                    <h2 className='text-xl font-bold mt-2'>Komunitas Teknologi</h2>
                    <p className='font-light mt-1 mb-[2rem]'>Komunitas yang berfokus pada<br/>pembelajaran, pengembangan,<br/>dan inovasi teknologi</p>
                    <Link to='/KomunitasTeknologi'>Lihat Selengkapnya</Link>
                </div>
            </div>
        </div>
    )
}
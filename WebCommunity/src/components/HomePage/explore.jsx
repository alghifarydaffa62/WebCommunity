import '../../App.css'
import { Link } from 'react-router-dom'
import IT from '../../assets/IT.png'
import sport from '../../assets/sports.png'
import FadeContent from '../../AwesomeStyle/FadeContent/FadeContent'

export default function Explore() {
    return(
        <div className='font-poppins my-[3rem]'>
            <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
                <div>
                    <h1 className='text-center text-3xl md:text-4xl lg:text-5xl text-[#174B86] font-bold'>JELAJAHI KOMUNITAS</h1>
                    <p className='text-center mt-2 text-base lg:text-lg'>Terdapat dua jenis komunitas, komunitas teknologi dan komunitas olahraga</p>
                </div>
            </FadeContent>

            <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
                <div className="jenisKomunitas flex flex-col md:flex-col lg:flex-row justify-center gap-8 mt-[3rem] px-4 lg:px-0">
                    <div className="OR p-7 rounded-xl bg-[#003399] text-white text-center lg:text-left">
                        <img src={sport} alt="" className='w-[45px] h-[45px] p-2 bg-[#02266F] rounded-md mx-auto lg:mx-0'/>
                        <h2 className='text-xl font-bold mt-2'>Komunitas Olahraga</h2>
                        <p className='font-light mt-1 mb-[2rem] text-base lg:text-lg'>Komunitas yang berfokus pada<br/>aktivitas fisik, bermain, serta<br/>berolahraga</p>
                        <Link to='/KomunitasOlahraga' className='block lg:inline-block'>Lihat Selengkapnya</Link>
                    </div>
                    <div className="OR p-7 rounded-xl bg-[#003399] text-white text-center lg:text-left">
                        <img src={IT} alt="" className='w-[45px] h-[45px] p-2 bg-[#02266F] rounded-md mx-auto lg:mx-0'/>
                        <h2 className='text-xl font-bold mt-2'>Komunitas Teknologi</h2>
                        <p className='font-light mt-1 mb-[2rem] text-base lg:text-lg'>Komunitas yang berfokus pada<br/>pembelajaran, pengembangan,<br/>dan inovasi teknologi</p>
                        <Link to='/KomunitasTeknologi' className='block lg:inline-block'>Lihat Selengkapnya</Link>
                    </div>
                </div>
            </FadeContent>
            
        </div>
    )
}
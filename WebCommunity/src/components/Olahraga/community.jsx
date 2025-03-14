import '../../App.css'
import futsal from '../../assets/soccer-ball-variant.png'
import volley from '../../assets/volleyball-ball.png'
import shuttle from '../../assets/badminton.png'
import iball from '../../assets/ball-of-basketball.png'
import isport from '../../assets/multiplayer.png'
import { Link } from 'react-router-dom'
import Footer from '../footer'

export default function Community() {
    return(
        <div>
            <div className='flex flex-wrap justify-center items-center gap-6 md:gap-[3rem] font-poppins text-white my-10 px-6'>
                <div className='bg-[#174B86] p-5 h-auto md:h-[36vh] w-full md:w-[24vw] rounded-md flex flex-col gap-3 items-center md:items-start'>
                    <img src={futsal} alt="" className='w-[17vw] md:w-[4vw] h-[8vh] p-3 bg-[#182E66] rounded-md'/>
                    <h1 className='font-bold text-xl'>Blue Ice</h1>
                    <p className='font-light text-center md:text-left'>Komunitas yang berfokus pada<br/>olahraga futsal</p>
                    <Link to='/KomunitasOlahraga/BlueIce' className='font-semibold'>Lihat Selengkapnya</Link>
                </div>
                <div className='bg-[#174B86] p-5 h-auto md:h-[36vh] w-full md:w-[24vw] rounded-md flex flex-col gap-3 items-center md:items-start'>
                    <img src={volley} alt="" className='w-[17vw] md:w-[4vw] h-[8vh] p-3 bg-[#182E66] rounded-md' />
                    <h1 className='font-bold text-xl'>Blue Knight</h1>
                    <p className='font-light text-center md:text-left'>Komunitas yang berfokus pada<br/>olahraga volly</p>
                    <Link to='/KomunitasOlahraga/BlueKnight' className='font-semibold'>Lihat Selengkapnya</Link>
                </div>
                <div className='bg-[#174B86] p-5 h-auto md:h-[36vh] w-full md:w-[24vw] rounded-md flex flex-col gap-3 items-center md:items-start'>
                    <img src={shuttle} alt="" className='w-[17vw] md:w-[4vw] h-[8vh] p-3 bg-[#182E66] rounded-md'/>
                    <h1 className='font-bold text-lg'>Shuttle Blue</h1>
                    <p className='font-light text-center md:text-left'>Komunitas yang berfokus pada<br/>olahraga badminton</p>
                    <Link to='/KomunitasOlahraga/ShuttleBlue' className='font-semibold'>Lihat Selengkapnya</Link>
                </div>
                <div className='bg-[#174B86] p-5 h-auto md:h-[36vh] w-full md:w-[24vw] rounded-md flex flex-col gap-3 items-center md:items-start'>
                    <img src={iball} alt="" className='w-[17vw] md:w-[4vw] h-[8vh] p-3 bg-[#182E66] rounded-md'/>
                    <h1 className='font-bold text-lg'>I-Ball</h1>
                    <p className='font-light text-center md:text-left'>Komunitas yang membahas<br/>olahraga basket</p>
                    <Link to='/KomunitasOlahraga/I-Ball' className='font-semibold'>Lihat Selengkapnya</Link>
                </div>
                <div className='bg-[#174B86] p-5 h-auto md:h-[36vh] w-full md:w-[24vw] rounded-md flex flex-col gap-3 items-center md:items-start'>
                    <img src={isport} alt="" className='w-[17vw] md:w-[4vw] h-[8vh] p-3 bg-[#182E66] rounded-md'/>
                    <h1 className='font-bold text-lg'>I-Sport</h1>
                    <p className='font-light text-center md:text-left'>Komunitas yang membahas<br/>seputar cyber security dan CTF</p>
                    <Link to='/KomunitasOlahraga/I-Sport' className='font-semibold'>Lihat Selengkapnya</Link>
                </div>
            </div>
            <Footer/>
        </div>
        
    )
}
import '../../App.css'
import www from '../../assets/www.png'
import game from '../../assets/game.png'
import linux from '../../assets/linux.png'
import { Link } from 'react-router-dom'
import Footer from '../footer'

export default function Community() {
    return(
        <div>
            <div className='flex justify-center items-center gap-[3rem] font-poppins text-white my-20'>
                <div className='bg-[#174B86] p-5 h-[36vh] w-[24vw] rounded-md flex flex-col gap-3'>
                    <img src={game} alt="" className='w-[4vw] h-[8vh] p-3 bg-[#182E66] rounded-md'/>
                    <h1 className='font-bold text-xl'>GameKita</h1>
                    <p className='font-light'>Komunitas yang berfokus pada<br/>pembuatan sebuah game</p>
                    <Link to='/' className='font-semibold'>Lihat Selengkapnya</Link>
                </div>
                <div className='bg-[#174B86] p-5 h-[36vh] w-[24vw] rounded-md flex flex-col gap-3'>
                    <img src={www} alt="" className='w-[4vw] h-[8vh] p-3 bg-[#182E66] rounded-md' />
                    <h1 className='font-bold text-xl'>Web Developer</h1>
                    <p className='font-light'>Komunitas yang berfokus pada<br/>pembuatan sebuah website</p>
                    <Link to='/Webdev' className='font-semibold'>Lihat Selengkapnya</Link>
                </div>
                <div className='bg-[#174B86] p-5 h-[36vh] w-[24vw] rounded-md flex flex-col gap-3'>
                    <img src={linux} alt="" className='w-[4vw] h-[8vh] p-3 bg-[#182E66] rounded-md'/>
                    <h1 className='font-bold text-lg'>Open Source Community</h1>
                    <p className='font-light'>Komunitas yang membahas<br/>seputar cyber security dan CTF</p>
                    <Link to='/OSC' className='font-semibold'>Lihat Selengkapnya</Link>
                </div>
            </div>
            <Footer/>
        </div>
        
    )
}
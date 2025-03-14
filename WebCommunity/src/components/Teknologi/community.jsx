import '../../App.css'
import www from '../../assets/www.png'
import game from '../../assets/game.png'
import linux from '../../assets/linux.png'
import { Link } from 'react-router-dom'
import Footer from '../footer'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function Community() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    const location = useLocation();

      useEffect(() => {
          const hash = location.hash;
          if (hash) {
              const element = document.getElementById(hash.replace('#', ''));
              if (element) {
                element.scrollIntoView({ behavior: 'smooth'});

                setTimeout(() => {
                    window.scrollBy(150, 0); 
                }, 300);
              }
          }
      }, [location]);

    return(
        <div>
            <div className='flex flex-wrap md:flex-col lg:flex-row justify-center items-center gap-6 md:gap-[3rem] font-poppins text-white my-10 px-6'>
                <div id='Jelajahi' className='bg-[#174B86] p-5 h-auto md:h-[20vh] lg:h-[36vh] w-full md:w-[40vw] lg:w-[24vw] rounded-md flex flex-col gap-3 items-center md:items-start'>
                    <img src={game} alt="" className='w-[17vw] h-[8vh] lg:w-[4vw] lg:h-[10vh] md:w-[8vw] md:h-[5vh] p-3 bg-[#182E66] rounded-md'/>
                    <h1 className='font-bold text-xl'>GameKita</h1>
                    <p className='font-light text-center md:text-left'>Komunitas yang berfokus pada<br/>pembuatan sebuah game</p>
                    <Link to='/KomunitasTeknologi/GameKita' className='font-semibold'>Lihat Selengkapnya</Link>
                </div>
                <div className='bg-[#174B86] p-5 h-auto md:h-[20vh] lg:h-[36vh] w-full md:w-[40vw] lg:w-[24vw] rounded-md flex flex-col gap-3 items-center md:items-start'>
                    <img src={www} alt="" className='w-[17vw] h-[8vh] lg:w-[4vw] lg:h-[10vh] md:w-[8vw] md:h-[5vh] p-3 bg-[#182E66] rounded-md' />
                    <h1 className='font-bold text-xl'>Web Developer</h1>
                    <p className='font-light text-center md:text-left'>Komunitas yang berfokus pada<br/>pembuatan sebuah website</p>
                    <Link to='/KomunitasTeknologi/Webdev' className='font-semibold'>Lihat Selengkapnya</Link>
                </div>
                <div className='bg-[#174B86] p-5 h-auto md:h-[20vh] lg:h-[36vh] w-full md:w-[40vw] lg:w-[24vw] rounded-md flex flex-col gap-3 items-center md:items-start'>
                    <img src={linux} alt="" className='w-[15vw] h-[8vh] lg:w-[4vw] lg:h-[10vh] md:w-[8vw] md:h-[5vh] p-3 bg-[#182E66] rounded-md'/>
                    <h1 className='font-bold text-lg'>Open Source Community</h1>
                    <p className='font-light text-center md:text-left'>Komunitas yang membahas<br/>seputar cyber security dan CTF</p>
                    <Link to='/KomunitasTeknologi/OSC' className='font-semibold'>Lihat Selengkapnya</Link>
                </div>
            </div>
            <Footer/>
        </div>
        
    )
}
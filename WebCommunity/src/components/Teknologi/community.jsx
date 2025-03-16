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
            <div className='flex flex-wrap justify-center items-center gap-6 md:gap-12 font-poppins text-white my-10 px-6'>
                <div id='Jelajahi' className='bg-[#174B86] p-5 w-full max-w-md md:max-w-sm lg:max-w-xs rounded-md flex flex-col gap-3 items-center md:items-start'>
                    <img src={game} alt="GameKita" className='w-20 h-20 md:w-16 md:h-16 lg:w-12 lg:h-12 p-3 bg-[#182E66] rounded-md object-contain'/>
                    <h1 className='font-bold text-xl'>GameKita</h1>
                    <p className='font-light text-center md:text-left'>Komunitas yang berfokus pada<br/>pembuatan sebuah game</p>
                    <Link to='/KomunitasTeknologi/GameKita' className='font-semibold'>Lihat Selengkapnya</Link>
                </div>
                <div className='bg-[#174B86] p-5 w-full max-w-md md:max-w-sm lg:max-w-xs rounded-md flex flex-col gap-3 items-center md:items-start'>
                    <img src={www} alt="Web Developer" className='w-20 h-20 md:w-16 md:h-16 lg:w-12 lg:h-12 p-3 bg-[#182E66] rounded-md object-contain' />
                    <h1 className='font-bold text-xl'>Web Developer</h1>
                    <p className='font-light text-center md:text-left'>Komunitas yang berfokus pada<br/>pembuatan sebuah website</p>
                    <Link to='/KomunitasTeknologi/Webdev' className='font-semibold'>Lihat Selengkapnya</Link>
                </div>
                <div className='bg-[#174B86] p-5 w-full max-w-md md:max-w-sm lg:max-w-xs rounded-md flex flex-col gap-3 items-center md:items-start'>
                    <img src={linux} alt="Open Source Community" className='w-20 h-20 md:w-16 md:h-16 lg:w-12 lg:h-12 p-3 bg-[#182E66] rounded-md object-contain'/>
                    <h1 className='font-bold text-lg'>Open Source Community</h1>
                    <p className='font-light text-center md:text-left'>Komunitas yang membahas<br/>seputar cyber security dan CTF</p>
                    <Link to='/KomunitasTeknologi/OSC' className='font-semibold'>Lihat Selengkapnya</Link>
                </div>
            </div>
            <Footer/>
        </div>
        
    )
}
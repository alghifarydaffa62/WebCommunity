import '../../App.css'
import futsal from '../../assets/soccer-ball-variant.png'
import volley from '../../assets/volleyball-ball.png'
import shuttle from '../../assets/badminton.png'
import iball from '../../assets/ball-of-basketball.png'
import isport from '../../assets/multiplayer.png'
import { Link } from 'react-router-dom'
import Footer from '../footer'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function Community() {
    const location = useLocation();

      useEffect(() => {
          const hash = location.hash;
          if (hash) {
              const element = document.getElementById(hash.replace('#', ''))
              if (element) {
                element.scrollIntoView({ behavior: 'smooth'})

                setTimeout(() => {
                    window.scrollBy(180, 0);
                }, 300);
              }
          }
      }, [location])

    return(
        <div>
            <div id='Jelajahi' className='flex flex-wrap justify-center items-center gap-6 md:gap-12 font-poppins text-white my-10 px-6'>
                <div className='bg-[#174B86] p-5 w-full max-w-md md:max-w-sm lg:max-w-xs rounded-md flex flex-col gap-3 items-center md:items-start'>
                    <img src={futsal} alt=""  className='w-20 h-20 md:w-16 md:h-16 lg:w-12 lg:h-12 p-3 bg-[#182E66] rounded-md object-contain'/>
                    <h1 className='font-bold text-xl'>Blue Ice</h1>
                    <p className='font-light text-center md:text-left'>Komunitas yang berfokus pada olahraga futsal</p>
                    <Link to='/KomunitasOlahraga/BlueIce' className='font-semibold'>Lihat Selengkapnya</Link>
                </div>
                <div className='bg-[#174B86] p-5 w-full max-w-md md:max-w-sm lg:max-w-xs rounded-md flex flex-col gap-3 items-center md:items-start'>
                    <img src={volley} alt=""  className='w-20 h-20 md:w-16 md:h-16 lg:w-12 lg:h-12 p-3 bg-[#182E66] rounded-md object-contain' />
                    <h1 className='font-bold text-xl'>Blue Knight</h1>
                    <p className='font-light text-center md:text-left'>Komunitas yang berfokus pada olahraga volly</p>
                    <Link to='/KomunitasOlahraga/BlueKnight' className='font-semibold'>Lihat Selengkapnya</Link>
                </div>
                <div className='bg-[#174B86] p-5 w-full max-w-md md:max-w-sm lg:max-w-xs rounded-md flex flex-col gap-3 items-center md:items-start'>
                    <img src={shuttle} alt=""  className='w-20 h-20 md:w-16 md:h-16 lg:w-12 lg:h-12 p-3 bg-[#182E66] rounded-md object-contain'/>
                    <h1 className='font-bold text-lg'>Shuttle Blue</h1>
                    <p className='font-light text-center md:text-left'>Komunitas yang berfokus pada olahraga badminton</p>
                    <Link to='/KomunitasOlahraga/ShuttleBlue' className='font-semibold'>Lihat Selengkapnya</Link>
                </div>
                <div className='bg-[#174B86] p-5 w-full max-w-md md:max-w-sm lg:max-w-xs rounded-md flex flex-col gap-3 items-center md:items-start'>
                    <img src={iball} alt=""  className='w-20 h-20 md:w-16 md:h-16 lg:w-12 lg:h-12 p-3 bg-[#182E66] rounded-md object-contain'/>
                    <h1 className='font-bold text-lg'>I-Ball</h1>
                    <p className='font-light text-center md:text-left'>Komunitas yang membahas olahraga basket</p>
                    <Link to='/KomunitasOlahraga/I-Ball' className='font-semibold'>Lihat Selengkapnya</Link>
                </div>
                <div className='bg-[#174B86] p-5 w-full max-w-md md:max-w-sm lg:max-w-xs rounded-md flex flex-col gap-3 items-center md:items-start'>
                    <img src={isport} alt="" className='w-20 h-20 md:w-16 md:h-16 lg:w-12 lg:h-12 p-3 bg-[#182E66] rounded-md object-contain'/>
                    <h1 className='font-bold text-lg'>I-Sport</h1>
                    <p className='font-light text-center md:text-left'>Komunitas yang berfokus pada permainan E-sport</p>
                    <Link to='/KomunitasOlahraga/I-Sport' className='font-semibold'>Lihat Selengkapnya</Link>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
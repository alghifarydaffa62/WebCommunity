import '../App.css'
import Navbar from './navbar'
import { Link } from 'react-router-dom'
import OR from '../assets/OR.png'
import AnimatedContent from '../AwesomeStyle/AnimatedContent/AnimatedContent'
import Carousel from './Olahraga/carousel'
import Community from './Olahraga/ORcommunity'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Teknologi() {
    useEffect(() => {
            window.scrollTo(0, 0);
    }, [])

    const navigate = useNavigate()

    const handleScroll = () => {
        navigate('/KomunitasOlahraga/#Jelajahi') 
    }
    return (
        <div>
            <Navbar/>

            <AnimatedContent
                    distance={50}
                    direction="vertical"
                    reverse={false}
                    config={{ tension: 80, friction: 20 }}
                    initialOpacity={0.2}
                    animateOpacity
                    scale={0.8} 
                    threshold={0.2}
                    >
                    <div className='flex flex-col-reverse lg:flex-row justify-center items-center gap-[3rem] lg:gap-[6rem] font-poppins h-auto lg:h-[100vh] p-6 mt-12 md:mt-18 lg:mt-9'>
                        <div className='text-center lg:text-left'>   
                            <h1 className='text-3xl md:text-5xl font-poppins text-[#174B86] font-bold'>Komunitas Olahraga</h1>
                            <p className='max-w-md md:min-w-lg font-light text-sm mt-3 text-center lg:text-left'>Wadah bagi 
                                mahasiswa yang ingin mengeksplorasi dan berkembang 
                                di dunia olahraga. Di sini, kamu bisa bertemu dengan 
                                orang-orang yang memiliki minat yang sama, berlatih bersama, 
                                serta berpartisipasi dalam berbagai kegiatan dan kompetisi 
                                olahraga untuk meningkatkan keterampilan dan sportivitas.</p>

                            <button onClick={handleScroll} className='cursor-pointer mt-4 py-3 px-5 bg-[#1A57A7] rounded-full font-poppins text-white font-semibold text-sm md:text-base transition duration-300 ease-in-out hover:translate-y-[-4px] hover:shadow-lg'>
                                Jelajahi Komunitas
                            </button>
                        </div>
                        <img src={OR} alt="" className='w-3/4 md:w-1/2 lg:w-[35vw] max-w-[300px] md:max-w-[400px] lg:max-w-none h-auto'/>
                    </div>
            </AnimatedContent>
            
            <Carousel/>
            <Community/>
            
        </div>
    )   
}
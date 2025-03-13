import '../App.css'
import Navbar from './navbar'
import { Link } from 'react-router-dom'
import tekno from '../assets/tekno.png'
import AnimatedContent from '../AwesomeStyle/AnimatedContent/AnimatedContent'
import Carousel from './Teknologi/carousel'
import Community from './Teknologi/community'

export default function Teknologi() {
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
                    <div className='flex flex-col-reverse lg:flex-row justify-center items-center gap-[3rem] lg:gap-[6rem] font-poppins h-auto lg:h-[100vh] p-6 mt-8'>
                        <div className='text-center lg:text-left'>   
                            <h1 className='text-3xl md:text-5xl font-poppins text-[#174B86] font-bold'>Komunitas Teknologi</h1>
                            <p className='max-w-md text-justify font-light text-sm mt-3'>Wadah bagi mahasiswa yang ingin mengeksplorasi dan 
                                berkembang di dunia teknologi. Di sini, kamu bisa 
                                bertemu dengan orang-orang yang memiliki minat yang sama, 
                                berbagi wawasan, serta berkolaborasi dalam berbagai kegiatan 
                                yang berkaitan dengan programming</p>

                            <button className='mt-4 py-3 px-5 align-middle bg-[#1A57A7] rounded-full font-poppins text-white text-semibold'>
                                <Link to='/'>Jelajahi Komunitas</Link>
                            </button>
                        </div>
                        <img src={tekno} alt="" className='w-1/2 md:w-[35vw] h-auto md:h-[65vh]'/>
                    </div>
            </AnimatedContent>
            
            <Carousel/>
            <Community/>
            
        </div>
    )   
}
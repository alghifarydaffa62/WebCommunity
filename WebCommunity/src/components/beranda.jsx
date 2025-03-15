import '../App.css'
import Navbar from './navbar'
import Manfaat from './HomePage/benefit'
import Overview from './HomePage/overview'
import Explore from './HomePage/explore'
import Footer from './footer'
import AnimatedContent from '../AwesomeStyle/AnimatedContent/AnimatedContent'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

export default function Beranda() {
    useEffect(() => {
            window.scrollTo(0, 0);
    }, [])

    const navigate = useNavigate()

    const handleScroll = () => {
        navigate('/#Jelajahi') 
    }

    return (
        <div>
            <Navbar/>
            <div className='h-screen md:h-[60vh] lg:h-screen flex flex-col justify-center items-center text-center px-6 md:px-12 lg:px-20'>
                <AnimatedContent
                    distance={50}
                    direction="vertical"
                    reverse={false}
                    config={{ tension: 80, friction: 20 }}
                    initialOpacity={0.2}
                    animateOpacity
                    scale={1}
                    threshold={0.2}
                    >
                    <div>
                        <h1 className='text-4xl md:text-5xl lg:text-6xl font-poppins text-[#174B86] font-bold leading-tight md:leading-[1.3] lg:leading-[1.2]'>
                        Wadah Pengembangan,<br/>Kolaborasi, dan Inovasi HIMIT</h1>
                    </div>
                </AnimatedContent>

                <AnimatedContent
                    distance={50}
                    direction="vertical"
                    reverse={false}
                    config={{ tension: 80, friction: 20 }}
                    initialOpacity={0.2}
                    animateOpacity
                    scale={1}
                    threshold={0.2}
                    >
                    <div>
                        <p className='font-poppins font-light text-center text-base md:text-lg lg:text-xl mt-6 max-w-md md:max-w-3xl'>
                            HIMIT menghadirkan berbagai komunitas untuk mendukung pengembangan keterampilan, 
                            inovasi, dan kolaborasi mahasiswa Teknik Informatika dan Sains Data. Temukan komunitas yang 
                            sesuai dengan minatmu dan jadilah bagian dari perubahan!</p>
                        <button onClick={handleScroll} className='mt-4 py-3 px-5 bg-[#1A57A7] rounded-full font-poppins text-white font-semibold text-sm md:text-lg lg:text-xl transition duration-300 ease-in-out hover:translate-y-[-4px] hover:shadow-lg'>
                            Jelajahi Komunitas
                        </button>
                    </div>
                </AnimatedContent>
            </div>
            
            <Manfaat/>
            <Overview/>
            <Explore/>
            <Footer/>
        </div>
    )
}
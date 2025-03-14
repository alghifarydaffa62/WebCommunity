import '../App.css'
import Navbar from './navbar'
import { Link } from 'react-router-dom'
import Manfaat from './HomePage/benefit'
import Overview from './HomePage/overview'
import Explore from './HomePage/explore'
import Footer from './footer'
import AnimatedContent from '../AwesomeStyle/AnimatedContent/AnimatedContent'

export default function Beranda() {
    return (
        <div>
            <Navbar/>
            <div className='h-screen flex flex-col justify-center items-center text-center px-4 md:px-8'>
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
                        <h1 className='text-4xl md:text-6xl font-poppins text-[#174B86] font-bold leading-tight md:leading-16'>
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
                        <p className='font-poppins font-light text-center text-base md:text-lg mt-6 max-w-lg md:max-w-2xl'>
                            HIMIT menghadirkan berbagai komunitas untuk mendukung pengembangan keterampilan, 
                            inovasi, dan kolaborasi mahasiswa Teknik Informatika. Temukan komunitas yang 
                            sesuai dengan minatmu dan jadilah bagian dari perubahan!</p>
                        <button className='mt-4 py-3 px-5 bg-[#1A57A7] rounded-full font-poppins text-white font-semibold text-sm md:text-base transition duration-300 ease-in-out hover:translate-y-[-4px] hover:shadow-lg'>
                            <Link to='/'>Jelajahi Komunitas</Link>
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
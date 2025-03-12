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
            <div className='h-[90vh] flex flex-col justify-center items-center text-center'>
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
                        <h1 className='text-6xl font-poppins text-[#174B86] font-bold leading-16'>
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
                        <p className='font-poppins font-light text-center text-lg mt-6'>
                            HIMIT menghadirkan berbagai komunitas untuk mendukung pengembangan<br/>keterampilan, 
                            inovasi, dan kolaborasi mahasiswa Teknik Informatika. Temukan<br/>komunitas yang 
                            sesuai dengan minatmu dan jadilah bagian dari perubahan!</p>
                        <button className='mt-4 py-3 px-5 align-middle bg-[#1A57A7] rounded-full font-poppins text-white text-semibold'>
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
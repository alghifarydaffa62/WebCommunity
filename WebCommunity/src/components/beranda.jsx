import '../App.css'
import Navbar from './navbar'
import AnimatedContent from '../AwesomeStyle/AnimatedContent/AnimatedContent'
import { Link } from 'react-router-dom'
import Manfaat from './benefit'
import Overview from './overview'
import Explore from './explore'

export default function Beranda() {
    return (
        <div>
            <Navbar/>
            <div className='my-[6rem] text-center'>
                <AnimatedContent
                    distance={50}
                    direction="vertical"
                    reverse={false}
                    config={{ tension: 80, friction: 20 }}
                    initialOpacity={0.2}
                    animateOpacity
                    scale={1.1}
                    threshold={0.2}
                    >
                    <div>
                        <h1 className='text-5xl font-poppins text-[#174B86] font-bold leading-16'>
                            Wadah Pengembangan, Kolaborasi,<br/>dan Inovasi HIMIT</h1>
                    </div>
                </AnimatedContent>
                
                <AnimatedContent
                    distance={50}
                    direction="vertical"
                    reverse={false}
                    config={{ tension: 80, friction: 20 }}
                    initialOpacity={0.2}
                    animateOpacity
                    scale={1.1}
                    threshold={0.2}
                    >
                    <div>
                        <p className='font-poppins font-light text-center text-lg mt-6'>
                            HIMIT menghadirkan berbagai komunitas untuk mendukung pengembangan<br/>keterampilan, 
                            inovasi, dan kolaborasi mahasiswa Teknik Informatika. Temukan<br/>komunitas yang 
                            sesuai dengan minatmu dan jadilah bagian dari perubahan!</p>
                    </div>
                </AnimatedContent>

                <AnimatedContent
                    distance={50}
                    direction="vertical"
                    reverse={false}
                    config={{ tension: 80, friction: 20 }}
                    initialOpacity={0.2}
                    animateOpacity
                    scale={1.1}
                    threshold={0.2}
                    >
                    <div>
                        <button className='mt-4 py-3 px-5 align-middle bg-[#1A57A7] rounded-full font-poppins text-white text-semibold'>
                            <Link to='/'>Jelajahi Komunitas</Link>
                        </button>
                    </div>
                </AnimatedContent>
            </div>
            <Manfaat/>
            <Overview/>
            <Explore/>
        </div>
    )
}
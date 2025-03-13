import '../../App.css'
import gamekita1 from '../../assets/gamekita1.png'
import gamekita2 from '../../assets/gamekita2.jpg'
import gamekita3 from '../../assets/gamekita3.png'
import gamekita4 from '../../assets/gamekita4.jpg'
import FadeContent from '../../AwesomeStyle/FadeContent/FadeContent'

export default function DocumGame() {
    return(
        <div className='bg-[#172036] py-12 font-poppins mt-18'>
            <h1 className='text-3xl font-bold text-white text-center mb-6'>Dokumentasi Kegiatan</h1>
            <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
                <div className='grid grid-cols-2 gap-6 place-items-center mx-40 '>
                    <img src={gamekita1} alt="" className='w-[30rem] h-[20rem] object-cover rounded-lg'/>
                    <img src={gamekita2} alt="" className='w-[30rem] h-[20rem] object-cover rounded-lg'/>
                    <img src={gamekita3} alt="" className='w-[30rem] h-[20rem] object-cover rounded-lg'/>
                    <img src={gamekita4} alt="" className='w-[30rem] h-[20rem] object-cover rounded-lg'/>
                    
                </div>
            </FadeContent>
        </div>
    )
}

import '../../App.css'
import Stack from '../../AwesomeStyle/Stack/Stack'

import teknostack from '../../assets/teknoOverview2.jpg'
import ORoverview from '../../assets/ORoverview.jpeg'
import FadeContent from '../../AwesomeStyle/FadeContent/FadeContent'

export default function Overview() {

    return(
        <div className='bg-[#182E66] py-[5rem] font-poppins'>
            <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
                <div className='flex flex-col md:flex-col lg:flex-row justify-center items-center gap-[3rem] text-center md:text-center lg:text-left'>
                    <img src={teknostack} alt="" className='w-[60vw] h-[30vh] md:w-[60vw] md:h-[40vh] lg:w-[45vw] lg:h-[70vh] object-cover rounded-lg'/>
                    <div>
                        <h2 className='text-xl md:text-3xl lg:text-4xl font-bold text-white max-w-lg'>BERGABUNG & KEMBANGKAN POTENSIMU DI KOMUNITAS!</h2>
                        <p className='text-white font-light mt-2 text-sm lg:text-lg'>Tempat terbaik untuk mengasah keterampilan,<br/>membangun 
                            relasi, dan berkembang bersama.</p>
                    </div>
                </div>
            </FadeContent>

            <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
                <div className='flex flex-col-reverse md:flex-col-reverse lg:flex-row justify-center items-center gap-[3rem] text-center md:text-center lg:text-right mt-[6rem]'>
                    <div>
                        <h2 className='text-xl md:text-3xl lg:text-4xl font-bold text-white max-w-lg'>BERINOVASI DI TEKNOLOGI, BERPRESTASI DI LAPANGAN</h2>
                        <p className='text-white font-light mt-2 text-sm lg:text-lg'>Tempat terbaik untuk mengasah keterampilan,<br/>membangun 
                            relasi, dan berkembang bersama.</p>
                    </div>
                    <img src={ORoverview} alt="" className='w-[60vw] h-[30vh] md:w-[60vw] md:h-[40vh] lg:w-[45vw] lg:h-[70vh] object-cover rounded-lg'/>
                </div>
            </FadeContent>
        </div>
    )
}
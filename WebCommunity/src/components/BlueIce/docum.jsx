import '../../App.css'
import futsal from '../../assets/ORoverview.jpeg'
import futsal2 from '../../assets/ORoverview2.jpeg'
import futsal3 from '../../assets/ORoverview3.jpeg'
import FadeContent from '../../AwesomeStyle/FadeContent/FadeContent'

export default function DocumFutsal() {
    return(
        <div className='bg-[#172036] py-12 font-poppins mt-18'>
            <h1 className='text-3xl font-bold text-white text-center mb-6'>Dokumentasi Kegiatan</h1>
            <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
                <div className='grid grid-cols-2 gap-6 place-items-center mx-40 '>
                    <img src={futsal} alt="" className='w-[30rem] h-[20rem] object-cover rounded-lg'/>
                    <img src={futsal2} alt="" className='w-[30rem] h-[20rem]  object-cover rounded-lg'/>
                    <img src={futsal3} alt="" className='w-[30rem] h-[20rem] object-cover rounded-lg'/>
                </div>
            </FadeContent>
        </div>
    )
}
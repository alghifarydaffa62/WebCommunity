import '../../App.css'
import webdev1 from '../../assets/webdev1.jpeg'
import webdev2 from '../../assets/webdev2.jpeg'
import webdev3 from '../../assets/webdev3.jpeg'
import webdev4 from '../../assets/webdev4.jpeg'
import FadeContent from '../../AwesomeStyle/FadeContent/FadeContent'

export default function WebdevDocum() {
    return(
        <div className='bg-[#172036] py-12 font-poppins mt-18'>
            <h1 className='text-3xl font-bold text-white text-center mb-6'>Dokumentasi Kegiatan</h1>
            <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
                <div className='grid grid-cols-2 gap-6 place-items-center mx-40 '>
                    <img src={webdev1} alt="" className='w-[30rem] h-[20rem] object-cover rounded-lg'/>
                    <img src={webdev2} alt="" className='w-[30rem] h-[20rem]  object-cover rounded-lg'/>
                    <img src={webdev3} alt="" className='w-[30rem] h-[20rem] object-cover rounded-lg'/>
                    <img src={webdev4} alt="" className='w-[30rem] h-[20rem] object-cover rounded-lg'/> 
                </div>
            </FadeContent>
        </div>
    )
}
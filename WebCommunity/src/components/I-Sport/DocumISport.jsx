import '../../App.css'
import isp1 from '../../assets/Isport1.jpeg'
import isp2 from '../../assets/Isport2.jpeg'
import isp3 from '../../assets/Isport3.jpeg'
import isp4 from '../../assets/Isport4.jpeg'
import FadeContent from '../../AwesomeStyle/FadeContent/FadeContent'

export default function DocumIsport() {
    return(
        <div className='bg-[#172036] py-12 font-poppins mt-18'>
            <h1 className='text-3xl font-bold text-white text-center mb-6'>Dokumentasi Kegiatan</h1>
            <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 place-items-center px-8 md:mx-40'>
                    {[isp1, isp2, isp3, isp4].map((imgSrc, index) => (
                        <img key={index} src={imgSrc} alt={`Dokumentasi ${index + 1}`} 
                            className='w-full md:w-[30rem] h-[20rem] object-cover rounded-lg'/>
                    ))}
                </div>
            </FadeContent>
        </div>
    )
}

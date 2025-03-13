import '../../App.css'
import osc1 from '../../assets/osc1.jpg'
import osc2 from '../../assets/osc2.jpg'
import osc3 from '../../assets/osc3.jpg'
import osc4 from '../../assets/osc4.png'
import FadeContent from '../../AwesomeStyle/FadeContent/FadeContent'

export default function DocumOSC() {
    return(
        <div className='bg-[#172036] py-12 font-poppins mt-16'>
            <h1 className='text-3xl font-bold text-white text-center mb-6'>Dokumentasi Kegiatan</h1>
            <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 place-items-center px-8 md:mx-40'>
                    {[osc1, osc2, osc3, osc4].map((imgSrc, index) => (
                        <img key={index} src={imgSrc} alt={`Dokumentasi ${index + 1}`} 
                            className='w-full md:w-[30rem] h-[20rem] object-cover rounded-lg'/>
                    ))}
                </div>
            </FadeContent>
        </div>
    )
}
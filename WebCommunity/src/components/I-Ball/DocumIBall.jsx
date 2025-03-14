import '../../App.css'
import ball1 from '../../assets/Iball1.jpg'
import ball2 from '../../assets/Iball2.jpeg'
import ball3 from '../../assets/Iball3.jpeg'
import FadeContent from '../../AwesomeStyle/FadeContent/FadeContent'

export default function DocumIBall() {
    return(
        <div className='bg-[#172036] py-12 font-poppins mt-18'>
            <h1 className='text-xl md:text-3xl font-bold text-white text-center mb-6'>Dokumentasi Kegiatan</h1>
            <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 place-items-center px-8 md:mx-40 xl:mx-52'>
                    {[ball1, ball2, ball3 ].map((imgSrc, index) => (
                        <img key={index} src={imgSrc} alt={`Dokumentasi ${index + 1}`} 
                            className='w-full md:w-[30rem] h-[20rem] object-cover rounded-lg'/>
                    ))}
                </div>
            </FadeContent>
        </div>
    )
}

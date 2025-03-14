import '../../App.css'
import dukungan from '../../assets/motivation (1).png'
import ilmu from '../../assets/book.png'
import relasi from '../../assets/public-relation.png'
import pikiran from '../../assets/mindfulness.png'
import FadeContent from '../../AwesomeStyle/FadeContent/FadeContent'

export default function Manfaat() {
    return(
        <div className='flex flex-col md:flex-row justify-evenly items-center font-poppins mb-[8rem] px-4 md:px-8'>
            <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
                <div className='max-w-sm text-center md:text-left'>
                    <h2 className='text-3xl md:text-4xl font-semibold text-[#174B86]'>Beberapa manfaat yang akan kamu dapatkan</h2>
                    <p className='text-sm md:text-base text-justify font-light mx-3 my-4 md:mx-0 max-w-xs'>Dengan bergabung di komunitas, kamu akan mendapatkan banyak manfaat. Komunitas yang ada akan membantu dirimu berkembang lebih baik.</p>
                </div>
            </FadeContent>

            <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-6 items-center w-full md:w-auto'>
                        <div className="motivasi p-6 bg-[#174B86] text-white rounded-xl">
                            <img src={dukungan} alt="" className='w-12 h-12 p-2 bg-[#D0DFFE] rounded-md'/>
                            <h4 className='text-lg md:text-xl font-bold mt-1'>Dukungan & Motivasi</h4>
                            <p className='text-justify text-sm font-light mt-2 max-w-[16rem]'>Dalam komunitas, kamu tidak hanya belajar, tetapi juga 
                                mendapatkan motivasi dari sesama anggota serta
                                lingkungan yang suportif.</p>
                        </div>  
                        <div className="wawasan p-6">   
                            <img src={ilmu} alt="" className='w-12 h-12 p-2 bg-[#D0DFFE] rounded-md'/>
                            <h4 className='text-lg md:text-xl font-bold text-[#174B86] mt-1'>Menambah Wawasan</h4>
                            <p className='text-justify text-sm font-light mt-2 max-w-[16rem]'>Dengan bergabung di komunitas, kamu akan terpapar 
                                berbagai ilmu baru, baik dari diskusi dengan anggota 
                                lain, mentoring, maupun acara komunitas.</p>
                        </div>
                        <div className="relasi p-6">
                            <img src={relasi} alt="" className='w-12 h-12 p-2 bg-[#D0DFFE] rounded-md'/>
                            <h4 className='text-lg md:text-xl font-bold text-[#174B86] mt-1'>Memperluas Relasi</h4>
                            <p className='text-justify text-sm font-light mt-2 max-w-[16rem]'>Relasi yang kuat membuka banyak peluang, mulai dari 
                                kolaborasi proyek hingga kesempatan kerja atau magang.</p>
                        </div>
                        <div className="refreshing p-6 max-w-[20rem] ">
                            <img src={pikiran} alt="" className='w-12 h-12 p-2 bg-[#D0DFFE] rounded-md'/>
                            <h4 className='text-lg md:text-xl font-bold text-[#174B86] mt-1'>Refreshing Pikiran</h4>
                            <p className='text-justify text-sm font-light mt-2 max-w-[16rem]'>Komunitas bisa menjadi tempat 
                                untuk merefreshkan pikiran setelah jam mata kuliah 
                                yang padat dan materi yang jenuh</p>
                        </div>
                </div>
            </FadeContent>

        </div>
    )
}
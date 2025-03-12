import '../../App.css'
import dukungan from '../../assets/motivation (1).png'
import ilmu from '../../assets/book.png'
import relasi from '../../assets/public-relation.png'
import pikiran from '../../assets/mindfulness.png'
import FadeContent from '../../AwesomeStyle/FadeContent/FadeContent'

export default function Manfaat() {
    return(
        <div className='flex justify-evenly items-center font-poppins mb-[8rem]'>
            <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
                <div>
                    <h2 className='text-4xl font-semibold text-[#174B86]'>BEBERAPA MANFAAT<br/>YANG AKAN KAMU<br/>DAPATKAN</h2>
                    <p className='text-[15px] font-light mt-4'>Dengan bergabung di komunitas, kamu<br/>akan mendapatkan banyak manfaat.<br/> 
                        komunitas yang ada akan membantu<br/>dirimu berkembang lebih baik</p>
                </div>
            </FadeContent>

            <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
                <div className='grid grid-cols-2 grid-rows-2 gap-y-[3rem] gap-x-[3rem] items-center'>
                        <div className="motivasi p-6 bg-[#174B86] text-white rounded-xl">
                            <img src={dukungan} alt="" className='w-[49px] h-[49px] p-2 bg-[#D0DFFE] rounded-md'/>
                            <h4 className='text-[24px] font-bold mt-1'>Dukungan & Motivasi</h4>
                            <p className='text-justify text-[13px] font-light mt-2 max-w-[16rem]'>Dalam komunitas, kamu tidak hanya belajar, tetapi juga 
                                mendapatkan motivasi dari sesama anggota serta
                                lingkungan yang suportif.</p>
                        </div>  
                        <div className="wawasan p-6">   
                            <img src={ilmu} alt="" className='w-[49px] h-[49px] p-2 bg-[#D0DFFE] rounded-md'/>
                            <h4 className='text-[24px] font-bold text-[#174B86] mt-1'>Menambah Wawasan</h4>
                            <p className='text-justify text-[13px] font-light mt-2 max-w-[16rem]'>Dengan bergabung di komunitas, kamu akan terpapar 
                                berbagai ilmu baru, baik dari diskusi dengan anggota 
                                lain, mentoring, maupun acara komunitas.</p>
                        </div>
                        <div className="relasi p-6">
                            <img src={relasi} alt="" className='w-[49px] h-[49px] p-2 bg-[#D0DFFE] rounded-md'/>
                            <h4 className='text-[24px] font-bold text-[#174B86] mt-1'>Memperluas Relasi</h4>
                            <p className='text-justify text-[13px] font-light mt-2  max-w-[16rem]'>Relasi yang kuat membuka banyak peluang, mulai dari 
                                kolaborasi proyek hingga kesempatan kerja atau magang.</p>
                        </div>
                        <div className="refreshing p-6 max-w-[20rem]">
                            <img src={pikiran} alt="" className='w-[49px] h-[49px] p-2 bg-[#D0DFFE] rounded-md'/>
                            <h4 className='text-[24px] font-bold text-[#174B86] mt-1'>Refreshing Pikiran</h4>
                            <p className='text-justify text-[13px] font-light mt-2'>Komunitas bisa menjadi tempat 
                                untuk merefreshkan pikiran setelah jam mata kuliah 
                                yang padat dan materi yang jenuh</p>
                        </div>
                </div>
            </FadeContent>

        </div>
    )
}
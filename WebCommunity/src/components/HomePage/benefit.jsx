import '../../App.css'
import dukungan from '../../assets/motivation (1).png'
import ilmu from '../../assets/book.png'
import relasi from '../../assets/public-relation.png'

export default function Manfaat() {
    return(
        <div className='flex justify-evenly items-center font-poppins mb-[8rem]'>
            <div>
                <h2 className='text-4xl font-semibold text-[#174B86]'>BEBERAPA MANFAAT<br/>YANG AKAN KAMU<br/>DAPATKAN</h2>
                <p className='text-[15px] font-light mt-4'>Dengan bergabung di komunitas, kamu<br/>akan mendapatkan banyak manfaat.<br/> 
                    komunitas yang ada akan membantu<br/>dirimu berkembang lebih baik</p>
            </div>

            <div className='grid grid-cols-2 grid-rows-2 gap-y-[3rem] gap-x-[3rem] items-center'>
                <div className="motivasi">
                    <img src={dukungan} alt="" className='w-[49px] h-[49px] p-2 bg-[#D0DFFE] rounded-md'/>
                    <h4 className='text-[24px] font-bold text-[#174B86] mt-1'>Dukungan & Motivasi</h4>
                    <p className='text-justify text-[13px] font-light mt-2'>Dalam komunitas, kamu tidak hanya<br/>belajar, tetapi juga 
                        mendapatkan<br/>motivasi dari sesama anggota serta<br/> 
                        lingkungan yang suportif.</p>
                </div>  
                <div className="wawasan">   
                    <img src={ilmu} alt="" className='w-[49px] h-[49px] p-2 bg-[#D0DFFE] rounded-md'/>
                    <h4 className='text-[24px] font-bold text-[#174B86] mt-1'>Menambah Wawasan</h4>
                    <p className='text-justify text-[13px] font-light mt-2'>Dengan bergabung di komunitas, kamu<br/>akan terpapar 
                        berbagai ilmu baru, baik<br/>dari diskusi dengan anggota 
                        lain,<br/>mentoring, maupun acara komunitas.</p>
                </div>
                <div className="relasi">
                    <img src={relasi} alt="" className='w-[49px] h-[49px] p-2 bg-[#D0DFFE] rounded-md'/>
                    <h4 className='text-[24px] font-bold text-[#174B86] mt-1'>Memperluas Relasi</h4>
                    <p className='text-justify text-[13px] font-light mt-2'>Relasi yang kuat membuka banyak<br/>peluang, mulai dari 
                        kolaborasi proyek<br/>hingga kesempatan kerja atau<br/>magang.</p>
                </div>
            </div>
        </div>
    )
}
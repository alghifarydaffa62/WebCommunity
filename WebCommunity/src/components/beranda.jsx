import '../App.css'
import Navbar from './navbar'

export default function Beranda() {
    return (
        <div>
            <Navbar/>
            <div className='my-[6rem]'>
                <h1 className='text-5xl text-center font-poppins text-[#174B86] font-bold'>Wadah Pengembangan, Kolaborasi,<br/>dan Inovasi HIMIT</h1>
                <p className='font-poppins font-light text-center text-lg mt-6'>HIMIT menghadirkan berbagai komunitas untuk mendukung pengembangan<br/>keterampilan, 
                    inovasi, dan kolaborasi mahasiswa Teknik Informatika. 
                    Temukan<br/>komunitas yang sesuai dengan minatmu dan jadilah bagian dari perubahan!</p>
            </div>
            
        </div>
    )
}
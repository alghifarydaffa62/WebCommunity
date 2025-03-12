import '../../App.css'
import osc1 from '../../assets/osc1.jpg'
import osc2 from '../../assets/osc2.jpg'
import osc3 from '../../assets/osc3.jpg'
import osc4 from '../../assets/osc4.png'

export default function DocumOSC() {
    return(
        <div className='bg-[#172036] py-12 font-poppins mt-18'>
            <h1 className='text-3xl font-bold text-white text-center mb-6'>Dokumentasi Kegiatan</h1>
            <div className='grid grid-cols-2 gap-6 place-items-center mx-40 '>
                <img src={osc1} alt="" className='w-[30rem] h-[20rem] object-cover rounded-lg'/>
                <img src={osc2} alt="" className='w-[30rem] h-[20rem]  object-cover rounded-lg'/>
                <img src={osc3} alt="" className='w-[30rem] h-[20rem] object-cover rounded-lg'/>
                <img src={osc4} alt="" className='w-[30rem] h-[20rem] object-cover rounded-lg'/>
            </div>
        </div>
    )
}
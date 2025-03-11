import "../../App.css"
import Navbar from "../navbar"
import osc from '../../assets/OSC (1).jpg'
import webdevDocum from "../Webdev/webdevDocum"

export default function OSC() {
    return(
        <div>
            <Navbar/>

            <div className='flex justify-center gap-[4rem] items-center mt-8'>
                <img src={osc} alt="" className='w-[25rem] h-[25rem]'/>
                <div>
                    <div className='mb-6'>
                        <h1 className='text-4xl font-poppins text-[#174B86] font-bold'>Open Source Community</h1>
                        <p className='mt-2 text-light font-poppins text-justify max-w-md'>Wadah bagi mahasiswa 
                            yang tertarik dengan dunia open source dan keamanan siber. Di komunitas ini, 
                            kamu bisa berdiskusi, berbagi ilmu, dan mengeksplorasi berbagai aspek teknologi, 
                            termasuk cybersecurity dan CTF (Capture The Flag).</p>
                    </div>
                    <div>
                        <h3 className='text-lg font-bold font-poppins text-[#174B86]'>Topik Pembahasan:</h3>
                        <div className="flex gap-3 mt-2">
                            <p className='text-sm py-2 px-4 bg-[#1A57A7] rounded-full font-poppins text-white'>CTF</p>
                            <p className='text-sm py-2 px-4 bg-[#1A57A7] rounded-full font-poppins text-white'>Cyber Security</p>
                            <p className='text-sm py-2 px-4 bg-[#1A57A7] rounded-full font-poppins text-white'>Linux</p>
                            <p className='text-sm py-2 px-4 bg-[#1A57A7] rounded-full font-poppins text-white'>Open Source</p>
                        </div>
                    </div>
                    <button className='mt-8 py-3 px-5 bg-emerald-500 rounded-full font-poppins text-white font-semibold'>
                        <Link to='/'>Gabung dengan komunitas</Link>
                    </button>  
                </div>
            </div>
            <webdevDocum/>
        </div>
    )
}
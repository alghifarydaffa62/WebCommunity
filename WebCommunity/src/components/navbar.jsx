import '../App.css'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return(
        <div className='flex justify-evenly font-poppins font-medium mt-8'>
            <h2 className='text-xl font-bold text-[#1884FF]'>Himit<span className='text-[#0050AA]'>Community</span></h2>
            <ul className='flex gap-[3rem]'>
                <li><Link to='/'>Beranda</Link></li>
                <li><Link to='/KomunitasTeknologi'>Komunitas Teknologi</Link></li>
                <li><Link to='/KomunitasOlahraga'>Komunitas Olahraga</Link></li>
            </ul>
        </div>
    )
}
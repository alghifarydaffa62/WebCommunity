import '../App.css'
import { Link } from 'react-router-dom'

export default function Footer() {
    return(
        <div className="bg-[#182E66] font-poppins text-white mt-[6rem] min-h-[60vh] flex flex-col justify-between px-6 md:px-12">
            <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-16 pt-12 text-center md:text-left">
                <div className="max-w-md">
                    <h1 className="font-bold text-3xl mb-4">HimitCommunity</h1>
                    <p>
                        HimitCommunity adalah web berisi informasi seluruh komunitas yang ada
                        di Himpunan Mahasiswa Teknik Informatika dan Sains Data PENS atau HIMIT.
                    </p>
                </div>

                <div>
                    <h1 className="font-bold text-xl">Komunitas Teknologi</h1>
                    <ul className="mt-3 space-y-2">
                        <li><Link to="/KomunitasTeknologi/Webdev">Web Developer</Link></li>
                        <li><Link to="/KomunitasTeknologi/GameKita">GameKita</Link></li>
                        <li><Link to="/KomunitasTeknologi/OSC">Open Source Community</Link></li>
                    </ul>
                </div>

                <div>
                    <h1 className="font-bold text-xl">Komunitas Olahraga</h1>
                    <ul className="mt-3 space-y-2">
                        <li><Link to="/KomunitasOlahraga/BlueKnight">Blue Knight</Link></li>
                        <li><Link to="/KomunitasOlahraga/ShuttleBlue">Shuttle Blue</Link></li>
                        <li><Link to="/KomunitasOlahraga/BlueIce">Blue Ice</Link></li>
                        <li><Link to="/KomunitasOlahraga/I-Ball">I - Ball</Link></li>
                        <li><Link to="/KomunitasOlahraga/I-Sport">I - Sport</Link></li>
                    </ul>
                </div>
            </div>

            <div className="text-center pb-6 mt-8">
                <h1 className="text-sm">Copyright &copy; 2025 | Tim #EngganMengoding</h1>
            </div>
        </div>
    )
}
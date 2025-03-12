import '../App.css'
import { Link } from 'react-router-dom'


export default function Footer() {
    return(
        <div className="bg-[#182E66] font-poppins text-white mt-[6rem] h-[60vh] flex flex-col justify-between">
            <div className="flex justify-center gap-16 pt-12">
                <div className="max-w-md">
                    <h1 className="font-bold text-3xl mb-4">HimitCommunity</h1>
                    <p>
                        HimitCommunity adalah web berisi informasi seluruh komunitas yang ada
                        di Himpunan Mahasiswa Teknik Informatika PENS atau HIMIT.
                    </p>
                </div>

                <div>
                    <h1 className="font-bold text-xl">Komunitas Teknologi</h1>
                    <ul className="mt-3 space-y-2">
                        <li><Link to="/Webdev">Web Developer</Link></li>
                        <li><Link to="/">GameKita</Link></li>
                        <li><Link to="/OSC">Open Source Community</Link></li>
                    </ul>
                </div>

                <div>
                    <h1 className="font-bold text-xl">Komunitas Olahraga</h1>
                    <ul className="mt-3 space-y-2">
                        <li><Link to="">Blue Knight</Link></li>
                        <li><Link to="">Shuttle Blue</Link></li>
                        <li><Link to="">Blue Ice</Link></li>
                        <li><Link to="">I - Ball</Link></li>
                        <li><Link to="">I - Sport</Link></li>
                    </ul>
                </div>
            </div>

            <div className="text-center pb-6">
                <h1 className="text-sm">Copyright &copy; 2025 | Tim #EngganMengoding</h1>
            </div>
        </div>
    )
}
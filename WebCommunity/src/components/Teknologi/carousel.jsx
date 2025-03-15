import '../../App.css'
import www from '../../assets/www.png'
import game from '../../assets/game.png'
import linux from '../../assets/linux.png'

export default function Carousel() {
    return(
        <div className='flex flex-wrap justify-center md:justify-evenly items-center bg-[#1A57A7] p-6 font-poppins gap-6'>
            <div className='flex justify-center items-center gap-4'>
                <img src={www} alt="" className='h-[4vh] w-[8vw] lg:h-[6vh] lg:w-[3vw] md:w-[5vw] md:h-[3vh] object-cover rounded-md'/>
                <p className='text-white font-semibold'>Web Developer</p>
            </div>
            <div className='flex justify-center items-center gap-4'>
                <img src={linux} alt="" className='h-[4vh] w-[8vw] lg:h-[6vh] lg:w-[3vw] md:w-[5vw] md:h-[3vh] object-contain rounded-lg'/>
                <p className='text-white font-semibold'>Open Source Community</p>
            </div>
            <div className='flex justify-center items-center gap-4'>
                <img src={game} alt="" className='h-[4vh] w-[10vw] lg:h-[6vh] lg:w-[4vw] md:w-[5vw] md:h-[3vh] object-contain rounded-lg'/>
                <p className='text-white font-semibold'>GameKita</p>
            </div>
        </div>
    )
}
import '../../App.css'
import futsal from '../../assets/soccer-ball-variant.png'
import volley from '../../assets/volleyball-ball.png'
import shuttle from '../../assets/badminton.png'
import iball from '../../assets/ball-of-basketball.png'
import isport from '../../assets/multiplayer.png'

export default function Carousel() {
    return(
        <div className='flex flex-wrap justify-center md:justify-evenly items-center bg-[#1A57A7] p-6 font-poppins gap-6'>
            <div className='flex justify-center items-center gap-4'>
                <img src={futsal} alt="" className='h-[4vh] w-[6vw] md:h-[5vh] md:w-[4vw] lg:h-[6vh] lg:w-[3vw] object-contain rounded-lg'/>
                <p className='text-white font-semibold'>Blue Ice</p>
            </div>
            <div className='flex justify-center items-center gap-4'>
                <img src={volley} alt="" className='h-[4vh] w-[6vw] md:h-[5vh] md:w-[4vw] lg:h-[6vh] lg:w-[3vw] object-contain rounded-lg'/>
                <p className='text-white font-semibold'>Blue Knight</p>
            </div>
            <div className='flex justify-center items-center gap-4'>
                <img src={shuttle} alt="" className='h-[4vh] w-[6vw] md:h-[5vh] md:w-[4vw] lg:h-[6vh] lg:w-[3vw] object-contain rounded-lg'/>
                <p className='text-white font-semibold'>Shuttle Blue</p>
            </div>
            <div className='flex justify-center items-center gap-4'>
                <img src={iball} alt="" className='h-[4vh] w-[6vw] md:h-[5vh] md:w-[4vw] lg:h-[6vh] lg:w-[3vw] object-contain rounded-lg'/>
                <p className='text-white font-semibold'>I-Ball</p>
            </div>
            <div className='flex justify-center items-center gap-4'>
                <img src={isport} alt="" className='h-[4vh] w-[6vw] md:h-[5vh] md:w-[4vw] lg:h-[6vh] lg:w-[3vw] object-contain rounded-lg'/>
                <p className='text-white font-semibold'>I-Sport</p>
            </div>
        </div>
    )
}
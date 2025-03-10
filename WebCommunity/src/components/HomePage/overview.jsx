import '../../App.css'
import Stack from '../../AwesomeStyle/Stack/Stack'
import teknostack1 from '../../assets/teknoOverview.jpeg'
import teknostack2 from '../../assets/teknoOverview2.jpg'
import teknostack3 from '../../assets/teknoOverview3.jpeg'
import teknostack4 from '../../assets/teknoOverview4.jpg'
import ORoverview from '../../assets/ORoverview.jpeg'
import ORoverview2 from '../../assets/ORoverview2.jpeg'
import ORoverview3 from '../../assets/ORoverview3.jpeg'

export default function Overview() {
    const images = [
        { id: 1, img: teknostack1 },
        { id: 2, img: teknostack2 },
        { id: 3, img: teknostack3  },
        { id: 4, img: teknostack4 }
      ];

    const images2 = [
        { id: 1, img: ORoverview},
        { id: 2, img: ORoverview2},
        { id: 3, img: ORoverview3}
    ]

    return(
        <div className='bg-[#182E66] py-[5rem] font-poppins'>
            <div className='flex justify-center gap-[6rem]'>
                <Stack
                    randomRotation={true}
                    sensitivity={180}
                    sendToBackOnClick={false}
                    cardDimensions={{ width: 370, height: 300 }}
                    cardsData={images}
                    />
                <div>
                    <h2 className='text-4xl font-bold text-white'>BERGABUNG &<br/>KEMBANGKAN POTENSIMU<br/>DI KOMUNITAS!</h2>
                    <p className='text-white font-light mt-2 text-lg'>Tempat terbaik untuk mengasah keterampilan,<br/>membangun 
                        relasi, dan berkembang bersama.</p>
                </div>
            </div>

            <div className='flex justify-center gap-[3rem] text-right mt-[6rem]'>
                <div>
                    <h2 className='text-4xl font-bold text-white'>BERINOVASI DI TEKNOLOGI,<br/>BERPRESTASI DI LAPANGAN</h2>
                    <p className='text-white font-light mt-2 text-lg'>Tempat terbaik untuk mengasah keterampilan,<br/>membangun 
                        relasi, dan berkembang bersama.</p>
                </div>
                <Stack
                    randomRotation={true}
                    sensitivity={180}
                    sendToBackOnClick={false}
                    cardDimensions={{ width: 370, height: 300 }}
                    cardsData={images2}
                    />
            </div>
            
        </div>
    )
}
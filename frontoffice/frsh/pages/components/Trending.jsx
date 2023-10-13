import trendingData from '@/dump/trendingData'
import Image from 'next/image'
import Link from 'next/link'

const Trending = () => {
  return (
    <>
    <div className='flex flex-col gap-1 items-start justify-center'>
      <div className='flex flex-row gap-2 items-center justify-center'>
          <h2>Trending</h2>
          <Image src='/assets/fire.svg' width={24} height={24} alt='trending'/>
      </div>
      {trendingData.map((obj, i) => ( 
        <div key={i} className='flex flex-col gap-1 items-start justify-center p-1 ml-1'>
          <Link href={obj.link}>
              <p className='text-sm no-underline'>{obj.display_name}</p>
          </Link>
        </div>
      ))}
    </div>
    </>
  )
}

export default Trending
import Navbar from '@/pages/components/Navbar'
import Image from 'next/image'
import Catalogue from './catalogue'
import Sidebar from './sidebar'
// import {RxDividerVertical} from "react-icons/rx"

export default function Home() {
  return (
    
      <div className='bg-white w-full'>
        {/* <Image src='/assets/cover.jpeg'/> */}
        <Navbar/>
        <div className='flex flex-row divide-x divide-zinc-300'>
          <div className='min-[320px]:hidden lg:flex lg:basis-1/5 '>
            <Sidebar/>
            {/* <RxDividerVertical className='h-full w-[0.75px]'/> */}
          </div>
          {/* <RxDividerVertical className='h-full w-[0.75px]'/> */}
          <div className='min-[320px]:basis-full lg:basis-4/5 flex-shrink-0'>
            <Catalogue />
          </div>
        </div>
      </div>
  )
}

import Navbar from '@/pages/components/Navbar'
import Image from 'next/image'
import Catalogue from './catalogue'
import Sidebar from './sidebar'
import {RxDividerVertical} from "react-icons/rx"

export default function Home() {
  return (
    
      <div>
        {/* <Image src='/assets/cover.jpeg'/> */}
        <Navbar/>
        <div className='flex flex-row'>
          <div className='basis-1/5'>
            <Sidebar/>
          </div>
          <RxDividerVertical className='h-full w-[0.75px]'/>
          <div className='basis-4/5'>
            <Catalogue/>
          </div>
        </div>
      </div>
  )
}

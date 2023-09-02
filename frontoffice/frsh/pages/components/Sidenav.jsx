import React from 'react'
import Search from './Search'
import Categories from './Categories'
import Trending from './Trending'

const Sidenav = () => {
  return (
    <div className='fixed flex flex-col gap-8 h-full bg-white items-start justify-start px-5 py-5'>
      <div className='text-[#212529] mx-2 mb-5'>
        <Search/>
      </div>
      <div className='text-[#212529] mx-2 mb-5'>
        <h2>Categories</h2>
        <Categories/>
      </div>
      <div className='text-[#212529] mx-2 mb-5'>
        {/* <h2>Trending</h2> */}
        <Trending/>
      </div>
    </div>
  )
}

export default Sidenav
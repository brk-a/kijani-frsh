"use client"
import categoryData from "@/dump/categoryData"
import Link from "next/link"

const Categories = () => {
    const handleChange = () => {} //filter function
  return (
    <>
    {categoryData.map((obj, i) => ( 
      <div key={i} className='flex flex-col gap-4 items-start justify-center p-2'>
        <div className='flex flex-row gap-2 items-center justify-center'>
          <input type='checkbox' onChange={handleChange}/>
          <Link href={obj.link}>
            <p className='text-sm'>{obj.display_name}</p>
          </Link>
        </div>
      </div>
    ))}
    </>
  )
}

export default Categories
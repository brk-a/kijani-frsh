"use client"
import {useState} from 'react'
import {SlMagnifier} from "react-icons/sl"

const Search = () => {
    const [query, setQuery] = useState("")
    const handleChange = (e) => {
        setQuery(e.target.value)
    }
  return (
    <>
    <div className='flex flex-row items-center justify-between gap-3 border border-slate-800/75 p-1 rounded-full'>
        <SlMagnifier/>
        <input placeholder='Search FRSH' onChange={handleChange}/>
    </div>
    {/* <div>
        {
            data.filter(item => {
                if(query==="") return item
                if(item.toLowerCase().includes(query.toLowerCase)) return item
            }).map((i, j) => (
                <div key={j}>
                    {i}
                </div>
            ))
        }
    </div> */}
    </>
  )
}

export default Search
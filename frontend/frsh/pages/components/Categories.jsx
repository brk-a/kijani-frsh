"use client"

const Categories = () => {
    const handleChange = () => {}
  return (
    <>
    <div className='flex flex-col gap-4 items-center justify-between p-2'>
        <div className='flex flex-row gap-2'>
            <input type='checkbox' onChange={handleChange}/>
            <p>Veggies</p> {/**veggies, herbs, leafey veg, root veg, peppers, onions, tomatoes etc */}
        </div>
    </div>
    </>
  )
}

export default Categories
import productData from '@/dump/productData'
import ProductCard from '@/pages/components/ProductCard'
import React from 'react'

const Catalogue = () => {
  return (
    <div className='grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 bg-white p-8 justify-center'>
        {productData.map((product, i) => (
            <div key={i} className='w-[323px] border-2 border-[#212529] border-opacity-80 rounded-md'>
                <ProductCard
                    image={product.image}
                    title={product.title}
                    description={product.description}
                    price={product.price}
                    // id={id}
                />
            </div>
        ))}
    </div>
  )
}

export default Catalogue
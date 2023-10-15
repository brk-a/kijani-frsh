import Image from "next/image"

const CartCard = ({image, title, unitPrice, quantity, totalPrice}) => {
  return (
    <>
    <div className="flex flex-row gap-1 rounded-md border-2">
        <Image src={image} width={24} height={24} alt={title}/>
        <div className="flex flex-col gap-2 m-2 justify-between items-center">
            <div className="flex flex-row gap-2 m-2 justify-between items-center">
                <p>{title}</p>
                <p className="text-white">KES {unitPrice}</p>
                <Image src="" width={15} height={15} alt="close"/>
            </div>
            <div className="flex flex-row gap-2 m-2 justify-between items-center">
                <Image src="" width={15} height={15} alt="minus"/>
                <p>{quantity}</p>
                <Image src="" width={15} height={15} alt="plus"/>
            </div>
            <div>
                <p>KES {totalPrice}</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default CartCard
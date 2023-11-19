import { useContext } from "react";
import Link from "next/link";
import CartCard from "./CartCard";
import { CartContext } from "@/app/context/cart-context";

const Cart = () => {
	const { cart } = useContext(CartContext)

	return (
		cart.length === 0 ? (
			<div className="flex flex-col justify-center items-center mb-5 gap-2">
				<h1 className="text-[#212529]">Cart is empty</h1>
				<Link href="/">
					<p className="text-[#212529] rounded-md border-1 border-[#212529] p-2 cursor-pointer">
						Back to home
					</p>
				</Link>
			</div>
		) : (
			<div className="flex flex-col min-w-[75%] min-h-full items-center justify-center bg-white">
				<div className="flex flex-col gap-2">
					{/* <h1>Total: KES {}</h1> */}
					<div className="flex flex-row gap-2 justify-between items-center text-white">
						<button className="bg-red-200 cursor-pointer">Clear cart</button>
						<button className="bg-green-200 cursor-pointer">Check-out</button>
					</div>
					{/* <h1>Total: KES {total}</h1> */}
				</div>
				<div className="">
					{cart.map(obj => (
						obj.quantity == 0 ? (
							<div key={obj.id}>
								<CartCard
									image={obj.image}
									title={obj.title}
									unitPrice={obj.unitPrice}
									quantity={obj.quantity}
									totalPrice={obj.unitPrice * obj.quantity}
								/>
							</div>
						) : (<></>))

					)}
				</div>
			</div>
		)
	);
}

export default Cart;
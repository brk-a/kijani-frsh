import CartCard from "./CartCard";

const Cart = () => {
  let cart = localStorage.getItem("data") || []
  const calculation = cart.length > 0
    ? cart.reduce((acc, obj) => (acc + obj.quantity), 0)
    : 0
  return (
    cart.length === 0 ? (
      <></>
    ) : (
      <div className="flex flex-col min-w-[75%] min-h-full items-center justify-center bg-white">
        <div className="flex flex-col gap-2">
          {/* <h1>Total: KES {}</h1> */}
          <div className="flex flex-row gap-2 justify-between items-center text-white">
            <button className="bg-red">Clear cart</button>
            <button className="bg-green">Check-out</button>
          </div>
          <h1>Total: KES { }</h1>
        </div>
        <div className="">
          {cart.map(obj => (
            <div key={obj.id}>
              <CartCard
                image={obj.image}
                title={obj.title}
                unitPrice={obj.price}
                quantity={obj.quantity}
                totalPrice={() => { obj.price * obj.quantity }}
              />
            </div>
          ))}
        </div>
      </div>
    )
  );
}

export default Cart;
import { useWishlist } from "../context/Agdcontext";
import Lottie from "lottie-react";
import emptyCartAnimation from '../assets/empty.json'
import { X } from "lucide-react";
const Cart = () => {
    const { cart, removeFromCart } = useWishlist();

    if (cart.length === 0) {
        return (
            <div className=" py-20 flex items-center justify-center">
                <Lottie
                    animationData={emptyCartAnimation}
                    loop
                    className="w-70 h-70"
                />
            </div>
        )

    }
    return (
        <div className="bg-[#222222] py-16 max-w-7xl mx-auto w-full">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-[#DBF227] text-3xl bodoni-moda mb-10">
                    Cart Items
                </h2>

                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
                    {cart.map((item) => (
                        <div
                            key={item.id}
                            className="bg-[#0b1a1f] p-4 rounded-xl shadow-lg relative  "
                        >
                            <X className="w-5 h-5 text-white hover:cursor-pointer absolute right-4 top-4"
                            onClick={()=>removeFromCart(item.id)}/>

                            <div className="h-40 flex items-center justify-center mb-4 ">
                                <img
                                    src={item.img}
                                    alt=""
                                    className="w-32 h-32 object-contain"
                                />
                            </div>

                            <div className="flex justify-between">
                                <p className="text-white text-sm">{item.name}</p>
                                <p className="text-[#DBF227] text-sm">{item.price}</p>
                            </div>
                            <p className="text-white/50">{item.sku}</p>
                            <button className="flex-1 bg-[#DBF227] text-black text-xs font-semibold
                             py-2 rounded-md hover:opacity-90 relative z-20 w-full mt-4">
                                BUY NOW
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Cart

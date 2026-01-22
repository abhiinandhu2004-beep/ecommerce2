import { items, products } from "../constants"
import { Heart } from "lucide-react"
import ring from '../assets/gold.png'
import { useWishlist } from "../context/Agdcontext"
import { useNavigate } from "react-router-dom"

function Shop() {

    const { wishlist, toggleWishlist, toggleCart, cart, handleCheckout } = useWishlist();
    const navigate = useNavigate();

    return (
        <div className="bg-[#222222] w-full py-16">

            {/* Heading */}
            <div className="flex flex-col items-center mb-10 px-4">
                <p className="text-[#DBF227] text-3xl bodoni-moda">
                    Shop on Budget
                </p>
                <p className="text-white text-sm mt-2 text-center">
                    We have every style at your affordable budget
                </p>
            </div>

            {/* Responsive Image Grid */}
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="relative w-full h-69 overflow-hidden rounded-2xl hover:scale-105 transition-transform duration-300"
                        >
                            <img
                                src={item.img}
                                alt=""
                                className="w-full h-full object-cover object-top"
                            />

                            {/* Overlay text */}
                            <div className="absolute bottom-4 left-4 text-white">
                                <p className="font-semibold">{item.title}</p>
                                <p className="text-[#DBF227] text-sm">{item.sub}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>


            <div className="max-w-7xl mx-auto mt-12 px-6 flex items-center justify-between">


                <div className="flex flex-col gap-1">
                    <p className="bodoni-moda text-white text-xl">
                        New Arrivals
                    </p>
                    <p className="bodoni-moda text-white text-xs">
                        234 New item added
                    </p>
                </div>


                <p className="bodoni-moda text-white text-sm cursor-pointer whitespace-nowrap">
                    See All
                </p>

            </div>


            <div className=" py-12">
                <div className="max-w-7xl mx-auto px-6 ">

                    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
                        {products.map((item) => (
                            <div
                                key={item.id}
                                className="relative  bg-[#0b1a1f] p-4 shadow-lg hover:scale-105 
                                transition-transform duration-300 hover:shadow-2xl rounded-2xl overflow-hidden"
                                onClick={() => handleCheckout(item.id)}>

                            
                                {/* Wishlist icon */}
                                {/* <button className="absolute top-4 right-4 text-white/70 hover:text-[#DBF227]">
                                    <Heart size={18} />
                                </button> */}

                                {/* Product image placeholder */}
                                <div className="h-45 flex items-center justify-center mb-4">

                                    <div className=" absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(219,242,39,0.20),transparent_60%)]" />
                                    <img
                                        src={item.img}
                                        alt={item.name}
                                        className="w-45 h-45 object-contain"
                                    />

                                </div>

                                {/* Product info */}
                                <div className="mb-4">
                                    <div className="flex justify-between items-center">
                                        <p className="text-white font-medium text-sm">
                                            {item.name}
                                        </p>
                                        <p className="text-white font-semibold text-sm">
                                            {item.price}
                                        </p>
                                    </div>

                                    <p className="text-white/50 text-xs mt-1">
                                        SKU: {item.sku}
                                    </p>
                                </div>

                                {/* Actions */}
                                <div className="flex items-center gap-2">
                                    <button className="flex-1 bg-[#DBF227] text-black text-xs font-semibold py-2 rounded-md hover:opacity-90 relative z-20"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            toggleCart(item);
                                        }}>
                                        ADD TO CART
                                    </button>
                                    <button
                                        className="w-10 h-10 flex items-center justify-center border border-[#DBF227]
                                        rounded-md hover:bg-[#DBF227]/10 relative z-20"
                                        onClick={() => {
                                            toggleWishlist(item);
                                        }}

                                    >
                                        <Heart
                                            size={16}
                                            fill={wishlist.some((w) => w.id === item.id) ? "#DBF227" : "none"}
                                            className="text-[#DBF227]"
                                        />
                                    </button>

                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
            <div className="w-full  lg:py-0 px-4">
                <div
                    className="
      max-w-7xl mx-auto
      rounded-3xl
      relative
      bg-[linear-gradient(to_right,rgba(143,160,0,0.55),#000_60%)]
      flex flex-col lg:flex-row
      overflow-hidden
      px-0 sm:px-8 lg:px-10 h-96
      py-0 sm:py-4
    "
                >

                    {/* LEFT IMAGE */}
                    <div className="relative  -mb-50 lg:mb-10 lg:mr-20">
                        <img
                            src={ring} // 👈 replace image
                            alt="Gold rings"
                            className=" w-100 -mt-20 lg:w-150 h-100 object-contain  "
                        />

                        {/* Extra glow */}
                        <div className="
        absolute -left-16 sm:-left-20 top-1/2 -translate-y-1/2
        w-40 sm:w-52 md:w-64 h-40 sm:h-52 md:h-64
        bg-[radial-gradient(circle,rgba(219,242,39,0.45),transparent_65%)]
        blur-2xl
      " />
                    </div>

                    {/* RIGHT CONTENT */}
                    <div className="text-white text-center lg:text-left px-4 sm:px-0">
                        <h2 className="bodoni-moda text-2xl sm:text-3xl lg:text-4xl xl:text-5xl  mt-20">
                            The Best Gold Ever
                        </h2>

                        <p className="text-white/60 max-w-md text-sm sm:text-base lg:text-lg leading-relaxed mb-10 sm:mb-8 mx-auto lg:mx-0">
                            People thinking about the future why gold make high
                            value here is the answer for all about
                        </p>

                        <button
                            className="
          px-6 sm:px-10 py-2 sm:py-3
          border border-[#DBF227]
          rounded-lg
          text-[#DBF227]
          text-sm sm:text-base
          hover:bg-[#DBF227]/10
          transition
        "
                        >
                            Explore
                        </button>
                    </div>

                </div>
            </div>
        </div >
    )
}

export default Shop

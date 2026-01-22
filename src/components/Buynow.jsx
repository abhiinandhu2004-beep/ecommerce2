import { useParams } from "react-router-dom";
import { products } from "../constants";
import purity1 from '../assets/gold1.svg'
import purity2 from '../assets/gold2.svg'
import { IoCheckmarkDone } from "react-icons/io5";
import certification1 from '../assets/certi1.svg'
import certification2 from '../assets/certi2.svg'
import { productDetails } from "../constants";
import star1 from '../assets/star.svg'
import { useNavigate } from "react-router-dom";
import { useWishlist } from "../context/Agdcontext";
import { useEffect } from "react";

const Buynow = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const { setQuantity, totalPrice,totaloldPrice } = useWishlist();

    useEffect(() => {
        setQuantity(1);
    }, []);


    const product = products.find(
        (item) => item.id === Number(id)
    );

    if (!product) {
        return (
            <div className="text-white text-center py-20">
                Product not found
            </div>
        );
    }

    return (
        <div className="w-full min-h-screen bg-[#111] text-white px-4 py-8">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">

                {/* IMAGE SECTION */}
                <div className="flex flex-col lg:flex-row gap-4 w-full lg:max-w-xl">

                    {/* Thumbnails */}
                    <div className="flex lg:flex-col gap-3">
                        {/* {[product.img, product.img].map((img, i) => (
                            
                        ))} */}
                        <div className="w-16 h-16 sm:w-20 sm:h-20 border border-gray-600 rounded flex items-center justify-center bg-white/90" >
                            <img src={product.img} className="w-full h-full object-contain" />
                        </div>
                        <div className="w-16 h-16 sm:w-20 sm:h-20 border border-gray-600 rounded flex items-center justify-center" >
                            <img src={product.img} className="w-full h-full object-contain rotate-45" />
                        </div>
                    </div>

                    {/* Main Image */}
                    <div className="flex-1 flex items-center justify-center border border-gray-700 rounded-lg p-6 sm:p-10 max-w-[500px] h-[500px]">
                        <img
                            src={product.img}
                            className="w-full max-w-87.5 h-auto object-contain"
                        />
                    </div>
                </div>

                {/* PRODUCT DETAILS */}
                <div className="px-4 lg:px-10 flex-1">
                    <p className="bodoni-moda text-3xl mb-2">Trending</p>

                    <p className=" text-white/60 not-last:font-medium dmSans text-sm">{product.name}</p>
                    <p className="text-white/60 text-sm mt-1 dmSans">
                        SKU: {product.sku}
                    </p>

                    <p className="text-white text-2xl font-bold mt-4">
                        AED {totalPrice} <span className="text-white/60 line-through px-5">AED {totaloldPrice}</span>
                    </p>
                    <p className="text-green-800 text-xs py-2">Hurray! You have saved    AED 2500</p>
                    <p className="dmsSans text-white/60 test-sm">Available Colours</p>

                    <div className="flex flex-row gap-4 mt-4">
                        <div className="w-10 h-10 bg-[#FFD7D7] rounded" />
                        <div className="w-10 h-10 bg-[#FED672] rounded" />
                        <div className="w-10 h-10 bg-[#EEE9E9] rounded" />
                        <div className="w-10 h-10 bg-[#DEDEDE26] rounded" />
                    </div>
                    <div className="flex flex-row gap-3">
                        <button className="mt-6 px-8 py-3 bg-[#DBF227] text-black font-semibold rounded-lg w-full"
                            onClick={() => navigate('/checkout')}>
                            Buy Now
                        </button>
                        <button className="mt-6 px-8 py-3 text-[#EEE9E9] font-semibold rounded-lg border border-[#EEE9E9] w-full">
                            Add To Cart
                        </button>
                    </div>
                    <div className="flex flex-col gap-3 mt-3">
                        <div className="flex flex-row gap-5 mt-5">
                            <p className="text-sm text-[#EEE9E9] dmSans mt-2">Select Size :</p>
                            <select className="bg-[#111] border border-gray-600 text-white px-3 py-2 rounded-lg w-40 "
                            >
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                            </select>

                            <p className="text-sm text-[#EEE9E9] dmSans mt-2">Quantity :</p>
                            <select className="bg-[#111] border border-gray-600 text-white px-3 py-2 rounded-lg w-40 "
                                onChange={(e) => setQuantity(Number(e.target.value))}
                            >
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                            </select>
                        </div>

                        <div className="w-full border border-gray-600 mt-2" />

                        <p className="text-sm text-[#EEE9E9] dmSans mt-4">Choose Gold Purity</p>
                        <div flex className="flex flex-row gap-4 mt-2">
                            <img src={purity1} alt="" className="w-15 h-15" />
                            <img src={purity2} alt="" className="w-15 h-15" />
                        </div>

                        <p className="text-sm text-[#EEE9E9] dmSans mt-4">Devilery Availability</p>
                        <div className="flex flex-row gap-5">
                            <input type="text" placeholder="673102"
                                className="bg-amber-50 py-2 px-3 w-40 placeholder:text-gray-700 
                        placeholder:opacity-50 focus:outline-none rounded"/>
                            <button className="bg-[#D6D58E] py-2 rounded mt-2 w-40 text-black" >
                                Check Now
                            </button>

                        </div>
                        <div className="flex items-center gap-2 mt-4">
                            <IoCheckmarkDone className="text-green-800" />
                            <p className="text-sm text-[#EEE9E9] ">Standard delivery between 24 Oct & 28 oct 2022 </p>
                        </div>
                        <div className="flex items-center gap-2 ">
                            <IoCheckmarkDone className="text-green-800" />
                            <p className="text-sm text-[#EEE9E9] ">Cash / card delivery option available</p>
                        </div>
                        <div className="w-full border border-gray-600 mt-4" />

                        <div className="flex flex-col gap-4">
                            <p className="dmsSans text-white/60 test-sm">certification</p>
                            <div className="flex flex-row gap-5">
                                <img src={certification1} alt="" className="w-15 h-15" />
                                <img src={certification2} alt="" className="w-15 h-15" />
                            </div>
                            <div className="w-full border border-gray-600 mt-4" />

                            <p className="text-white font-semibold mb-4">
                                Product details
                            </p>

                            <div className="space-y-3 space-x-3">
                                {productDetails.map((item, index) => (
                                    <div
                                        key={index}
                                        className="flex gap-30 text-sm"
                                    >
                                        <span className="text-white/70">
                                            {item.label}
                                        </span>

                                        <span className="text-white ">
                                            {item.value}
                                        </span>
                                    </div>
                                ))}
                            </div>
                            <div className="w-full border border-gray-600 mt-4" />

                            <div className="flex flex-row justify-between items-center">

                                <p className="text-white font-semibold mb-4">
                                    Rating & review
                                </p>
                                <div className="flex items-center pr-10 gap-3">
                                    <p className="text-amber-100 font-boldc text-lg  ">4.4</p>
                                    <img src={star1} alt="" className="w-5 h-5" />

                                </div>
                            </div>
                            <div className="w-full border border-gray-600 mt-4" />

                        </div>


                    </div>
                </div>
            </div>

        </div>

    );
};

export default Buynow;

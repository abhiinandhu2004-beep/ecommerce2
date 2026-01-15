import React from "react";
import { Heart } from "lucide-react";
import { demanded } from "../constants";
import image from '../assets/img7.png'

const DemandedItems = () => {
    return (

        <>
            <div className="flex flex-col items-center mb-10 px-4 bg-[#222222]">
                <p className="text-[#DBF227] text-3xl bodoni-moda">
                    Top Demanded Items
                </p>
                <p className="text-white text-sm mt-2 text-center">
                    234 New item added
                </p>
            </div>

            <div className="py-12 bg-[#222222]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {demanded.map((item) => (
                            <div
                                key={item.id}
                                className="relative rounded-2xl bg-[#0b1a1f] p-5
                         border border-[#DBF227]/20
                         shadow-lg overflow-hidden
                         hover:scale-105 transition-transform duration-300 hover:shadow-2xl"
                            >
                                {/* Glow background */}
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(219,242,39,0.18),transparent_60%)]" />

                                {/* Image */}
                                <div className="relative flex items-center justify-center h-44 mb-4">
                                    <img
                                        src={item.icon}
                                        alt={item.title}
                                        className="w-38 h-38 object-contain"
                                    />
                                </div>

                                {/* Info */}
                                <div className="relative text-center">
                                    <p className="text-white text-sm font-medium mb-1">
                                        {item.title}
                                    </p>

                                    <p className="text-white/50 text-xs mb-3">
                                        SKU: {item.sku}
                                    </p>

                                    {/* Price */}
                                    <div className="flex items-center justify-center gap-2">
                                        <span className="text-white font-semibold text-sm">
                                            ₹{item.price}
                                        </span>
                                        <span className="text-white/40 text-sm line-through">
                                            ₹{item.oldprice}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

<div className="w-full max-w-7xl mx-auto p-5  ">
<img src={image} alt="" />
</div>

        </>
    );
};

export default DemandedItems;

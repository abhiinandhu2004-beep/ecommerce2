import { Heart } from "lucide-react";
import { useWishlist } from "../context/Agdcontext";

const Wishlist = () => {
  const { wishlist } = useWishlist();
console.log("Wishlist items:", wishlist);
  if (wishlist.length === 0) {
    return (
      <div className="text-center py-20 text-white">
        <Heart size={40} className="mx-auto mb-4 text-[#DBF227]" />
        <p>No items in wishlist</p>
      </div>
    );
  }

  return (
    <div className="bg-[#222222] py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-[#DBF227] text-3xl bodoni-moda mb-10">
          Wishlist
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
          {wishlist.map((item) => (
            <div
              key={item.id}
              className="bg-[#0b1a1f] p-4 rounded-xl shadow-lg  "
            >
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;

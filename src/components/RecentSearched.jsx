import { demanded } from "../constants";

const DemandedItems = () => {
  return (
    <>
      {/* Header */}
      <div className="flex flex-col mb-5 px-10 lg:px-40 py-5 bg-[#222222]">
        <p className="text-[#DBF227] text-sm lg:text-3xl bodoni-moda">
          Recent Searched
        </p>
        <p className="text-white text-xs lg:text-sm mt-2">
          234 New item added
        </p>
      </div>

      {/* Horizontal scroll section */}
      <div className="bg-[#222222] pb-12">
        <div className="max-w-7xl mx-auto px-6">
          
          <div
            className="flex gap-6 overflow-x-auto pb-4
                       scrollbar-hide"
          >
            {demanded.map((item) => (
              <div
                key={item.id}
                className="relative min-w-65 max-w-65
                           rounded-2xl bg-[#0b1a1f] p-5
                           border border-[#DBF227]/20
                           shadow-lg overflow-hidden shrink-0
                           hover:scale-105 transition-transform duration-300 hover:shadow-2xl"
              >
                {/* Glow */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(219,242,39,0.18),transparent_60%)]" />

                {/* Image */}
                <div className="relative flex items-center justify-center h-44 mb-4">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w- h-32 object-contain"
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
    </>
  );
};

export default DemandedItems;

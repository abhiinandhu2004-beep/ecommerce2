import React from 'react'
import bg2 from '../assets/back.png'
import { features } from '../constants'
const Body = () => {
    return (
        <>
            <div
                className="w-full lg:h-214.5 h-100 bg-cover bg-center relative"
                style={{ backgroundImage: `url(${bg2})` }}
            >
                <div className='flex flex-col lg:max-w-7xl max-w-xs mx-auto w-full  pt-9 gap-4'>
                    <span className='text-white font-semibold lg:text-[48px] text-xl max-w-xl  solway'>The World First Jewellery  E Commerce Platform Explore The Future Talent </span>
                    <span className='text-white text-[16px] font-semibold max-w-xl '>
                        Discover the future of jewelry shopping with our innovative e-commerce platform, showcasing exceptional talent and unique designs.
                    </span>
                </div>

                <div className="absolute bottom-0 left-0 w-full">
  <div className="bg-[#222222]/70 backdrop-blur-md">
    <div className="max-w-7xl mx-auto px-4 py-6 ">

      <div className="
        grid
        grid-cols-2
        gap-y-6 gap-x-4
        sm:grid-cols-2
        md:grid-cols-4
        text-center
      ">
        {features.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center justify-center text-white"
          >
            {/* Icon */}
            <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center mb-2">
              <img
                src={item.icon}
                alt={item.title}
                className="w-6 h-6"
              />
            </div>

            {/* Text */}
            <p className="font-semibold text-sm sm:text-base">
              {item.title}
            </p>
            <p className="text-xs sm:text-sm text-white/70">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

    </div>
  </div>
</div>


            </div>
        </>
    )
}

export default Body

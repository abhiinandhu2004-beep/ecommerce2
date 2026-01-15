import React from 'react'
import bg2 from '../assets/back.png'
import { features } from '../constants'
const Body = () => {
  return (
    <>
      <div
        className="w-full lg:h-214.5 h-170 bg-cover bg-center relative"
        style={{ backgroundImage: `url(${bg2})` }}
      >
        <div className='flex flex-col lg:max-w-7xl max-w-xs mx-auto w-full  pt-30 gap-4'>
          <span className='text-white font-semibold lg:text-[48px] text-xl max-w-xl  solway'>The World First Jewellery  E Commerce Platform Explore The Future Talent </span>
          <span className='text-white text-[16px] font-semibold max-w-xl '>
            Discover the future of jewelry shopping with our innovative e-commerce platform, showcasing exceptional talent and unique designs.
          </span>
        </div>

        <div className="absolute bottom-0 left-0 w-full">
          <div className="bg-[#222222]/70 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-4 py-2 lg:py-15 h-40 lg:h-61.5">

              <div className="
        grid
        grid-cols-2
        gap-y-2 gap-x-2
        lg:gap-y-6 lg:gap-x-4
        sm:grid-cols-2
        md:grid-cols-4
        text-center
      ">
                {features.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col items-center justify-center text-white "
                  >
                    <div className="lg:w-15 lg:h-15 w-5 h-5 rounded-full bg-black flex items-center justify-center mb-2">
                      <img
                        src={item.icon}
                        alt={item.title}
                        className="w-10 h-10"
                      />
                    </div>

                    <p className="font-semibold text-xs lg:text-sm sm:text-base">
                      {item.title}
                    </p>
                    <p className="text-xs lg:text-sm text-white/70">
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

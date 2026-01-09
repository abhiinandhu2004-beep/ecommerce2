import React from 'react'
import Logo from '../assets/logo.png'
import { Search, Bell, CircleUser, Heart, ShoppingCart } from 'lucide-react'
import { nav } from '../constants'



const Navbar = () => {
  return (
    <div className="w-full bg-[#E7F66C] flex flex-col items-center">

      <div className="w-full flex flex-row items-center lg:justify-between lg:px-12 px-5 py-3 gap-y-4">

        <img
          src={Logo}
          alt="logo"
          className="w-32 lg:w-40 h-10 mb- lg:mb-0"
        />

        <div className="flex flex-col items-center lg:flex-row gap-4 lg:gap-10">

          <div className=" items-center gap-2 bg-white px-10 py-1 rounded-md w-full max-w-xs hidden lg:flex">
            <Search className="w-5 text-gray-600" />
            <input
              type="text"
              placeholder="Search Here"
              className="outline-none w-full text-sm"
            />
          </div>

          <div className="flex gap-6 px-10">
            <Bell className="w-5" />
            <CircleUser className="w-5" />
            <Heart className="w-5" />
            <ShoppingCart className="w-5" />
          </div>

        </div>
      </div>

      <div className="hidden lg:flex gap-12 pb-3">
        {nav.map(item => (
          <span
            key={item}
            className="text-sm font-medium cursor-pointer hover:underline"
          >
            {item}
          </span>
        ))}
      </div>

    </div>
  )
}

export default Navbar

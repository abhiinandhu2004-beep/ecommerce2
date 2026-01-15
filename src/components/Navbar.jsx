import React from 'react'
import Logo from '../assets/logo.png'
import { Search, Bell, CircleUser, Heart, ShoppingCart } from 'lucide-react'
import { nav } from '../constants'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useWishlist } from '../context/Agdcontext'

const Navbar = () => {

  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { wishlist,cart } = useWishlist();

  return (
    <div className="w-full bg-[#E7F66C] flex flex-col items-center">

      <div className="w-full flex flex-row items-center lg:justify-between lg:px-12 px-2 py-2 gap-y-4">

        <button
          onClick={() => setOpen(true)}
          className="lg:hidden"
        >
          <Menu className="w-6 h-6" />
        </button>

        <img
          src={Logo}
          alt="logo"
          className="w-45 lg:w-40 h-10 mb- lg:mb-0 px-10 lg:px-0"
          onClick={() => navigate('/')}
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

          <div className="flex gap-4 lg:gap-6  px-0 relative">
            <div className=' w-7 h-7 lg:w-9 lg:h-9 bg-black/70 rounded-full flex items-center justify-center cursor-pointer'>
              <Bell className="w-3 lg:w-5 text-white" />
            </div>
            <div className='w-7 h-7 lg:w-9 lg:h-9 bg-black/70 rounded-full flex items-center justify-center cursor-pointer'>
              <CircleUser className="w-3 lg:w-5 text-white" />
            </div>
            <div className="relative w-7 h-7  lg:w-9 lg:h-9 bg-black/70 rounded-full flex items-center justify-center cursor-pointer">
              <Heart
                className="w-3 lg:w-5 text-white"
                onClick={() => navigate('/wish')}
              />

              {wishlist.length > 0 && (
                <span
                  className="absolute -top-1 -right-1 bg-[#DBF227] text-black
                  text-[10px] font-bold w-3 h-3lg:w-4 lg:h-4 flex items-center justify-center
                  rounded-full"
                >
                  {wishlist.length}
                </span>
              )}
            </div>

            <div className='w-7 h-7 lg:w-9 lg:h-9 bg-black/70 rounded-full flex items-center justify-center cursor-pointer'>
              <ShoppingCart className="w-3 lg:w-5 text-white" onClick={() => navigate('/cart')} />
              {cart.length > 0 && (
                <span
                  className="absolute -top-1 -right-1 bg-[#DBF227] text-black
                  text-[10px] font-bold w-4 h-4 flex items-center justify-center
                  rounded-full"
                >
                  {cart.length}
                </span>
              )}
            </div>
          </div>

        </div>
      </div>

      <div className="hidden lg:flex gap-12 pb-3">
        {nav.map(item => (
          <span
            key={item}
            className="text-sm font-medium cursor-pointer hover:underline
            hover:scale-105 transition-transform duration-300 "
          >
            {item}
          </span>
        ))}
      </div>

      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Mobile sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-50 bg-[#E7F66C]
        z-50 transform transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Sidebar header */}
        <div className="flex items-center justify-between px-4 py-4 border-b">
          <img src={Logo} alt="logo" className="w-28" />
          <button onClick={() => setOpen(false)}>
            <X />
          </button>
        </div>

        <div className='flex flex-col gap-7 items-start mt-10 px-8 '>
          {nav.map(item => (
            <span
              key={item}
              className="text-lg font-medium cursor-pointer hover:underline"
            >
              {item}
            </span>
          ))}
        </div>

      </div>
    </div>
  )
}

export default Navbar



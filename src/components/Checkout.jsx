import { items, products } from '../constants';
import { payments } from '../constants'
import { useState } from "react"
import { useNavigate } from 'react-router-dom'
import { useWishlist } from "../context/Agdcontext";
const Checkout = () => {

  const [method, setMethod] = useState("")
  const navigate = useNavigate();

  const [form, setForm] = useState({
    phone: "",
    pincode: "",
    house: "",
    road: "",
    city: "",
    state: "",
  });


  // const {name,setName} = useWishlist();

  const { name, setName, cart, addOrder, quantity, totalPrice, productName } = useWishlist();




  const handleBuyNow = () => {
    const newOrder = {
      id: Date.now(),
      productname: productName,
      username: name,
      date: new Date().toDateString(),
      quantity: quantity,
      total: totalPrice,
      discount: "5000 saved",
    };

    addOrder(newOrder);
    navigate("/order");
  };

  const handleSubmitOrder = () => {
    if (
      !name ||
      !form.phone ||
      !form.pincode ||
      !form.house ||
      !form.road ||
      !form.city ||
      !form.state ||
      !method
    ) {
      alert("Please fill all required details");
      return;
    }

    // ✅ all good → place order
    handleBuyNow();
  };



  return (
    <div className="flex flex-col lg:flex-row w-full min-h-screen gap-8 px-4 sm:px-6 lg:px-10 pt-16">

      <div className="flex flex-col w-full lg:w-2/3 px-2 sm:px-6 lg:px-20">

        <h1 className="text-white/80 text-2xl dmSans">
          Checkout Page
        </h1>

        <div className="flex items-center mt-5">
          <div className="w-full max-w-3xl p-6 rounded-lg">

            <form className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white">

              <input
                type="text"
                placeholder="Full name*"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="input md:col-span-2"
                required
              />
              <input
                type="text"
                placeholder="Phone number*"
                className="input"
                onChange={(e) =>
                  setForm({ ...form, phone: e.target.value })
                }
                required
              />
              <input
                type="text"
                placeholder="Pincode*"
                className="input"
                onChange={(e) =>
                  setForm({ ...form, pincode: e.target.value })
                }
                required
              />
              <input
                type="text"
                placeholder="house number / building name*"
                className="input"
                onChange={(e) =>
                  setForm({ ...form, house: e.target.value })
                }
                required
              />
              <input
                type="text"
                placeholder="road name, area colony*"
                className="input"
                onChange={(e) =>
                  setForm({ ...form, road: e.target.value })
                }
                required
              />
              <input
                type="text"
                placeholder="City*"
                className="input"
                onChange={(e) =>
                  setForm({ ...form, city: e.target.value })
                }
                required
              />
              <select className="input"
                onChange={(e) =>
                  setForm({ ...form, state: e.target.value })
                }>
                <option value="">state*</option>
                <option>Kerala</option>
                <option>Tamil Nadu</option>
                <option>Karnataka</option>
              </select>
              <input
                type="text"
                placeholder="Landmark"
                className="input md:col-span-2"
                onChange={(e) =>
                  setForm({ ...form, landmark: e.target.value })
                }
                required
              />
              <div className="flex items-center gap-2 mt-2 md:col-span-2">
                <input type="checkbox" />
                <span className="text-sm text-blue-400">
                  Save Address
                </span>
              </div>

            </form>
          </div>
        </div>

        <div className="flex flex-col mt-8">
          <h2 className="text-white/80 text-2xl dmSans">
            Payment Method
          </h2>
          <h2 className="text-white/80 text-sm dmSans">
            choose Payment Method
          </h2>

          <div className="w-full border border-gray-600 mt-4" />

          <div className="text-white p-6 max-w-xl rounded-md">
            <h2 className="text-lg font-semibold">
              Payment Method
            </h2>
            <p className="text-sm text-gray-400 mb-4">
              choose your payment method
            </p>

            <div>
              {payments.map((item) => (
                <label
                  key={item.id}
                  className="flex items-center gap-4  border-b border-gray-700 cursor-pointer"
                >
                  <input
                    type="radio"
                    name="payment"
                    value={item.id}
                    checked={method === item.id}
                    onChange={() => setMethod(item.id)}
                    className="accent-blue-500"
                  />

                  <img
                    src={item.icon}
                    alt={item.label}
                    className="w-20 h-20 object-contain"
                  />

                  <span className="text-sm">
                    {item.label}
                  </span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-1/3 flex justify-center lg:justify-start lg:h-80">

        <div className="w-full max-w-sm border border-gray-700 rounded-lg text-white p-4 lg:sticky lg:top-20">

          <h1 className="text-white/80 text-lg dmSans">
            Order Summary
          </h1>

          <h1 className="text-white/80 text-sm dmSans mt-1">
            Total (<span>{quantity}</span> items)
          </h1>

          <div className="w-full border border-gray-600 mt-4 border-dashed" />

          <div className="flex justify-between mt-4">
            <h1 className="text-white/80 text-lg dmSans">
              Total Payable
            </h1>
            <h1 className="text-white/80 text-lg dmSans font-bold">
              {totalPrice}
            </h1>
          </div>

          <div className="w-full border border-gray-600 mt-4" />

          <h1 className="text-green-600 text-xs dmSans mt-2">
            You totally saved 5000. hurray!..
          </h1>

          <h1 className="text-white/80 text-sm dmSans mt-3">
            Do you have Voucher code
          </h1>

          <div className='flex justify-between '>
            <input type="text" placeholder='enter the code' className='bg-white/70 px-3 py-1 mt-2 placeholder:text-gray-700
          text-gray-700 focus:outline-none rounded' />
          <button className='bg-[#DBF227]/90 text-black px-4 py-1 rounded-md mt-2'>
            Apply code
          </button>
          </div>

          <button className="w-full mt-5 bg-[#DBF227] text-black px-4 py-2 rounded-md"
            onClick={() => { handleSubmitOrder() }}>
            Buy Now
          </button>

        </div>
      </div>
    </div>
  )
}

export default Checkout

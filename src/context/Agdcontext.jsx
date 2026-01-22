// import { createContext, useContext, useState } from "react";

// const WishlistContext = createContext();

// export const AgdProvider = ({ children }) => {
//   const [wishlist, setWishlist] = useState([]);
//   const [cart, setCart] = useState([]);
//   const [name, setName] = useState("");

//   const toggleWishlist = (item) => {

//     setWishlist((prev) => {
//       const exists = prev.some((w) => w.id === item.id);

//       if (exists) {
//         const updated = prev.filter((w) => w.id !== item.id);
//         return updated;
//       } else {
//         const updated = [...prev, item];
//         return updated;
//       }
//     });
//   };

//   const toggleCart = (item) => {

//     setCart((prev) => {
//       const exists = prev.some((c) => c.id === item.id);
//       if (exists) {
//         return prev 
//       } else {
//         return [...prev, item];
//       }
//     });
//   };

//   const removeFromCart = (itemId) => {
//     setCart((prev) => prev.filter((c) => c.id !== itemId));
//   };

//   return (
//     <WishlistContext.Provider
//       value={{
//         wishlist,
//         toggleWishlist,
//         cart,
//         toggleCart,
//         removeFromCart,
//         name,
//         setName
//       }}
//     >
//       {children}
//     </WishlistContext.Provider>
//   );
// };

// export const useWishlist = () => {
//   const context = useContext(WishlistContext);

//   if (!context) {
//     throw new Error("useWishlist must be used inside AgdProvider");
//   }

//   return context;
// };

// export default AgdProvider;


import { createContext, useContext, useState } from "react";
import { products } from '../constants'
import { useNavigate } from "react-router-dom";

const WishlistContext = createContext();

export const AgdProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [id,setId] = useState()
  const navigate = useNavigate();


 

   

  // ✅ NEW: orders state
  const [orders, setOrders] = useState(
    JSON.parse(localStorage.getItem("orders")) || []
  );

  const toggleWishlist = (item) => {
    setWishlist((prev) => {
      const exists = prev.some((w) => w.id === item.id);
      return exists
        ? prev.filter((w) => w.id !== item.id)
        : [...prev, item];
    });
  };

  const toggleCart = (item) => {
    setCart((prev) => {
      const exists = prev.some((c) => c.id === item.id);
      return exists ? prev : [...prev, item];
    });
  };

  const removeFromCart = (itemId) => {
    setCart((prev) => prev.filter((c) => c.id !== itemId));
  };

  // ✅ NEW: add order
  const addOrder = (order) => {
    const updatedOrders = [order, ...orders];
    setOrders(updatedOrders);
    localStorage.setItem("orders", JSON.stringify(updatedOrders));
  };

  const unitPrice = Number(products[0]?.price || 18000);
  const totalPrice = unitPrice * quantity;

  const totaloldPrice = unitPrice * quantity + 5000;

  const clearOrders = () => {
  setOrders([]);
};


const  handleCheckout = (id) => {
  setId(id);
  
 navigate(`/buynow/${id}`);
}


const productName = products.find(
  (item) => item.id === Number(id)
)?.name || "Product";



  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        toggleWishlist,
        cart,
        toggleCart,
        removeFromCart,
        name,
        setName,
        orders,
        addOrder,
        price,
        setPrice,
        quantity,
        setQuantity,
        unitPrice,
        totalPrice,
        clearOrders,
        handleCheckout,
        productName,
        totaloldPrice
    
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error("useWishlist must be used inside AgdProvider");
  }
  return context;
};

export default AgdProvider;

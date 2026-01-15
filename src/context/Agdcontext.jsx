import { createContext, useContext, useState } from "react";

const WishlistContext = createContext();

export const AgdProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);

  const toggleWishlist = (item) => {

    setWishlist((prev) => {
      const exists = prev.some((w) => w.id === item.id);

      if (exists) {
        const updated = prev.filter((w) => w.id !== item.id);
        return updated;
      } else {
        const updated = [...prev, item];
        return updated;
      }
    });
  };

  const toggleCart = (item) => {

    setCart((prev) => {
      const exists = prev.some((c) => c.id === item.id);
      if (exists) {
        return prev 
      } else {
        return [...prev, item];
      }
    });
  };

  const removeFromCart = (itemId) => {
    setCart((prev) => prev.filter((c) => c.id !== itemId));
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        toggleWishlist,
        cart,
        toggleCart,
        removeFromCart
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

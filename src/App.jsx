import {Routes, Route } from "react-router-dom";
import Layout from './components/Layout'
import Home from "./components/Home";
import Offers from "./components/Offers";
import Wishlist from "./components/Wishlist";
import Cart from "./components/Cart";
import Buynow from "./components/Buynow";

const App = () => {
  return (
    
      <Routes>

        {/* Layout route */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/wish" element={<Wishlist />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/buynow" element={<Buynow/>}/>
        </Route> 

      </Routes>
    
  );
};

export default App;

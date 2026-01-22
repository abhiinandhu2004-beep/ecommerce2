import { Search } from "lucide-react";
import { useWishlist } from "../context/Agdcontext";
import { useNavigate } from "react-router-dom"
import { products } from "../constants";

const Orderhistory = () => {
    const { orders, clearOrders } = useWishlist();
    const navigate = useNavigate();
    console.log(orders,"orders");
    

    if (orders.length === 0) {
        return (
            <div className="text-white text-center mt-20">
                No orders yet 🛒
            </div>
        );
    }

    return (
        <div className="flex max-w-5xl mx-auto w-full items-center">
            <div className="w-full p-6 rounded-lg text-white">
               <div className="flex justify-between">
                 <h1 className="text-3xl mb-6 bodoni-moda">
                    Order History
                </h1>
                <button
                    onClick={clearOrders}
                    className="mb-6 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
                >
                    Clear Order History
                </button>
               </div>


                {orders.map((order) => (
                    <div
                        key={order.id}
                        className="bg-[#1c1c1c] rounded-lg p-6 mb-6 flex justify-between items-center"
                    >
                        <div>
                            <p className="text-sm text-white font-semibold">
                                {order.productname}
                            </p>
                            <p className="text-xs text-gray-500">
                                Ordered on {order.date}
                            </p>
                            <p className="text-sm mt-2">
                                SHIPPED TO :{" "}
                                <span className="text-blue-400 font-semibold">
                                    {order.username}
                                </span>
                            </p>
                        </div>

                        <div className="text-right">
                            <p className="text-sm">
                                TOTAL{" "}
                                <span className="font-bold">
                                    ₹{order.total}
                                </span>
                            </p>
                            <p className="text-xs text-green-400">
                                {order.discount}
                            </p>
                            <button
                                className="mt-3 bg-[#DBF227] text-black px-4 py-2 rounded"
                                onClick={() => navigate(`/order/${order.id}`)}
                            >
                                View Order
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Orderhistory;

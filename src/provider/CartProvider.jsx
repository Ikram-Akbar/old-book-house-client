/* eslint-disable react/prop-types */

import { createContext, useState } from "react";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

export const CartContext = createContext()
const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart([...cart, product]);
        toast.success("Add to Cart Successfully");
    };
    const removeFromCart = (productId) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                const remainItems = cart.filter((item) => item.id !== productId);
                setCart([remainItems]);
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
        });
    }
    


    const cartInfo = {
        cart,
        addToCart,
        removeFromCart
    }
    return (
        <CartContext.Provider value={cartInfo}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
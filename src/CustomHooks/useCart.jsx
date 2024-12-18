import { useContext } from "react";
import  { CartContext } from "../provider/CartProvider";

export const useCart = () => useContext(CartContext);
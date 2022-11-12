import cart from "./cart.svg"
import "./cart.css"
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export const CardWidget = () => {
    const {getTotalProd} = useContext(CartContext)
    
    return(
        <div className="cart-img">
            <img src={cart} alt="" />
            {/* <span>{getTotalProd()}</span> */}
            <div className="cart-p">
                <p>{getTotalProd()}</p>
            </div>
        </div>
    )
}
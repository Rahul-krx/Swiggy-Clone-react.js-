import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () =>{
    const cartItems = useSelector((store) => store.Cart?.items || []);

    const dispatch = useDispatch();
const handleClearcart = () =>{
    dispatch(clearCart)

}

    return(
        <div>
          <h1 className="text-center text-2xl font-bold">Cart</h1>
          <div>
            <button className="p-2 m-3 rounded-lg bg-blue-500 " onClick={handleClearcart} >Clear Cart</button>
            {cartItems.length === 0 && <h2 className="text-center -mt-6 text-xl font-semibold">Your cart is empty!🥲</h2>}
            <ItemList items={cartItems}/>
          </div>
        </div>
    )
}
export default Cart;
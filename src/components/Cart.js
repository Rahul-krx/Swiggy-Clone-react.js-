import { useSelector } from "react-redux";
import ItemList from "./ItemList";

const Cart = () =>{
    const cartItems = useSelector((store) => store.Cart.items);
    return(
        <div>
          <h1 className="text-center text-2xl font-bolds">Cart</h1>
          <div>
            <ItemList items={cartItems}/>
          </div>
        </div>
    )
}
export default Cart;
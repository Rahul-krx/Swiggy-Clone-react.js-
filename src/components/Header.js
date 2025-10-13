import { LOGO_URL } from "../utils/constants";
import { useContext, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () =>{
  // const btnName = 'Login';

  const [btnName, setbtnName]= useState("Login");

  const {LoggedInUser} = useContext(UserContext);
  // console.log(LoggedInUser)


  // if no dependency array in useEffect => useEffect will be called on every render.
  // if dependency array is empty [] => useEffect is called on initial render(just once).
  // useEffect(() =>{}, []);
  // if dependency array is[btnName] => called every time when button clicked.(and it`s state changes).
  // useEffect(() =>{
  //   console.log('useEffect called');
  // })
  const onlineStatus = useOnlineStatus();

  const cartItems = useSelector((store) => store.cart.items );
  console.log(cartItems);
  return(
    
    <div className="flex  justify-between border-b-1">
      <div className="logo-container">
    <img className="logo w-30 " src={LOGO_URL}/>
    </div>
  
    <div className="nav-items p-4 m-4 ">
      <ul className="flex items-center text-xl font-semibold">
        <li className="px-4">Online Status: {onlineStatus ? "✅" : "🔴"}</li>
        <li className="px-4"> <Link to="/"> Home </Link></li>
        <li className="px-4"><Link to="/about"> About </Link></li>
        <li className="px-4"> <Link to="/contact"> Contact us </Link></li>
        <li className="px-4"> <Link to="/grocery"> Grocery </Link></li>
        <li className="cart px-4 "><Link to={"/cart"}> <FontAwesomeIcon icon={faCartShopping} />{cartItems.length}</Link></li>

        {/* if you click on btn then react will re render the whole header  */}
      <button className="btn px-4 border-1 rounded-lg py-2 bg-blue-400 " onClick={() => {
        btnName === "Login" ? setbtnName('Logout'): setbtnName('Login')}}>{btnName}</button>  
        <li>User: {LoggedInUser}</li> 
      </ul>
    </div>
     </div>
   
  )
};
export default Header;
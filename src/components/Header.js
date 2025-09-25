import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

const Header = () =>{
  // const btnName = 'Login';

  const [btnName, setbtnName]= useState("Login");


  // if no dependency array in useEffect => useEffect will be called on every render.
  // if dependency array is empty [] => useEffect is called on initial render(just once).
  // useEffect(() =>{}, []);
  // if dependency array is[btnName] => called every time when button clicked.(and it`s state changes).
  // useEffect(() =>{
  //   console.log('useEffect called');
  // })

  return(
    
    <div className="header">
      <div className="logo-container">
    <img className="logo" src={LOGO_URL}/>
    </div>
  
    <div className="nav-items">
      <ul>
        <li> <Link to="/"> Home </Link></li>
        <li><Link to="/about"> About </Link></li>
        <li> <Link to="/contact"> Contact us </Link></li>
        <li className="cart"><FontAwesomeIcon icon={faCartShopping} /></li>

        {/* if you click on btn then react will re render the whole header  */}
      <button className="btn" onClick={() => {
        btnName === "Login" ? setbtnName('Logout'): setbtnName('Login')}}>{btnName}</button>   
      </ul>
    </div>
     </div>
   
  )
};
export default Header;
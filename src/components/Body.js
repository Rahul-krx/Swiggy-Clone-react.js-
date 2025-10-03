import Restrocard from "./RestroCard";
// import ResList from "../utils/mockData";
import { useState, useEffect} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

// useState  is used for creating local state variable inside your functional component.

 const Body = () =>{
   const [resList, setResList] = useState([]);
   const [searchRes, setsearchRes] = useState("");
   const [filteredRestaurants, setfilteredRestaurants] = useState([]);


   useEffect(()=>{
    fetchData();

    // const interval = setTimeout(() => {
    //   fetchData();
    // }, 5000);
   }, []);

   const fetchData = async()=>{
    const data = await fetch("https://corsproxy.io/https://www.swiggy.com/dapi/restaurants/list/v5?lat=24.8032012&lng=84.9990981&offset=0&sortBy=RELEVANCE&pageType=SEE_ALL&page_type=DESKTOP_WEB_LISTING");

    const json = await data.json();
    console.log(json);
    // const restaurants =
    //   json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants ||
    //   [];
    // Instead of splitting into two steps, extract directly:
const restaurants =
  json?.data?.cards
    ?.find(
      (c) => c?.card?.card?.gridElements?.infoWithStyle?.restaurants
    )
    ?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];


    // const restaurants =
    //   json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants ||
    //   [];

    setResList(restaurants);
    setfilteredRestaurants(restaurants);
   };
  //  if(resList.length === 0){
  //   return <Shimmer/>
  //  }
  const onlineStatus = useOnlineStatus();
  
  if(onlineStatus === false)
    return(
      <h1>Looks like you`re offline, Please check your internet connection🥲</h1>
    )


  return resList.length === 0 ? (<Shimmer/>): (
    <div className="body">
      <div className="filter">
        <div className="search-box">
          <input type="text" className="search-input" value={searchRes} onChange={(e) =>{
            setsearchRes(e.target.value)
          }} />

          <button className="input-btn" onClick={()=>{
            const filteredRestaurants = resList.filter((res) => res?.info?.name?.toLowerCase().includes(searchRes.toLowerCase())  
            );
            setfilteredRestaurants(filteredRestaurants);

          }}>Search</button>
        </div>
        <button className="filter-btn" onClick={() =>{ 
          const filteredList = resList.filter((res) =>res.info.avgRating > 4.1
        )
        setfilteredRestaurants(filteredList);
          
        }}>Top Rated Retaurants </button>
      </div>
      <div className="res-container">
       {
        filteredRestaurants.map((restaurant) =>( 
       <Link key={restaurant.info.id}
        to={"/restaurants/" + restaurant.info.id}><Restrocard  resData = {restaurant}/></Link> ))
       }
      </div>
    </div>
  )
};
export default Body;
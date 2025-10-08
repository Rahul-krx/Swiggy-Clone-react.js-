import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({data, showItems, setshowIndex}) =>{

    const handleClick = () =>{
        setshowIndex();
    }
    // console.log(data.title);
    return(
        <div className="w-6/12 mx-auto bg-gray-50 shadow-lg   my-4 p-4">
        <div className=" flex justify-between cursor-pointer " onClick={handleClick}>
           <span className="font-bold text-xl">{data.title} ({data.itemCards.length})</span>
           <span>⬇️</span>
           </div>
           { showItems &&<ItemList items={data.itemCards}/>}
        </div>
    )
}
export default RestaurantCategory;
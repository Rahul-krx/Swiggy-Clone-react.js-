import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({data}) =>{

    const [showItems, setshowItems] = useState(false);

    const handleClick = () =>{
        setshowItems(!showItems);
    }
    // console.log(data.title);
    return(
        <div className="w-6/12 mx-auto bg-gray-50 shadow-lg   my-4 p-2">
        <div className=" flex justify-between cursor-pointer " onClick={handleClick}>
           <span className="font-bold text-xl">{data.title} ({data.itemCards.length})</span>
           <span>⬇️</span>
           </div>
           { showItems &&<ItemList items={data.itemCards}/>}
        </div>
    )
}
export default RestaurantCategory;
import ItemList from "./ItemList";

const RestaurantCategory = ({data}) =>{
    // console.log(data.title)
    return(
        <div className="w-6/12 mx-auto bg-gray-50 shadow-lg   my-4 p-2">
        <div className=" flex justify-between">
           <span className="font-bold text-xl">{data.title} ({data.itemCards.length})</span>
           <span>⬇️</span>
           </div>
           <ItemList items={data.itemCards}/>
        </div>
    )
}
export default RestaurantCategory;
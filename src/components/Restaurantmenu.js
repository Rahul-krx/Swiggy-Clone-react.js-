import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

import { useParams } from "react-router";
import RestaurantCategory from "./RestaurantCategory";
const Restaurantmenu = () => {
//   const [resInfo, setResInfo] = useState(null);
//   useEffect(() => {
//     fetchmenu();
//   }, []);

  const {resId} = useParams();
  const resInfo = useRestaurantMenu(resId);

  // const fetchmenu = async () => {
  //   const data = await fetch(MENU_API + resId );

  //   const json = await data.json();
  //   // console.log(json);
  //   setResInfo(json.data);
    //  };

      if(resInfo === null ) return <Shimmer />
  

    const infoCard = resInfo?.cards?.find(
     (c) => c?.card?.card?.info
);
    const { name, cuisines, costForTwoMessage, locality, avgRating, totalRatingsString, sla
 } =infoCard?.card?.card?.info || {};


 const itemCards =
  resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card?.itemCards || [];
  // console.log(itemCards);


      // const {itemCards} = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card;
      // console.log( resInfo.cards[5].groupedCard.cardGroupMap.REGULAR.cards);

      const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(c => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

      console.log(categories);

  return(
    <div className="menu text-center">
      <h1 className="font-bold text-2xl mt-2">{name}</h1>

      <h4 className="font-semibold text-xl mt-6 ">⭐{avgRating} - ({totalRatingsString}) -  {costForTwoMessage} </h4>
      <h2 className="underline text-amber-800 font-bold  mt-1">{cuisines.join(", ")}</h2>
      <ul>
        <li className="font-semibold mt-2 - opacity-80">{locality}</li>
        <li className="font-semibold mt-1">{sla.slaString}</li>
      </ul>
    

      {categories.map((category) =>
        (<RestaurantCategory key={category?.card?.card?.title} data= {category?.card?.card}/>))}
    </div>
  );
};
export default Restaurantmenu;

import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { MENU_API } from "../utils/constants";
import { useParams } from "react-router";
const Restaurantmenu = () => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchmenu();
  }, []);

  const {resId} = useParams();

  const fetchmenu = async () => {
    const data = await fetch(MENU_API + resId );

    const json = await data.json();
    // console.log(json);
    setResInfo(json.data);
      };

      if(resInfo === null ) return <Shimmer />
  

    const infoCard = resInfo?.cards?.find(
     (c) => c?.card?.card?.info
);
    const { name, cuisines, costForTwoMessage, locality, avgRating, totalRatingsString, sla
 } =infoCard?.card?.card?.info || {};


 const itemCards =
  resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card?.itemCards || [];


      // const {itemCards} = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card;
      console.log(itemCards);

  return(
    <div className="menu">
      <h1>{name}</h1>
      <h4>{avgRating} - ({totalRatingsString})</h4>
      <h4>{costForTwoMessage}</h4>
      <h2>{cuisines.join(", ")}</h2>
      <ul>
        <li>{locality}</li>
        <li>{sla.slaString}</li>
      </ul>

      <ul>
        {itemCards.map((item) =>(
          <li key={item.card.info.id}>{item.card.info.name} -{"Rs."}{item.card.info.price/100 || item.card.info.defaultPrice/100}</li>
        ))}
      </ul>
    </div>
  );
};
export default Restaurantmenu;

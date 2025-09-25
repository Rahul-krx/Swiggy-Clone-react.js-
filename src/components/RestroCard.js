import { CDN_URL } from "../utils/constants";

const Restrocard = (props) =>{
  const{resData} = props;
  const {cloudinaryImageId, name,cuisines, avgRating, costForTwo} = resData.info;

  // const {image, resName, cuisine} = props; - d estructuring;
  return( 
    
    <div className="res-card" >
      <img className="res-logo" src= {CDN_URL+ cloudinaryImageId} alt="image" />
      <h3>{name}</h3>
      <h5>{cuisines.join(", ")}</h5> 
      <h5>{avgRating} stars</h5>
      <h5>{costForTwo}</h5>

    </div>
   
  )
}
export default Restrocard;
import { CDN_URL } from "../utils/constants";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons';

const Restrocard = (props) =>{
  const{resData} = props;
  const {cloudinaryImageId, name,cuisines, avgRating, costForTwo} = resData.info;

  // const {image, resName, cuisine} = props; - d estructuring;
  return( 
    
    <div className="res-card border-2 rounded-lg w-54 h-96 p-4 m-2 bg-gray-100" >
      <img className="res-logo w-40 ml-2 rounded-md" src= {CDN_URL+ cloudinaryImageId} alt="image" />
      <h3 className="child text-amber-800 font-extrabold py-2">{name}</h3>
      <h5 className="child">{cuisines.join(", ")}</h5> 
      <h5 className="child"><FontAwesomeIcon icon={faStar} style={{color: "#63E6BE",}} /> {avgRating} stars</h5>
      <h5 className="child">{costForTwo}</h5>

    </div>
   
  )
}
export default Restrocard;
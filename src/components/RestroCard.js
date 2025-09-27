import { CDN_URL } from "../utils/constants";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons';

const Restrocard = (props) =>{
  const{resData} = props;
  const {cloudinaryImageId, name,cuisines, avgRating, costForTwo} = resData.info;

  // const {image, resName, cuisine} = props; - d estructuring;
  return( 
    
    <div className="res-card" >
      <img className="res-logo" src= {CDN_URL+ cloudinaryImageId} alt="image" />
      <h3 className="child">{name}</h3>
      <h5 className="child">{cuisines.join(", ")}</h5> 
      <h5 className="child"><FontAwesomeIcon icon={faStar} style={{color: "#63E6BE",}} /> {avgRating} stars</h5>
      <h5 className="child">{costForTwo}</h5>

    </div>
   
  )
}
export default Restrocard;
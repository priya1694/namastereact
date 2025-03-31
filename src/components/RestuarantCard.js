import {CDN_URL} from "../utils/constants"

const RestaurantCard = (props) => {
    const {resData} = props;
    const {name,
        cuisines,
        avgRatingString,
        totalRatingsString,
        cloudinaryImageId,
         } = resData?.info;
    return(
        <div className="res-card">
            <img alt="res-logo" className="res-logo" src={CDN_URL+cloudinaryImageId}/>
            <h4>{name}</h4>
            <h5>{cuisines.join(", ")}</h5> 
            <h5>{avgRatingString}</h5>
            <h5>{totalRatingsString}</h5>
        </div>
    )
}

export default RestaurantCard;
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
        <div className="m-4 p-4 w-[220px] h-[300px] rounded-lg bg-gray-200 hover:bg-gray-400 flex flex-col justify-between">
    <img alt="res-logo" className="rounded-lg h-[140px] object-cover" src={CDN_URL + cloudinaryImageId} />
    <div>
      <h4 className="font-bold py-2 text-lg truncate">{name}</h4>
      <h5 className="line-clamp-2 text-sm">{cuisines.join(", ")}</h5> 
      <h5>{avgRatingString}</h5>
      <h5>{totalRatingsString}</h5>
    </div>
</div>

    )
}

export default RestaurantCard;
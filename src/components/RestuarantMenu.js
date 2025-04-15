
import Shimmer from "./Shimmer";
import {useParams} from "react-router-dom";
import useRestuarantMenu from "../utils/useRestuarantMenu";

const RestaurantMenu = () => {

   const {resId}= useParams(); 
  const resInfo = useRestuarantMenu(resId);
 


  // Prevent early rendering if data is not ready
  if (!resInfo || !resInfo.cards || !resInfo.cards[2]) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } =
    resInfo.cards[2]?.card?.card?.info || {};

    const itemCards =
  resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card?.itemCards;
  return (
    <div>
      <h1>{name}</h1>
      <h2>{cuisines?.join(", ")} - {costForTwoMessage}</h2>
      {itemCards.map((item) => (
  <p key={item.card.info.id}>{item.card.info.name}</p>
))}

    </div>
  );
};

export default RestaurantMenu;

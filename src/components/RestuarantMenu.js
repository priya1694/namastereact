import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import {useParams} from "react-router-dom";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const {resId}= useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.916478843628367&lng=77.52107486128807&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER");
    
    const json = await data.json();
    console.log(json.data); // helpful to confirm structure
    setResInfo(json.data);
  };

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

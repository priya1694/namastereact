import RestaurantCard from "./RestuarantCard";
import { useState } from "react";
import { useEffect } from "react";
import Shimmer from "./Shimmer"
import {Link} from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
    const [listOfRestuarants, setListOfRestuarants] = useState([]);
    const [filterRestuarant,setFilterRestuarant] = useState([]);

    const [searchText,setSearchText] = useState("");

    useEffect(()=>{fetchData()},[]);
    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.916478843628367&lng=77.52107486128807&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const json = await data.json();
        console.log(json);
        console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        setListOfRestuarants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilterRestuarant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }; 

    const onlineStatus = useOnlineStatus();
    if(onlineStatus === false) return <h1>looks like your'e internet it down!!!!</h1>

    return listOfRestuarants.length === 0 ? (<Shimmer/> ):(
        <div className="body">
            <div className="filter flex"> 
                <div className="search m-4 p-4">
                    <input type="text" className="border border-solid border-black" value={searchText} onChange={(e) => setSearchText(e.target.value)}></input>
                    <button className="px-4 py-2 bg-green-100 m-4 rounded-lg" 
                    onClick ={() =>{
                        const filteredRestauarant = listOfRestuarants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                        setFilterRestuarant(filteredRestauarant);
                        }}>
                        search
                        </button>
                </div>
                <div className="search m-4 p-4 flex items-center">
                <button className="px-4 py-2 bg-gray-300 rounded-lg" 
                onClick={()=>{
                    const filteredList =listOfRestuarants.filter((res => res.info.avgRating > 4.5));
                       setFilterRestuarant(filteredList);
                }}>Top-Rated Restaurants</button>
            </div>
            </div>
                <div className="flex flex-wrap">
             {filterRestuarant.map((restaurant) => (
    <Link key={restaurant.info.id} to={"/restuarants/" + restaurant.info.id }><RestaurantCard  resData = {restaurant}/></Link>
))}


                </div>

        </div>
    )
}

export default Body;
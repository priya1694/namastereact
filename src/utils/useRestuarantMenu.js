import { useState , useEffect } from "react";

const useRestuarantMenu = (resId) => {
    const [resInfo,setResInfo] = useState(null);
    useEffect(() => {
        fetchMenu();
      }, []);
    
      const fetchMenu = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.916478843628367&lng=77.52107486128807&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER");
        
        const json = await data.json();
        console.log(json.data); // helpful to confirm structure
        setResInfo(json.data);
      };
      return resInfo;
};

export default useRestuarantMenu;
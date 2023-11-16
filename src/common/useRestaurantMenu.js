// Take restaurant id and fetch restaurant details
import { MENU_API } from "./constants";
import { useState, useEffect } from "react";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  const accessToken = localStorage.getItem("accessToken");

  console.log("accessToken", accessToken);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("http://localhost:5000/api/restaurant/" + resId, {
      headers: {
        Authorization: `JWT ${accessToken}`,
      },
    }); // promise
    const json = await data.json();
    setResInfo(json);
  };

  return resInfo;
};

export default useRestaurantMenu;

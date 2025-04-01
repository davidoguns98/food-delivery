import React, { useContext, useState } from "react";
import "./FoodDisplay.css";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);
  const [visibleCount, setVisibleCount] = useState(6);

  // Filter items based on category
  const filteredFood = food_list.filter(
    (item) => category === "All" || category === item.category
  );

  const showMore = () => {
    setVisibleCount((prevCount) => prevCount + 6);
  };

  return (
    <div className="food-display" id="food-display">
      <h2>Top dishes near you</h2>
      <div className="food-display-list">
        {filteredFood.slice(0, visibleCount).map((item) => (
          <FoodItem
            key={item._id}
            id={item._id}
            name={item.name}
            description={item.description}
            image={item.image}
            price={item.price}
          />
        ))}
      </div>
      {visibleCount < filteredFood.length && (
        <button className="show-more" onClick={showMore}>
          Show More
        </button>
      )}
    </div>
  );
};

export default FoodDisplay;

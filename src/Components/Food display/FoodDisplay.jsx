import React, { useContext } from "react";
import "./FoodDisplay.css";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";
import PaginatedList from "../../Utils/Pagination";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  return (
    <div className="food-display" id="food-display">
      <h2> Top dishes near you</h2>
      <div className="food-display-list">
        {food_list
          .filter((item) => category === "All" || category === item.category)
          .map((item) => (
            <PaginatedList
              key={item._id} // Use unique id for key
              items={[
                // Wrap the FoodItem in an array
                <FoodItem
                  key={item._id} // Assign a unique key to FoodItem as well
                  id={item._id}
                  name={item.name}
                  description={item.description}
                  image={item.image}
                  price={item.price}
                />,
              ]}
            />
          ))}
      </div>
    </div>
  );
};

// const FoodDisplay = ({ category }) => {
//   const { food_list } = useContext(StoreContext);

//   return (
//     <div className="food-display" id="food-display">
//       <h2> Top dishes near you</h2>
//       <div className="food-display-list">
//         {food_list.map((item, index) => {
//           if (category === "All" || category === item.category) {
//             return (
//               <PaginatedList
//                 key={index}
//                 items={
//                   <FoodItem
//                     id={item._id}
//                     name={item.name}
//                     description={item.desription}
//                     image={item.image}
//                     price={item.price}
//                   />
//                 }
//               />
//             );
//           }
//         })}
//       </div>
//     </div>
//   );
// };

export default FoodDisplay;

import React from "react";
import Item from "./item";

export default function ItemList({ food, loading }) {
  return (
    <div>
      <h2>Ingredients</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        food.extendedIngredients.map((item) => (
          <Item key={item.id} item={item} />
        ))
      )}
    </div>
  );
}

import { useEffect, useState } from 'react';
import styles from './fooddetails.module.css';
import ItemList from './itemlist'; // Ensure the correct path to ItemList component

export default function FoodDetail({ FoodId }) {
  const [food, setFood] = useState({});
  const [loading, setLoading] = useState(true);
  const url = `https://api.spoonacular.com/recipes/${FoodId}/information`;
  const apiKey = "28bb65ace3e749f88ceb3838e8308d99";

  useEffect(() => {
    async function getFoodDetail() {
      try {
        const res = await fetch(`${url}?apiKey=${apiKey}`);
        const data = await res.json();
        setFood(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching food details:", error);
        setLoading(false);
      }
    }
    getFoodDetail();
  }, [FoodId]);

  return (
    <div className={styles.foodContent}>
      {loading ? (
        "Loading..."
      ) : (
        <>
          <h1 className={styles.heading}>{food.title}</h1>
          <img className={styles.recepiImage} src={food.image} alt={food.title} />
          <div className={styles.recepiDetails}>
            <span><strong>{food.readyInMinutes} Minutes</strong></span>
            <span>Serve: {food.servings}</span>
            <span><strong>{food.vegetarian ? "Vegetarian" : "Non-vegetarian"}</strong></span>
            {food.vegan && <span>Vegan</span>}
          </div>
          <div>
            <span><strong>Price per serving: ${(food.pricePerServing / 100).toFixed(2)}</strong></span>
          </div>
          <div className={styles.recepiInstuctions}>
            {food.extendedIngredients && (
              <ItemList food={food} loading={false} />
            )}
            <h1>Instructions</h1>
            <ol>
              {food.analyzedInstructions && food.analyzedInstructions.length > 0 &&
                food.analyzedInstructions[0].steps.map((step, index) => (
                  <li key={index}>{step.step}</li>
                ))}
            </ol>
          </div>
        </>
      )}
    </div>
  );
}

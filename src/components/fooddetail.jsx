import { useEffect, useState } from 'react';
import styles from './fooddetails.module.css';

export default function FoodDetail({ FoodId }) {
  const [food, setFood] = useState({});
  const [loading, setLoading] = useState(true);
  const url = `https://api.spoonacular.com/recipes/${FoodId}/information`;
  const apiKey = "28bb65ace3e749f88ceb3838e8308d99";

  useEffect(() => {
    async function getFoodDetail() {
      const res = await fetch(`${url}?apiKey=${apiKey}`);
      const data = await res.json();
      console.log(data);
      setFood(data);
      setLoading(false);
    }
    getFoodDetail();
  }, [FoodId]);

  return (
    <div className={styles.foodContent}>
      {loading ? (
        "Loading..."
      ) : (
        <>
          <h1>{food.title}</h1>
          <img src={food.image} alt={food.title} />
          <div>
            <span>
              <strong>{food.readyInMinutes} Minutes</strong>
            </span>
            <span>Serve: {food.servings}</span>
            <span>{food.vegetarian ? "Vegetarian" : "Non-vegetarian"}</span>
            {food.vegan && <span>Vegan</span>}
          </div>
          <div>
            Price per serving: ${(food.pricePerServing / 100).toFixed(2)}
          </div>
          <div>
            <h1>Instructions</h1>
            <ol>
              {food.analyzedInstructions &&
                food.analyzedInstructions.length > 0 &&
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

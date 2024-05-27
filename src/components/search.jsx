import { useEffect, useState } from "react";
import styles from "./search.module.css";

const url = `https://api.spoonacular.com/recipes/complexSearch`;
const apiKey = "28bb65ace3e749f88ceb3838e8308d99";

export default function Search({ setFoodData }) {
  const [query, setQuery] = useState("pizza");

  useEffect(() => {
    async function fetchFood() {
      try {
        const res = await fetch(`${url}?query=${query}&apiKey=${apiKey}`);
        const data = await res.json();
        console.log(data);
        setFoodData(data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchFood();
  }, [query]);

  return (
    <div className={styles.searchcontainer}>
      <input
        className={styles.input}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
      />
    </div>
  );
}

import styles from './fooditem.module.css';
export default function FoodItem({fooditem,index,setFoodId}){
    return <div className={styles.itemcontainer}>
        <img className={styles.itemImage} src={fooditem.image}/>
        <div className={styles.itemcontent}>
        <p key={index} className={styles.itemname} >{fooditem.title}</p>
        
        </div>
        <div className={styles.itembuttoncontainer}>
        <button onClick={()=>{console.log(fooditem.id); setFoodId(fooditem.id)}} className={styles.itembutton}>View Recipe</button>
        </div>
    </div> 
}
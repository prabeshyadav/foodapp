import FoodItem from './fooditem';
export default function FoodList({foodData,setFoodId}){
    return <div>
    {foodData.map((fooditem) => (
        <FoodItem key={fooditem.id} setFoodId={setFoodId} fooditem={fooditem} />
        
      ))}
      </div>
}
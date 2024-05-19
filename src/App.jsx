import { useState } from 'react';
import Search from './components/search';
import FoodList from './components/foodlist';
import Nav from './components/nav';
import Container from './components/container';
import InnerComponent from './components/innercomponent';
import FoodDetail from './components/fooddetail';
import './app.css';

function App() {
  const [foodData, setFoodData] = useState([]);
  const [FoodId,setFoodId] = useState([]);

  return (
    <div className="App">
      <Nav></Nav>
      
      <Search foodData={foodData} setFoodData={setFoodData} /> {/* Corrected prop name here */}

      <Container>
        <InnerComponent>
        <FoodList setFoodId={setFoodId} foodData={foodData}/>
        </InnerComponent>
        <InnerComponent>
          <FoodDetail FoodId={FoodId}/>
        </InnerComponent>
       
      </Container>
    </div>
  );
}

export default App;

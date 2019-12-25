import React from 'react';
import PropTypes from 'prop-types';
function Food({name, rating}){
  return (
    <div>
      <h1>i like {name}</h1>
      <h4>{rating}/5.0</h4>
    </div>
  )
}

const foodLike = [
  {
    id:1,
    name: "김치",
    rating: 5
  },
  {
    id:2,
    name: "삼겹살",
    rating: 4.7
  },
  {
    id:3,
    name: "라면",
    rating: 3
  }

]

Food.propTypes = {
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
}

function App() {
  return (
    <div>
      {foodLike.map(dish => 
        <Food key={dish.id} name={dish.name} rating={dish.rating} />
      )}
    </div>
    
  );
}

export default App;

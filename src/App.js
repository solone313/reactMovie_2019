import React from 'react';

function Food({name}){
  return <h1>i like {name}</h1>
}

const foodLike = [
  {
    name: "김치"
  },
  {
    name: "삼겹살"
  },
  {
    name: "라면"
  }

]

function App() {
  return (
    <div>
      {foodLike.map(dish => 
        <Food name={dish.name} />
      )}
    </div>
    
  );
}

export default App;

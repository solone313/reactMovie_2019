import React from 'react';

function Food({name}){
  return <h1>i like {name}</h1>
}

const foodLike = [
  {
    id:1,
    name: "김치"
  },
  {
    id:2,
    name: "삼겹살"
  },
  {
    id:3,
    name: "라면"
  }

]

function App() {
  return (
    <div>
      {foodLike.map(dish => 
        <Food key={dish.id} name={dish.name} />
      )}
    </div>
    
  );
}

export default App;

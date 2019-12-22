import React from 'react';

function Food({fav}){
  return <h1>i like {fav}</h1>
}

function App() {
  return (
    <div>
      <h1>Hello!!!!</h1>
      <Food fav="kimchi" />
      <Food fav="ramen" />
    </div>
    
  );
}

export default App;

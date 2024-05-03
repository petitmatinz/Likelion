import React from 'react';
import './App.css';
import ChildCompornent from './ChildCompornent';
import Welcome from './Welcome';
import FruitList from './Fruitlist';

function App() {
  const name = 'John'
  return (
   <React.Fragment>
   <FruitList></FruitList>
   </React.Fragment>
  );
}

export default App;

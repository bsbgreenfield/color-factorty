import { useState } from 'react';
import './App.css';
import RouterList from './RouteList';


function App() {
  const [colors, setColors] = useState(['red', 'green', 'blue'])
  const addColor = (newColor) => {
    setColors([...colors, newColor])
}
  return (
    <div className="App">
      <RouterList colors={colors} addColor = {addColor}/>
    </div>
  );
}

export default App;

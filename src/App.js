
import { useState } from 'react';
import Molecontainer from './components/Molecontainer';

function App() {
  let [score, setScore] = useState(0)
  const createMoleHill = ( ) => {
    let hills = []
    const MOLEHILLS = 9
    for (let i=0; i<MOLEHILLS; i++){
      hills.push(<Molecontainer
        key={i}
        setScore={setScore}
        score={score}
        />)
    }
    return<div>{hills}</div>
  };
  return (
    
    <div className="App">
      <h1>React-a-Mole !</h1>
      {score}
      {createMoleHill()}
      
    </div>
  );
}

export default App;

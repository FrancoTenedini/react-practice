import { useEffect, useState } from 'react';
import ItemCount from './components/itemCount';
import './App.css';

function App() {
  const [countNumber, setCountNumber] = useState(0)

  return (
    <div className="App">
       <ItemCount isCounting={countNumber} setCountNumber={setCountNumber}></ItemCount>
       
    </div>
  );
}

export default App;

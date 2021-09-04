import React, {useState} from 'react';
import './App.css';

function App() {

  let [count,setCount] = useState(0);
  return (
    <div className="card">
      <h1>{count}</h1>
      <button className="btn1" onClick={()=>setCount(++count)}>+</button>
      <button className="btn2" onClick={()=>setCount(--count)}>-</button>
      
    </div>
  );
}

export default App;

import { useState } from 'react';
import './App.css';

function App() {

  const [name, setName] = useState("Anorld");

  

  return (
    <div className="App">
      <div className="Box">
        <h1>How to use useState()</h1>
        <p>My name is {name}</p>
        <button onClick={() => setName("Blonatron") }>Click me to change name!</button> 
      </div>
    </div>
  );
}

export default App;

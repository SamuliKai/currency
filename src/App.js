import { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [sek, setSek] = useState(0)
  const [eur, setEur] = useState(0)
  
  function Calculate (e) {
    e.preventDefault()
    const result = sek * 0.085
    setEur(result)
  }

  return (
    <div id="container">
      <h3>Valuutta muunnin: Kruunut Euroiksi</h3>
      <form onSubmit={Calculate}>
        <div>
          <label>SEK</label>
          <input type="number" value={sek} onChange={e => setSek(e.target.value)}/>
        </div>
        <div>
          <label>EUR</label>
          <output>{eur.toFixed(2)}</output>
        </div>
        <button>Calculate</button>
      </form>
    </div>
  );
}

export default App;

import React , { useState , useEffect } from 'react'
import './App.css';
import getGifs from './sevices/getGifs';

function App() {
  const [gifs , setGifs ] = useState([]);

  useEffect(()=>{
    getGifs({keyWord : 'hinata'}).then(gifs => setGifs(gifs))
  },[])
  return (
    <div className="App">
      <section className="App-content">
        {
          gifs.map((e) =>
            <img src={e} alt='img-not-found'/>
          )
        }
        {/* <button onClick={()=> setGifs(DIFERENTGIFS)}>cambiar</button> */}
      </section>
    </div>
  );
}

export default App;

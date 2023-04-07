import React from 'react'
import './App.css';
import ListOfGifs from './components/ListOfGifs';
import { Link, Route } from 'wouter';

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <Link to='/gif/panda'>git</Link>
        {/* <button onClick={()=> setKeyword('mapa')}>cambiar</button> */}
        <Route component={ListOfGifs} path="/gif/:keyword"/>
      </section>
    </div>
  );
}

export default App;

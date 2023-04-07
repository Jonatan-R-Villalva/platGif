import React, { useState } from 'react'
import './App.css';
import ListOfGifs from './components/ListOfGifs';
import { Link, Route } from 'wouter';

function App() {
  const [ keyword, setKeyword ] = useState('');
  return (
    <div className="App">
      <section className="App-content">
        <Link to='/gif/pandas'>git</Link>
        {/* <button onClick={()=> setKeyword('mapa')}>cambiar</button> */}
        <Route component={ListOfGifs} path="/gif/:keyword"/>
        <ListOfGifs keyword={keyword} />
      </section>
    </div>
  );
}

export default App;

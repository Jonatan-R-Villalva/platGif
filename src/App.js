import React from 'react'
import './App.css';
//import ListOfGifs from './components/ListOfGifs/ListOfGifs';
import Detail from './pages/Detail/Detail';
import {Link , Route } from 'wouter';
import Home from './pages/Home/Home';
import SearchResults from './pages/SearchResults/SearchResults';

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <Route component={Home} path='/'/>
        <Route component={SearchResults} path="/search/:keyword"/>
        <Route component={Detail} path='/gif/:id'/>
      </section>
    </div>
  );
}

export default App;

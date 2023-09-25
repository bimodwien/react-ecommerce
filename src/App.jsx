import React from 'react';
import Home from './pages/Home';
import Favorite from './pages/Favorite';
import './App.css'
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" Component={Home} ></Route>
        <Route path="/favorite" Component={Favorite}></Route>
      </Routes>
    </div>
  );
}

export default App;

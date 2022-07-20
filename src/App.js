import './App.scss';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./Components/Homepage"
import ItemInfo from "./Components/ItemInfo"
import React from 'react';

function App() {
  return (
      <div className="app">
        <Router>
          <Routes>
            <Route exact path="/" element={<Homepage/>}/>
            <Route exact path="/item/:itemId" element={<ItemInfo/>}/>
          </Routes>
        </Router>
      </div>
  );
}

export default App;
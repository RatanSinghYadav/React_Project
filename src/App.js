// import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';


function App() {
  return (
    
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}


export default App;

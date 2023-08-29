import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Contents from './components/Contents'
import React, { useState } from 'react';



function App() {

  
  
  // let Name = "홍길동";

  
  

  
  return (
    
    <div className="App">
      
      <Nav />
      {/* <h3 className={Name} style={{color: "lightblue",backgroundColor: "khaki"}}>Hello React {Name}</h3> */}
      <div className='content'>
        <Contents arrayNum = "0"/>
        <Contents arrayNum = "1"/>
        <Contents arrayNum = "2"/>
        <Contents arrayNum = "3"/>

      </div>
        
    </div>

  
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
// import Contents from './components/Contents'
import React, { useState } from 'react';
// import Style from './components/Style';
import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import NotPage from './pages/NotPage';



function App() {

  
  
  // let Name = "홍길동";

  
  

  
  return (
    
    <>
    <Nav />
    <Routes>
      <Route path="/" element={<Main/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/portfolio" element={<Portfolio/>}/>
      <Route path="/*" element={<NotPage/>}/>
    </Routes>
    </>
    // <div className="App">
      
    //   {/* <h3 className={Name} style={{color: "lightblue",backgroundColor: "khaki"}}>Hello React {Name}</h3> */}
    //   <div className='content'>
    //     <Contents arrayNum = "0"/>
    //     <Contents arrayNum = "1"/>
    //     <Contents arrayNum = "2"/>
    //     <Contents arrayNum = "3"/>
    //   </div>
    //     <Style></Style>
    // </div>

  
  );
}

export default App;

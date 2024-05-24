import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Main from './Components/Main';
import Login from "./Components/Login"
import './Components/style.css';
import Register from './Components/Register';
function App() {
  return (
    <>
       <Router>
        <Routes>
          <Route path='/main' element={<Main/>}></Route>
          <Route path='/' element={<Login/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
        </Routes>
       </Router>
    </>
  );
}

export default App;

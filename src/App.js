// import logo from './logo.svg';
import './App.css';

import Home from './views/Home'
import Form from './components/Form';
import './components/card.css'
import History from './components/History';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {useState} from 'react'
function App() {
   document.body.style.backgroundImage = 'url(https://img.freepik.com/free-photo/old-black-background-grunge-texture-dark-wallpaper-blackboard-chalkboard-room-wall_1258-28312.jpg)';
  const [history,setHistory] = useState([])
  // let history = []
  const historyHandler = (his)=>{
    console.log(his);
    setHistory(his)
  }
  console.log(history);
  return (
    
    <BrowserRouter>
      <Routes>
          <Route path="/"  element={<Home onHistory={historyHandler}/>} />
          <Route path="/form" element={<Form/>} />
          <Route path="/history" element={<History hist = {history}/>} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;

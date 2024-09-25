import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './components/home';
import Cloths from './components/cloths';
import Electronics from "./components/electronics";
import Homeapply from "./components/homeapply";

function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/cloths" element={<Cloths/>} />
        <Route path="/electronics" element={<Electronics/>} />
        <Route path="/homeapply" element={<Homeapply/>} />
        <Route path="/" element={<Home/>} />
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;

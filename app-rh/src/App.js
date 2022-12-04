import logo from './logo.svg';
import './App.css';
import "./scss/style.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './views/home';

function App() {
  return (
   <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
   </Router>
  );
}

export default App;

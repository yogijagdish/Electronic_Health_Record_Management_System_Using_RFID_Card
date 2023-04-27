import './App.css';
import Navbar from './component/Navbar/navbar';
import Home from './component/Homepage/home';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
const App =() =>{
 return (
      <div>
        <BrowserRouter>
        <Navbar/>

        <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="/" element = {<Home/>}/>
        </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;

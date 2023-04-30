import './App.css';
import Navbar from './component/Navbar/navbar';
import Home from './component/Homepage/home';
import About from './component/About/about';
import Contactus from './component/Contactus/contactus';
import Doctorlogin from './component/Doctor/doctorlogin';
import Patient from './component/Patient/patientlogin';
import Admin from './component/Admin/adminlogin';
import Doctorpanel from './component/Doctor/doctorpanel';
import Patientpanel from './component/Patient/patientpanel';
import Adminpanel from './component/Admin/adminpanel'
import Forgot1 from './component/Forgotpassword/forgot1'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Footer from './component/Footer/footer';
const App =() =>{
 return (
      <div>
        <BrowserRouter>
        <Navbar/>
        <Routes>
        <Route exact path="/" element = {<Home/>}/>
        <Route exact path="/about" element = {<About/>}/>
        <Route exact path="/contactus" element = {<Contactus/>}/>
        <Route exact path="/doctorlogin" element = {<Doctorlogin/>}/>
        <Route exact path="/patientlogin" element = {<Patient/>}/>
        <Route exact path="/adminlogin" element = {<Admin/>}/>
        <Route exact path="/doctorpanel" element = {<Doctorpanel/>}/>
        <Route exact path="/patientpanel" element = {<Patientpanel/>}/>
        <Route exact path="/adminpanel" element = {<Adminpanel/>}/>
        <Route exact path = '/forgot1' element = {<Forgot1/>}/>
        </Routes>
        <Footer/>
        </BrowserRouter>
      </div>
  );
}

export default App;

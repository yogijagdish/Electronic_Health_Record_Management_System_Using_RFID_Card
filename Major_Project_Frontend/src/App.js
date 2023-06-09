import Navbar from './component/Navbar/navbar';
import Home from './component/Homepage/home';
import About from './component/About/about';
import Contactus from './component/Contactus/contactus';
import Doctorlogin from './component/Doctor/doctorlogin';
import Patient from './component/Patient/patientlogin';
import Admin from './component/Admin/adminlogin';
import Doctorpanel from './component/Doctor/doctorpanel';
import Patientpanel from './component/Patient/patientpanel';
import Adminpanel from './component/Admin/adminpanel';
import Forgot1 from './component/Forgotpassword/forgot1';
import Registration from './component/Admin/registration';
import Aboutpatient from './component/Patient/aboutpatient';
import Treatedpatient from './component/PatientStatus/treatedpatient';
import Newpatient from './component/Admin/Newpatient';
import Oldpatient from './component/Admin/Oldpatient';

import Upcomingpatient from './component/PatientStatus/Upcomingpatient';
import Previousreport from './component/Patient/previousreport';
import Latestreport from './component/Patient/latestreport';
import AddReport from './component/Admin/AddReport';
import Scancard from './component/Admin/Scancard';
import Information from './component/Admin/information';
import Information1 from './component/Patient/Information';
// import Protected from './component/Protected/protected'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Footer from './component/Footer/footer';

import { useSelector } from 'react-redux';
import AddDoctor from './component/Admin/AddDoctor';
import Updateprofile from './component/Admin/Updateprofile';
import Updatepatient from './component/Patient/Updatepatient';
import DisplayReport from './component/Patient/DisplayReport';
import Adminpanel1 from './component/Admin/adminpanel1';
import Viewdetails from './component/Patientdetails/Viewdetails';
import Adddetails from './component/Admin/Adddetails';
import Information2 from './component/Doctor/Information2';

const App =() =>{

  let {access_token} = useSelector(state=> state.auth)
  let user = useSelector(state => state.user)

  // console.log(state);

 return (
      <div>
        <BrowserRouter>
        <Navbar/>
        <Routes>
        <Route exact path="/" element ={!access_token?<Home/>:<Doctorpanel/>}/>
        <Route exact path="/about" element = {<About/>}/>
        <Route exact path="/contactus" element = {<Contactus/>}/>
        <Route exact path="/doctorlogin" element = {<Doctorlogin/>}/>
        <Route exact path="/patientlogin" element = {<Patient/>}/>
        <Route exact path="/adminlogin" element = {<Admin/>}/>
        <Route exact path="/doctorpanel" element = {access_token?<Doctorpanel/>:<Home/>}/>
        <Route exact path="/patientpanel" element = {<Patientpanel/>}/>
        <Route exact path="/adminpanel" element = {access_token?<Adminpanel/>:<Home/>}/>
        <Route exact path="/adminpanel1" element = {access_token?<Adminpanel1/>:<Home/>}/>
        <Route exact path = '/forgot1' element = {<Forgot1/>}/>
        <Route exact path = '/registration' element = {<Registration/>}/>
        <Route exact path = '/aboutpatient' element = {<Aboutpatient/>}/>
        <Route exact path = '/add-doctor' element = {<AddDoctor/>}/>
        <Route exact path = '/update-profile' element = {<Updateprofile/>}/>
        <Route exact path = '/update-patient' element = {<Updatepatient/>}/>
        <Route exact path = '/new-patient' element = {<Newpatient/>}/>
        <Route exact path = '/old-patient' element = {<Oldpatient/>}/>
        <Route exact path = '/upcoming-patient' element={<Upcomingpatient/>}/>
        <Route exact path = "/add-report" element={<AddReport/>}/>
        <Route exact path='/show-report' element={<DisplayReport/>}/>
        <Route exact path='/treated-patient' element={<Treatedpatient/>}/>
        <Route exact path='/previous-report' element={<Previousreport/>}/>
        <Route exact path='/latest-report' element={<Latestreport/>}/>
        <Route exact path='/scancard' element={<Scancard/>}/>
        <Route exact path='/information' element={<Information/>}/>
        <Route exact path='/viewdetails' element={<Viewdetails/>}/>
        <Route exact path='/adddetails' element={<Adddetails/>}/>
        <Route exact path='/information1' element={<Information1/>}/>
        <Route exact path='/information2' element={<Information2/>}/>
        </Routes>
        <Footer/>
        </BrowserRouter>
      </div>
  );
}

export default App;

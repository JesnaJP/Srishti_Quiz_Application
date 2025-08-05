import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './assets/components/home';
import UserLogin from './assets/components/Userlogin';
import AdminLogin from './assets/components/Adminlogin';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import MyNavbar from './assets/components/navbar';
import UserRegistration from './assets/components/UserRegistration';
import "bootstrap/dist/css/bootstrap.min.css";
import Enquiries from './assets/components/Enquiries';
import './scss/styles.scss';
import AdminDashboard from './assets/components/AdminDashboard';
import StarRating from './assets/components/Rating';
import Result from './assets/components/Result';
import QuestionBank from './assets/components/QuestionBank';
import Technologies from './assets/components/Technologies';
import AboutUs from './assets/components/AboutUs';
import Jobs from './assets/components/Jobs';
import EditQuestionBank from './assets/components/EditQuestionBank';
import ViewUsers from './assets/components/ViewUsers';
import ViewQuestions from './assets/components/ViewQuestions';
import QuestionAnswer from './assets/components/Answer';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
         <Route path="/" element={<Home/>}/> {/* Home page  */}
        <Route path="/userlogin" element={<UserLogin/>}/>{/* Login page for users  */}
        <Route path="/AdminLogin" element={<AdminLogin/>}/>
        <Route path="/navbar" element={<MyNavbar/>}/>
        <Route path="/signup" element={<UserRegistration/>}/>
        <Route path="/enquiries" element={<Enquiries/>}/>
        <Route path="/AdminDashboard" element={<AdminDashboard/>}/>
        <Route path="/rating" element={<StarRating/>}/>{/*To show how many stars*/}
        <Route path="/result" element={<Result/>}/>{/*To give the result page*/}
        <Route path="/questionbank" element={<QuestionBank/>}/>{/*To view all technologies Questions*/}
        <Route path="/technologies" element={<Technologies props={'Javascript'}/>}/>{/*page to add questions*/ }
        <Route path="/AboutUs" element={<AboutUs/>}/>
        <Route path="/jobs" element={<Jobs/>}/>
        <Route path="/editquestionbank/:id" element={<EditQuestionBank/>}/>{/*Adminpage to edit questions*/}
        <Route path="/users" element={<ViewUsers/>}/>
        <Route path="/viewQuestions" element={<ViewQuestions/>}/>{/*Each technologies questions view*/}
        <Route path="/viewUsers" element={<ViewUsers/>}/>
        <Route path="/questionanswer" element={<QuestionAnswer/>}/>
      </Routes>
  </BrowserRouter>
  </StrictMode>,
)

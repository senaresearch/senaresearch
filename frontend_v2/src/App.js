import Navbar from './components/Navbar'
import {Route, Routes} from "react-router-dom";
import Home from "./pages/home/Home";
import NotFound from "./components/NotFound";
import Footer from "./components/Footer";
import TeachersList from './pages/teachersList/TeachersList';
import TeacherProfile from './pages/teacherProfile/TeacherProfile';
import Reservation from './pages/reservationForm/Reservation';
import Login from './pages/login/Login';
import Dashboard from './pages/dashboard/Dashboard';

function App() {

  return (
    <div className="App">
      <Navbar />
      

      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='login' element={ <Login /> } />
        <Route path='teachers-list' element={ <TeachersList /> } />
        <Route path='teacher-profile' element={ <TeacherProfile /> } />
        <Route path='teacher-reserve' element={ <Reservation /> } />
        <Route path='dashboard' element={ <Dashboard /> } />
        <Route path='*' element={ <NotFound /> } />
      </Routes>


      
      <Footer />
    </div>
  )
}

export default App

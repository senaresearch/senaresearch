import {Route, Routes} from "react-router-dom";
import Home from "./pages/home/Home";
import NotFound from "./components/NotFound";
import TeachersList from './pages/teachersList/TeachersList';
import TeacherProfile from './pages/teacherProfile/TeacherProfile';
import Reservation from './pages/reservationForm/Reservation';
import Dashboard from './pages/dashboard/Dashboard';
import Index from './pages/Index'
import UserInfo from './pages/dashboard/UserInfo';
import UserServices from './pages/dashboard/UserServices';
import Settings from './pages/dashboard/Settings';
import Help from './pages/dashboard/Help';
import PrivateRoute from './utils/PrivateRoute'
import PasswordChange from './pages/dashboard/PasswordChange';
import Signup from './pages/authentication/Signup';
import Login from './pages/authentication/Login';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useContext, useEffect } from "react";
import AuthContext from './context/AuthContext'



function App() {
  // const {logoutUser} = useContext(AuthContext)
  // useEffect(() => {
  //   const handleTabClose = event => {
  //     event.preventDefault();

  //     console.log('beforeunload event triggered');

  //     return (event.returnValue = 'Are you sure you want to exit?');
  //   };

  //   window.addEventListener('beforeunload', handleTabClose);

  //   return () => {
  //     logoutUser()
  //     window.removeEventListener('beforeunload', handleTabClose);
  //   };
  // }, []);

  return (
    
      <div className="App">
        {/* <Navbar /> */}
        

        <Routes>
          <Route  path='' element={ <Index /> }>
            <Route path='/' element={ <Home /> } />
            <Route path='login' element={<Login />  } />
            <Route path='signup' element={<Signup />  } />
            <Route path='promoters-list' element={ <TeachersList /> } />
            <Route path='promoters/:promoter_id' element={ <TeacherProfile /> } />
            <Route path='teacher-reserve' element={ <Reservation /> } />
          </Route>

          <Route path='*' element={ <NotFound /> } />

          <Route path='dashboard' element={<PrivateRoute><Dashboard/></PrivateRoute>}  >
            <Route path='help' element={<Help />  } />
            <Route path='password-change' element={<PasswordChange />  } />
            <Route path='settings' element={ <Settings /> } />
            <Route path='info' element={<UserInfo />  } />
            <Route path='services' element={ <UserServices /> } />
          </Route>
        </Routes>


        
        {/* <Footer /> */}
        <ToastContainer />
      </div>

    
  )
}

export default App

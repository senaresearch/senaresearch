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
import Index from './pages/Index'
import UserInfo from './pages/dashboard/UserInfo';
import UserServices from './pages/dashboard/UserServices';
import Settings from './pages/dashboard/Settings';
import Help from './pages/dashboard/Help';
import {AuthProvider} from './context/AuthContext'
import PrivateRoute from './utils/PrivateRoute'
import PasswordChange from './pages/dashboard/PasswordChange';


function App() {

  return (
    <AuthProvider>
      <div className="App">
        {/* <Navbar /> */}
        

        <Routes>
          <Route  path='' element={ <Index /> }>
            <Route path='/' element={ <Home /> } />
            <Route path='login' element={<Login />  } />
            <Route path='promoters-list' element={ <TeachersList /> } />
            <Route path='promoter/:promoter_id' element={ <TeacherProfile /> } />
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
      </div>

    </AuthProvider>

  )
}

export default App

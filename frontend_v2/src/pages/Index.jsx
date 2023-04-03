import Navbar from "../components/Navbar";
// import {Route, Routes} from "react-router-dom";
// import Home from "./pages/home/Home";
// import NotFound from "./components/NotFound";
import Footer from "../components/Footer";
// import TeachersList from './pages/teachersList/TeachersList';
// import TeacherProfile from './pages/teacherProfile/TeacherProfile';
// import Reservation from './pages/reservationForm/Reservation';
// import Login from './pages/login/Login';
// import Dashboard from './pages/dashboard/Dashboard';

import React from 'react'
import { Outlet } from "react-router-dom";

const Index = () => {
  return (
    <div className="App">
      <Navbar />
      <Outlet/>
      <Footer />
    </div>
  )
}

export default Index

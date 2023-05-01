// import './App.css';
// import { useState } from 'react'
// import Crud from './crud';
import * as React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/layout";
import Home from './pages/home';
import Agriculture from "./pages/agric";
import Post from "./pages/post";
import Overview from "./pages/edu";
import ErrorPage from "./pages/error";
import Login from "./pages/login";
import Resume from './resume/resume';
import Homs from "./pages/homs";
import Interview from "./pages/interviewtips";
import Course from "./pages/course";
import Dashboard from './pages/dashboard';
import ProtectRoute from "./pages/protectroute/protectroutes";
import Jobpost from './pages/jobrecuriter/jobpost';
import Recuriterprotect from './pages/protectroute/recuriterprotect';
// import {useState,useEffect}  from "react";
function App() {
  // const [islogin,setLogin]=useState(false);
  // console.log(islogin);



  return (
    <>
       <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homs />} />
          <Route path="Agri" element={<Agriculture />} />
          <Route path="post" element={<Post />} />
          <Route path="check" element={<Login />} />
          <Route path="resume" element={<Resume />} />
          <Route path="jobs" element={<Home />} />
          <Route path="interviewtips" element={<Interview />}/>
          <Route element={<ProtectRoute />}>
           <Route element={<Dashboard />} path='dashboard'/>    
            </Route>
          <Route path="courses" element={<Course />}/>
          <Route path="overview" element={<Overview />} />
        </Route>
        <Route element={<Recuriterprotect />}>
        <Route path="jobrecuriter" element={<Jobpost />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter> 
    </>
  );

}

export default App;


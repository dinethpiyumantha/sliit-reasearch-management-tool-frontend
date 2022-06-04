import React, { createContext, useState, useEffect } from 'react'
import './theme.scss';
import RegisterGroup from './pages/group/RegisterGroup';
import RegisterStudent from './pages/student/RegisterStudent';
import ProfileHome from './pages/group/ProfileHome';
import RequestSupervisors from './pages/group/RequestSupervisors';
import SubmitDocument from './pages/group/SubmitDocument';
import { Routes, Route } from 'react-router-dom';
import Chat from './pages/chat/Chat';
import Home from './pages/home/Home';
import axios from 'axios';

export const UserContext = createContext();

export default function App() {

  const [context, setcontext] = useState(null);
  const [group, setgroup] = useState({});

  const fetchData = () => {
    console.log("fetching data");
    if(JSON.parse(localStorage.getItem('user'))) {
      console.log("user is logged in");
      axios.get(`http://localhost:3000/api/groups/student/${JSON.parse(localStorage.getItem('user')).studentId}`)
      .then(res => {
        setgroup(res.data);
      })
      .catch(err => {
        console.log(err);
        navigate("/group/register");
      });
    } else {
      console.log("user is not logged in");
    }
  }

  const getContextValues = {
    user: JSON.parse(localStorage.getItem('user')),
    token: localStorage.getItem('token'),
    group: group,
  }

  // fetchData();

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <UserContext.Provider value={getContextValues}>
      <Routes>
        <Route path="/" element={<ProfileHome/>} />
        <Route path="/index" element={<Home/>} />
        <Route path="/group/register" element={<RegisterGroup/>} />
        <Route path="/student/register" element={<RegisterStudent/>} />
        <Route path="/group/supervisors" element={<RequestSupervisors/>} />
        <Route path="/group/submissions" element={<SubmitDocument/>} />
        <Route path="/group/discussion" element={<Chat/>} />
      </Routes>
    </UserContext.Provider>
  )
}

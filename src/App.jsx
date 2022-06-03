import React from 'react'
import './theme.scss';
import RegisterGroup from './pages/group/RegisterGroup';
import RegisterStudent from './pages/student/RegisterStudent';
import StaffHome from './pages/group/StaffHome';
import RequestSupervisors from './pages/group/RequestSupervisors';
import SubmitDocument from './pages/group/SubmitDocument';
import { Routes, Route } from 'react-router-dom';
import Chat from './pages/chat/Chat';
import Home from './pages/staffHome/Home';
import RegisterStaff from './pages/staff/RegisterStaff';
import ViewTopicToAccept from './pages/Supervisor/ViewTopicToAccept';
import AcceptTopics from './pages/Supervisor/AcceptTopics';

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<StaffHome/>} />
        <Route path="/index" element={<Home/>} />
        <Route path="/group/register" element={<RegisterGroup/>} />
        <Route path="/student/register" element={<RegisterStudent/>} />
        <Route path="/group/supervisors" element={<RequestSupervisors/>} />
        <Route path="/group/submissions" element={<SubmitDocument/>} />
        <Route path="/group/discussion" element={<Chat/>} />
        <Route path="/staff/register" element={<RegisterStaff/>}/>
        <Route path="/supervisor/viewtopicaccept" element={<ViewTopicToAccept/>}/>
        <Route path="/panelmember/viewtopics" element={<ViewTopicsToEvaluate/>}/>
        <Route path="/supervisor/accepttopics" element={<AcceptTopics/>}/>
      </Routes>
    </div>
  )
}

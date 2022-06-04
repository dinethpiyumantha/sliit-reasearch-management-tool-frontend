import React from 'react'
import './theme.scss';
import RegisterGroup from './pages/group/RegisterGroup';
import RegisterStudent from './pages/student/RegisterStudent';
import ProfileHome from './pages/group/StaffHome';
import RequestSupervisors from './pages/group/RequestSupervisors';
import SubmitDocument from './pages/group/SubmitDocument';
import { Routes, Route } from 'react-router-dom';
import Chat from './pages/chat/Chat';
import Home from './pages/staffHome/Home';
import RegisterStaff from './pages/staff/RegisterStaff';
import EvaluateTopic from './pages/panelMember/EvaluateTopics';
import ViewTopicToAccept from './pages/Supervisor/ViewTopicToAccept';
import AcceptTopics from './pages/Supervisor/AcceptTopics';
import DocEvaluation from './pages/Supervisor/DocEvaluation';

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ProfileHome/>} />
        <Route path="/index" element={<Home/>} />
        <Route path="/group/register" element={<RegisterGroup/>} />
        <Route path="/student/register" element={<RegisterStudent/>} />
        <Route path="/group/supervisors" element={<RequestSupervisors/>} />
        <Route path="/group/submissions" element={<SubmitDocument/>} />
        <Route path="/group/discussion" element={<Chat/>} />
        <Route path="/staff/register" element={<RegisterStaff/>}/>
        <Route path="/panelmember/evaluatetopic" element={<EvaluateTopic/>}/>
        <Route path="/supervisor/viewtopics" element={<ViewTopicToAccept/>}/>
        <Route path="/supervisor/accepttopics" element={<AcceptTopics/>}/>
        <Route path="/supervisor/docevaluations" element={<DocEvaluation/>}/>
      </Routes>
    </div>
  )
}

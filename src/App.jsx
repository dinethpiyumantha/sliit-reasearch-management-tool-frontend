import React from 'react'
import './theme.scss';
import RegisterGroup from './pages/group/RegisterGroup';
import RegisterStudent from './pages/student/RegisterStudent';
import ProfileHome from './pages/group/ProfileHome';
import RequestSupervisors from './pages/group/RequestSupervisors';
import SubmitDocument from './pages/group/SubmitDocument';
import { Routes, Route } from 'react-router-dom';
import Chat from './pages/chat/Chat';
import Home from './pages/home/Home';

import ViewRoles from './pages/admin/ViewRoles';
import Submission from './pages/admin/Submission';
import PanelMembersList from './pages/admin/PanelMembersList';
import UploadTemplates from './pages/admin/UploadTemplates';
import MarkingSchemes from './pages/admin/MarkingSchemes';
import UpdateUsers from './pages/admin/UpdateUsers';

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

        <Route path="/admin" element={<ViewRoles/>} />
        <Route path="/admin/panelmembers" element={<PanelMembersList/>} />
        <Route path="/admin/submission" element={<Submission/>} />
        <Route path="/admin/templateupload" element={<UploadTemplates/>} />
        <Route path="/admin/markingschemes" element={<MarkingSchemes/>} />
        <Route path="/admin/updateusers/:id" element={<UpdateUsers/>}  />
      </Routes>
    </div>
  )
}

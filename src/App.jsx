import React from 'react'
//import React, { createContext, useState, useEffect } from 'react'
import './theme.scss';
import ProfileHome from './pages/group/StaffHome';
import { Routes, Route } from 'react-router-dom';
import Chat from './pages/chat/Chat';
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
        <Route path="/group/chat" element={<Chat/>} />
        <Route path="/staff/register" element={<RegisterStaff/>}/>
        <Route path="/panelmember/evaluatetopic" element={<EvaluateTopic/>}/>
        <Route path="/supervisor/viewtopics" element={<ViewTopicToAccept/>}/>
        <Route path="/supervisor/accepttopics" element={<AcceptTopics/>}/>
        <Route path="/supervisor/docevaluations" element={<DocEvaluation/>}/>
      </Routes>
    </div>
  )
}

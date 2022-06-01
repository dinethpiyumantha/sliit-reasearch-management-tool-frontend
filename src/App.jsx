import React from 'react'
import './theme.scss';
import RegisterGroup from './pages/group/RegisterGroup';
import RegisterStudent from './pages/student/RegisterStudent';
import ProfileHome from './pages/group/ProfileHome';
import RegisterSupervisors from './pages/group/RegisterSupervisors';
import SubmitDocument from './pages/group/SubmitDocument';

export default function App() {
  return (
    <div>
      <RegisterSupervisors />
    </div>
  )
}

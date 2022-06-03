import axios from 'axios'
import React, { useState, useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../App';

export const GroupContext = React.createContext();

export default function SideBar() {

  const navigate = useNavigate();

  const userContext = useContext(UserContext);
  // console.log(userContext);
  const [group, setgroup] = useState({
    topic: "",
    category: "",
    members: [""],
    description: "",
  });

  const fetchData = () => {
    axios.get(`http://localhost:3000/api/groups/student/${userContext.user.studentId}`)
    .then(res => {
      // console.log(res.data);
      setgroup(res.data);
    })
    .catch(err => {
      console.log(err);
      navigate("/group/register");
    });
  }

  fetchData();

  return (
    <div className="col-md-3 pe-md-5">
      <h5>{group.topic}</h5>
      <p className="mb-3">{group.description}</p>
      <button className="btn btn-sm btn-outline-dark w-100 mb-3">
          <span className="me-2">Group Settings</span>
          <i className="fa fa-cog"></i>
      </button>
      <div className="border-bottom mb-3"></div>
      <p>Members</p>
      {group.members.map((member, index) => (
        <div className="d-flex mb-2 text-muted" key={index}>
          <i className="fa fa-user"></i>
          <small className="ms-2">{member}</small>
        </div>
      ))}
    </div>
  )
}

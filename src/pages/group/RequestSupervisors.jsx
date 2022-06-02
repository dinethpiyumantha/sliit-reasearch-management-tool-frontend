import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../App';
import FooterBar from '../../components/footer-bar/FooterBar'
import NavigationBar from '../../components/navigation-bar/NavigationBar'
import SideBar from '../../components/side-bar/SideBar'

export default function RequestSupervisors() {

  const userContext = useContext(UserContext);

  const [supervisors, setSupervisors] = useState([]);
  const [coSupervisors, setCoSupervisors] = useState([]);
  const [supervisorForm, setSupervisorForm] = useState({
    id: "",
    status: "Pending"
  });
  const [coSupervisorForm, setCoSupervisorForm] = useState({
    id: "",
    status: "Pending"
  });

  const fetchData = () => {
    const supervisors = [
      {id: "1", name: "hello"},
      {id: "2", name: "world"},
    ];

    const cosupervisors = [
      {id: "1", name: "hello"},
      {id: "2", name: "world"},
    ];

    setSupervisors(supervisors);
    setCoSupervisors(cosupervisors);
  }


  const handleSupervisorChange = (e) => {
    setSupervisorForm({ ...supervisorForm, [e.target.name]: e.target.value });
  }

  const handleCoSupervisorChange = (e) => {
    setCoSupervisorForm({ ...coSupervisorForm, [e.target.name]: e.target.value });
  }

  const submitSupervisor = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:3000/api/groups/request/supervisor/${userContext.group._id}`, supervisorForm)
    .then(res => {
      console.log(res.data);
    })
    .catch(err => {
      console.log(err);
    })
  }

  const submitCoSupervisor = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:3000/api/groups/request/cosupervisor/${userContext.group._id}`, coSupervisorForm)
    .then(res => {
      console.log(res.data);
    })
    .catch(err => {
      console.log(err);
    });
  }

  const changeStatusStyle = (status) => {
    const string = status.toLowerCase();
    if (string === "approved") {
      return "alert alert-success p-1 ms-2";
    } else if (string === "pending") {
      return "alert alert-warning p-1 ms-2";
    } else if (string === "rejected") {
      return "alert alert-danger p-1 ms-2";
    } else {
      return "alert alert-warning p-1 ms-2";
    }
  }

  const isApproved = (status) => {
    return (status.toLowerCase() == "approved") ? true : false;
  }

  useEffect(() => {
    fetchData();
  }, []);
  

  return (
    <div>
        <NavigationBar />
        <div className="container mt-md-5 pb-md-5">
            <div className="row">
                <SideBar />
                <div className="col-md-9 ps-md-5">
                  <form onSubmit={submitSupervisor} className="mb-4" style={{maxWidth: '30rem'}}>
                    <div className="form-group mb-3">
                      <label htmlFor="exampleInputEmail1">Request Supervisor</label>
                      <small className={changeStatusStyle(userContext.group.supervisor.status)}>
                        {userContext.group.supervisor.status}
                      </small>
                      <select onChange={handleSupervisorChange} name="id" className="form-control mt-3" >
                      {supervisors.map((supervisor, index) => {
                        return (
                        <option value={supervisor.id} key={index} >{supervisor.name}</option>
                      )})}
                      </select>
                      <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                      <input type="submit" className="btn btn-sm btn-primary" value="Request"/>
                    </div>
                  </form>
                  <div className="border-bottom mb-4"></div>
                  <form onSubmit={submitCoSupervisor} className="mb-4" style={{maxWidth: '30rem'}}>
                    <div className="form-group mb-3">
                      <label htmlFor="exampleInputEmail1">Request Co-Supervisor</label>
                      <small className={changeStatusStyle(userContext.group.coSupervisor.status)}>
                        {userContext.group.coSupervisor.status}
                      </small>
                      <select onChange={handleCoSupervisorChange} name="id" className="form-control mt-3">
                        {coSupervisors.map((supervisor, index) => {
                          return (
                          <option value={supervisor.id} key={index} >{supervisor.name}</option>
                        )})}
                      </select>
                      <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                      <input type="submit" className="btn btn-sm btn-primary" value="Request" />
                    </div>
                  </form>
                </div>
            </div>
        </div>
        <FooterBar />
    </div>
  )
}

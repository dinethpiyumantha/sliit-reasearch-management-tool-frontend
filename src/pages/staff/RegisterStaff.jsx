import axios from 'axios';
import React, { useState } from 'react'


export default function RegisterStaff() {
  const [form, setForm] = useState({
    staffId:"",
    name: "",
    email: "",
    phone: "",
    type: "",
    interests: [],
    password: ""
  });
  

  const handleChange = (e) => {
      setForm({...form, [e.target.name]: e.target.value});
  };

  const submit = (e) => {
    e.preventDefault();
    console.log(form);
    axios.post(`http://localhost:5000/api/staffs`, form)
    .then(res => {
      console.log(res.data);
    })
    .catch(err => {
      console.log(err);
    });
  }

    return (
    
      <div className="container mt-md-5 pb-md-5 p-3 mb-2 bg-light text-dark">
      <div className="container d-flex justify-content-center">
       <div className="col-md-6">
         <h2 className="text-capitalize mb-4">Register Staff</h2>
          <form onSubmit={submit} style={{width: '50rem'}}>
              <div className="form-group mb-3">
                <label htmlFor="staffId">Staff ID:</label>
                <input className="form-control" onChange={handleChange} type="text" id="staffId" name="staffId" />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="name">Name:</label>
                <input className="form-control" onChange={handleChange} type="text" id="name" name="name" />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="email">Email:</label>
                <input className="form-control" onChange={handleChange} type="email" id="email" name="email" />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="phone">Phone:</label>
                <input className="form-control" onChange={handleChange} type="tel" id="phone" name="phone"/>
              </div>
              <div className="form-group mb-3">
                <label htmlFor="type">Type:</label>
                <select className="form-select"  onChange={handleChange} name="type" id="type" defaultValue="Select type">
                  <option defaultValue="Select type">Select type</option>
                  <option value="Supervisor">Supervisor</option>
                  <option value="Co-supervisor">Co-supervisor</option>
                  <option value="Panel member">Panel Member</option></select>
              </div>
              <div className="form-group mb-3">
              <label>Research Interests:</label>

              <div>



              <div class="form-check form-check-inline">
              <div class="form-check">
                    <input className="form-check-input" type="checkbox" value="Artificial inteligence" id="check1"/>
                    <label className="form-check-label" htmlFor="check1">Artificial inteligence</label>
              </div>
              <div class="form-check">
                    <input className="form-check-input" type="checkbox" value="Machine Learning" id="check2"/>
                    <label className="form-check-label" htmlFor="check2">Machine Learning</label>
              </div>
              <div class="form-check">
                    <input className="form-check-input" type="checkbox" value="image Processing" id="check3"/>
                    <label className="form-check-label" htmlFor="check3">image Processing</label>
              </div>
              <div class="form-check">
                    <input className="form-check-input" type="checkbox" value="E-Governance" id="check4"/>
                    <label className="form-check-label" htmlFor="check4">E-Governance</label>
              </div>
              <div class="form-check">
                    <input className="form-check-input" type="checkbox" value="Data Science" id="check5"/>
                    <label className="form-check-label" htmlFor="check5">Data Science</label>
              </div>
              </div>



              <div class="form-check form-check-inline">
              <div class="form-check">
                    <input className="form-check-input" type="checkbox" value="Human Computer Interaction" id="check6"/>
                    <label className="form-check-label" htmlFor="check6">Human Computer Interaction </label>
              </div>
              <div class="form-check">
                    <input className="form-check-input" type="checkbox" value="Cloud Computing" id="check7" />
                    <label className="form-check-label" htmlFor="check7">Cloud Computing</label>
              </div>
              <div class="form-check">
                    <input className="form-check-input" type="checkbox" value="Cyber Security" id="check8" />
                    <label className="form-check-label" htmlFor="check8">Cyber Security</label>
              </div>
              <div class="form-check">
                    <input className="form-check-input" type="checkbox" value="Robotics" id="check9" />
                    <label className="form-check-label" htmlFor="check9">Robotics</label>
              </div>
              <div class="form-check">
                    <input className="form-check-input" type="checkbox" value="Internet Of Things" id="check10"/>
                    <label className="form-check-label" htmlFor="check10">Internet Of Things</label>
              </div>
              </div>


              <div class="form-check form-check-inline">
              <div class="form-check">
                    <input className="form-check-input" type="checkbox" value="Embedded Systems" id="check11"/>
                    <label className="form-check-label" htmlFor="check11">Embedded Systems </label>
              </div>
              <div class="form-check">
                    <input className="form-check-input" type="checkbox" value="Soft Computing" id="check12" />
                    <label className="form-check-label" htmlFor="check12">Soft Computing</label>
              </div>
              <div class="form-check">
                    <input className="form-check-input" type="checkbox" value="Big Data" id="check13" />
                    <label className="form-check-label" htmlFor="check13">Big Data</label>
              </div>
              <div class="form-check">
                    <input className="form-check-input" type="checkbox" value="Assitive Technology" id="check14" />
                    <label className="form-check-label" htmlFor="check14">Assitive Technology</label>
              </div>
              <div class="form-check">
                    <input className="form-check-input" type="checkbox" value="Computer Networks" id="check15"/>
                    <label className="form-check-label" htmlFor="check15">Computer Networks</label>
              </div>
              </div>


              </div>

              </div>
              <div className="form-group mb-3">
                <label htmlFor="password">Password:</label>
                <input className="form-control" onChange={handleChange} type="password" name="password" />
              </div>
              <input type="Submit" className="btn btn-primary" style={{width: '50rem'}} value="Register"/>         
           </form>
       </div>
    </div>
  </div>
  
  );
}

import React, { useState } from 'react'


export default function RegisterStaff() {
  const [form, setForm] = useState({
    staffId:"",
    name: "",
    email: "",
    phone: "",
    type: "",
    password: "",
  });
  

  const handleChange = (e) => {
      setForm({...form, [e.target.name]: e.target.value});
  };

    return (
    
      <div className="container mt-md-5 pb-md-5">
      <div className="container d-flex justify-content-center">
       <div className="col-md-6">
         <h2 className="mb-4">Register Staff</h2>
          <form onSubmit="submit" style={{width: '30rem'}}>
              <div className="form-group mb-3">
                <label htmlFor="staffId">Staff ID</label>
                <input className="form-control" onChange={handleChange} type="text" name="staffId" />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="name">Name</label>
                <input className="form-control" onChange={handleChange} type="text" name="name" />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="email">Email</label>
                <input className="form-control" onChange={handleChange} type="email" name="email" />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="phone">Phone</label>
                <input className="form-control" onChange={handleChange} type="tel" name="phone"/>
              </div>
              <div className="form-group mb-3">
                <label htmlFor="type">Type</label>
                <select className="form-select"  onChange={handleChange} name="type" defaultValue="Select type">
                  <option defaultValue="Select type">Select type</option>
                  <option value="Supervisor">Supervisor</option>
                  <option value="Co-supervisor">Co-supervisor</option>
                  <option value="Panel member">Panel Member</option></select>
              </div>
              <div className="form-group mb-3">
                <label htmlFor="password">Password</label>
                <input className="form-control" onChange={handleChange} type="password" name="password" />
              </div>
              <input type="Submit" className="btn btn-primary" style={{width: '30rem'}} value="Register"/>         
           </form>
       </div>
    </div>
  </div>
  
  );
}

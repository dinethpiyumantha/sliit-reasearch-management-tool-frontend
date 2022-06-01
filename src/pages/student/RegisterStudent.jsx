import axios from "axios";
import React, { useState } from "react";

export default function RegisterStudent() {
  const [form, setform] = useState({
    studentId: "",
    name: "",
    email: "",
    password: "",
    phone: "",
    type: "student",
  });

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  const submit = (e) => {
      e.preventDefault();
      console.log(form);
      axios.post(`http://localhost:3000/api/students`, form)
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  return (
    <div>
      <div className="container d-flex justify-content-center">
        <div className="col-md-7">
          <h4 className="text-uppercase mb-3">Student Registration</h4>
          <form onSubmit={submit} style={{width: '30rem'}} >
            <div className="form-group mb-3">
              <label htmlFor="studentId">Student ID</label>
              <input onChange={handleChange} type="text" className="form-control" id="studentId" name="studentId" />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="name">Student Name</label>
              <input onChange={handleChange} type="text" className="form-control" id="name" name="name" />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="email">Email</label>
              <input onChange={handleChange} type="email" className="form-control" id="email" name="email" />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="phone">Phone</label>
              <input onChange={handleChange} type="tel" className="form-control" id="phone" name="phone" />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="password">Password</label>
              <input onChange={handleChange} type="password" className="form-control" id="password" name="password" />
            </div>
            <input type="submit" className="btn btn-success" value="Register" />
          </form>
        </div>
      </div>
    </div>
  );
}

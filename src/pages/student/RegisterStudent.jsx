import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FooterBar from "../../components/footer-bar/FooterBar";
import NavigationBar from "../../components/navigation-bar/NavigationBar";

export default function RegisterStudent() {

  const navigate = useNavigate();

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
        navigate("/index");
      })
      .catch(err => {
        console.log(err);
      });
  }

  const back = () => {
    navigate(-1);
  }

  return (
    <div>
      <div className="container d-flex justify-content-center pt-4">
        <div className="col-md-5 pt-5">
          <button onClick={back} type="button" className="btn btn-transparent border-0 mb-3 ps-0">
            <i className="fa fa-arrow-left"></i>
            <span className="ms-2">Back</span>
          </button>
          <h4 className="text-capitalize mb-3">
            <i className="fa fa-user-plus"></i>
            <span className="ms-3"></span>
            Student Registration
          </h4>
          <form onSubmit={submit}>
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
      <FooterBar />
    </div>
  );
}

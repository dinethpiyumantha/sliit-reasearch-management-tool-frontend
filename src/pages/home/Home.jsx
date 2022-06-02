import React, { useState, useContext } from 'react'
import ImageSlider from '../../components/image-slider/ImageSlider'
import Logo from '../../assets/images/logo.jpg'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../../App'

export default function Home() {
  const userContext = useContext(UserContext);

  const [form, setform] = useState({
    studentId: '',
    password: ''
  })

  let navigate = useNavigate();

  const handleChange = (e) => {
    setform({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const submit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/api/students/login', form)
    .then(res => {
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user', JSON.stringify(res.data.user));
      navigate('/');
    })
    .catch(err => {
      console.log(err)
    });
  }

  return (
    <div style={{height: '100vh'}}>
      <div className="row h-100 w-100">
        <div className="col-md-6 gradient-bg-anim text-light">
        </div>
        <div className="col-md-6 bg-light">
          <form onSubmit={submit} className="position-relative top-50 start-50 translate-middle" style={{width: '23rem'}}>
            <img src={Logo} className="img-fluid mb-4" alt="logo" style={{width: '10rem'}} />
            <h3 className="mb-4">SLIIT Research Portal</h3>
            <h5 className="mb-2">
              <i className="fas fa-user-lock"></i>
              <span className="ms-2">Sign In</span>
            </h5>
            <div className="form-group mb-3">
              <label htmlFor="exampleInputEmail1">Registration Number</label>
              <input onChange={handleChange} name="studentId" type="text" className="form-control" placeholder="" />
              <small hidden id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group mb-3">
              <label htmlFor="exampleInputEmail1">Password</label>
              <input onChange={handleChange} name="password" type="password" className="form-control" placeholder="" />
              <small hidden id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group mb-3">
              <input type="submit" className="btn btn-primary" value="Sign In" />
            </div>
            <div className="form-group mb-3">
              <Link to="/student/register" className="btn btn-link ps-0">
                <i class="fa fa-registered"></i>
                <span className="ms-2">Student Registration</span>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

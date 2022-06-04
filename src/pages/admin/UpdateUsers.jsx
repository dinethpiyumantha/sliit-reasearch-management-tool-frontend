import React, { useEffect, useState } from 'react'
import FooterBar from '../../components/footer-bar/FooterBar'
import AdminNavigationBar from '../../components/navigation-bar/AdminNavigationBar'
import NavigationBar from '../../components/navigation-bar/NavigationBar'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

export default function UpdateUsers() {

    const navigate = useNavigate();
    const [user, setUser] = useState({
        userId: "",
        name: "",
        email: "",
        phone: "",
        role: "",
    });
    const  { id } = useParams();

    const fetchData = () => {
        axios.get(`http://localhost:3000/api/users/${id}`)
        .then(res => {
            console.log(res.data);
            setUser(res.data);
        })
        .catch(err => {
            console.log(err);
        })
    }

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const submit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:3000/api/users/${id}`, user)
        .then(res => {
            console.log(res);
            fetchData();
        })
        .catch(err => {
            console.log(err);
        });
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div>
            <AdminNavigationBar />
            <div className="container mt-5">
            <div className="row d-flex justify-content-center">
            <h5 className="row d-flex justify-content-center">Update Users</h5>
            <form onSubmit={submit} className="row g-3" style={{width: '75rem'}}>   
                <div className="row mb-3">
                <label for="inputEmail3" className="col-sm-2 col-form-label">User ID</label>
                <div className="col-sm-10">
                    <input onChange={handleChange} name="userId" type="text" className="form-control" id="inputEmail3" value={user.userId}/>
                </div>
                </div>
                <div className="row mb-3">
                <label for="inputEmail3" className="col-sm-2 col-form-label">Name</label>
                <div className="col-sm-10">
                    <input onChange={handleChange} name="name" type="text" className="form-control" id="inputEmail3" value={user.name}/>
                </div>
                </div>
                <div className="row mb-3">
                <label for="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                <div className="col-sm-10">
                    <input onChange={handleChange} name="email" type="email" className="form-control" id="inputEmail3" value={user.email}/>
                </div>
                </div>
                <div className="row mb-3">
                <label for="inputEmail3" className="col-sm-2 col-form-label">Phone</label>
                <div className="col-sm-10">
                    <input onChange={handleChange} name="phone" type="tel" className="form-control" id="inputEmail3" value={user.phone}/>
                </div>
                </div>
                <div className="row mb-3">
                <label for="inputEmail3" className="col-sm-2 col-form-label">Role</label>
                <div className="col-sm-10">
                <select onChange={handleChange} name="role" id="inputState" className="form-select" value={user.role}>
                    <option value="admin" selected>Admin</option>
                    <option value="supervisor">Supervisor</option>
                    <option value="co-supervisor">Co-supervisor</option>
                    <option value="Panel Members">Panel Members</option>
                    <option value="Student">Student</option>
                </select>
                </div>
                </div>
                <div className="d-grid gap-2 d-md-block">
                <button className="btn btn-sm btn-success" type="submit">Update</button>
                <button onClick={() => navigate(-1)} className="btn ms-2 btn-sm btn-danger" type="button">Cancel</button>
            </div>
            
            </form>
            </div>
            </div>
            
            <FooterBar />
            </div>
            
    )
}
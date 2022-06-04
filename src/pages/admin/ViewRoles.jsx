import { SpaceBar } from '@mui/icons-material'
import { borderRadius } from '@mui/system'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import FooterBar from '../../components/footer-bar/FooterBar'
import AdminNavigationBar from '../../components/navigation-bar/AdminNavigationBar'
import NavigationBar from '../../components/navigation-bar/NavigationBar'

export default function ViewRoles() {

    const [users, setUsers] = useState();
    const navigate = useNavigate();

    const fetchData = () => {
        axios.get(`http://localhost:3000/api/users`)
        .then(res => {
            console.log(res.data);
            setUsers(res.data);
        })
        .catch(err => {
            console.log(err);
        })
    }

    const deleteUser = (id) => {
        axios.delete(`http://localhost:3000/api/users/${id}`)
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
    }, []);

    return (
        <div>
            <AdminNavigationBar />
            <div className="container mt-5">
            <div className="row d-flex justify-content-center">
            <table className="col-md-8 table table-striped">
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Role</th>
                </tr>
                </thead>
                <tbody>
                {users && users.map((role, index) => (
                    <tr key={index}>
                        <td>{role.userId}</td>
                        <td>{role.name}</td>
                        <td>{role.email}</td>
                        <td>{role.phone}</td>
                        <td>{role.role}</td>

                        <td>
                            <button onClick={e => navigate(`/admin/updateusers/${role._id}`)} className="btn btn-sm btn-success">Update</button>
                            <button onClick={e => deleteUser(role._id)} className="btn ms-2 btn-sm btn-danger">Delete</button>
                        </td>
                    </tr>
                ))}
               
                </tbody>
            </table>
            </div>
            </div>
            <FooterBar />
        </div>
    )
}
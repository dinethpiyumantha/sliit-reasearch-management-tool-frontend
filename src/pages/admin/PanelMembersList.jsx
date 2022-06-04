import { borderRadius } from '@mui/system'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import FooterBar from '../../components/footer-bar/FooterBar'
import AdminNavigationBar from '../../components/navigation-bar/AdminNavigationBar'
import NavigationBar from '../../components/navigation-bar/NavigationBar'

export default function PanelMembersList() {

    const [groups, setGroups] = useState();
    const [members, setMembers] = useState();

    const panelDetails = [
        {
          pid: "A001",
          pmembers: "D.M. Senavirathna",
          chief: "D.M. Prasad",
          email: "prasad@admin.sliit.lk",
          phone: "071-2345678",
        },
        {
          pid: "A001",
          pmembers: "D.M. Senavirathna",
          chief: "D.M. Prasad",
          email: "prasad@admin.sliit.lk",
          phone: "071-2345678",
        },
        {
          pid: "A001",
          pmembers: "D.M. Senavirathna",
          chief: "D.M. Prasad",
          email: "prasad@admin.sliit.lk",
          phone: "071-2345678",
        },
      ]

      const fetchData = () => {
        axios.get(`http://localhost:3000/api/groups`)
        .then(res => {
            console.log(res.data);
            setGroups(res.data);
        })
        .catch(err => {
            console.log(err);
        })

        axios.get(`http://localhost:3000/api/panelmembers`)
        .then(res => {
            console.log(res.data);
            setMembers(res.data);
        })
        .catch(err => {
            console.log(err);
        })
      }

      const pushGroup = (e, panelmember) => {
        axios.put(`http://localhost:3000/api/panelmembers/addgroup/${panelmember}`, {group: e.target.value})
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
      },[]);

      // const groups = [
      //     {
      //       id: "A001",
      //       name: "D.M. Prasad",
      //     },
      //     {
      //       id: "A002",
      //       name: "D.M. Prasad S",
      //     },
      // ]

    return (
        <div>
            <AdminNavigationBar />
            <div className="container mt-5">
            <div className="row d-flex justify-content-center">
            <table className="col-md-8 table table-striped">
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Panel</th>
                    <th>Email</th>
                    <th>Contact Number</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {members && members.map((panel, index) => (
                    <tr key={index}>
                        <td>{panel._id}</td>
                        <td>{panel.name}</td>
                        <td>{panel.phone}</td>
                        <td>{panel.email}</td>
                        <td>
                            <select className="form-control" onChange={e => pushGroup(e, panel._id)}>
                                {groups && groups.map((group, index) => (
                                    <option key={index} value={group._id}>{group.name + " - " + group._id}</option>
                                ))}
                            </select>
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
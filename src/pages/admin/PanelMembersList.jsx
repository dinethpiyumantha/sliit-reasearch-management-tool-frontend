import { borderRadius } from '@mui/system'
import React from 'react'
import FooterBar from '../../components/footer-bar/FooterBar'
import AdminNavigationBar from '../../components/navigation-bar/AdminNavigationBar'
import NavigationBar from '../../components/navigation-bar/NavigationBar'

export default function PanelMembersList() {

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

      const groups = [
          {
            id: "A001",
            name: "D.M. Prasad",
          },
          {
            id: "A002",
            name: "D.M. Prasad S",
          },
      ]

    return (
        <div>
            <AdminNavigationBar />
            <div className="container mt-5">
            <div className="row d-flex justify-content-center">
            <table className="col-md-8 table table-striped">
                <thead>
                <tr>
                    <th>Panel Id</th>
                    <th>Panel Members</th>
                    <th>Panel Chief</th>
                    <th>Email</th>
                    <th>Contact Number</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {panelDetails.map((panel, index) => (
                    <tr key={index}>
                        <td>{panel.pid}</td>
                        <td>{panel.pmembers}</td>
                        <td>{panel.chief}</td>
                        <td>{panel.email}</td>
                        <td>{panel.phone}</td>
                        
                        <td>
                            <select className="form-control">
                                {groups.map((group, index) => (
                                    <option key={index} value={group.id}>{group.name + " - " + group.id}</option>
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
import { SpaceBar } from '@mui/icons-material'
import { borderRadius } from '@mui/system'
import React from 'react'
import FooterBar from '../../components/footer-bar/FooterBar'
import AdminNavigationBar from '../../components/navigation-bar/AdminNavigationBar'
import NavigationBar from '../../components/navigation-bar/NavigationBar'

export default function ViewRoles() {

    const rolesDetails = [
        {
          id: "A001",
          name: "D.M. Prasad",
          email: "prasad@admin.sliit.lk",
          phone: "071-2345678",
          role: "Admin"
        },
        {
            id: "A001",
            name: "D.M. Prasad",
            email: "prasad@admin.sliit.lk",
            phone: "071-2345678",
            role: "Admin"
        },
        {
            id: "A001",
            name: "D.M. Prasad",
            email: "prasad@admin.sliit.lk",
            phone: "071-2345678",
            role: "Admin"
        },
      ]

      const actionUpdate = [
        {
            id: "A001",
            update : "Update",
        }
      ]

      const actionDelete = [
        {
            id: "A001",
            delete : "Delete",
        }
      ]

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
                {rolesDetails.map((role, index) => (
                    <tr key={index}>
                        <td>{role.id}</td>
                        <td>{role.name}</td>
                        <td>{role.email}</td>
                        <td>{role.phone}</td>
                        <td>{role.role}</td>

                        <td>
                            <button className="btn btn-sm btn-success">
                                {actionUpdate.map((updateAction, index) => (
                                    <option key={index} value={updateAction.id}>{updateAction.update}</option>
                                ))}
                            </button>
                           
                        
                            <button className="btn btn-sm btn-danger">
                                {actionDelete.map((deleteAction, index) => (
                                    <option key={index} value={deleteAction.id}>{deleteAction.delete}</option>
                                ))}
                            </button>
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
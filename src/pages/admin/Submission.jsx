import React from 'react'
import FooterBar from '../../components/footer-bar/FooterBar'
import AdminNavigationBar from '../../components/navigation-bar/AdminNavigationBar'
import NavigationBar from '../../components/navigation-bar/NavigationBar'

export default function ViewRoles() {

    return (
        <div>
            <AdminNavigationBar />
            <div className="container mt-5">
            <div className="row d-flex justify-content-center">
            <form class="row g-3">
            <div class="col-md-2">
                <label for="inputZip" class="form-label">Submission Type</label>
                <input type="text" class="form-control" id="inputZip"></input>
            </div>
            <div class="col-md-6">
                <label for="inputCity" class="form-label">Description</label>
                <input type="text" class="form-control" id="inputCity"></input>
            </div>
            <div class="col-md-2">
                <label for="inputState" class="form-label">File Type</label>
                <select id="inputState" class="form-select">
                    <option selected>Choose...</option>
                    <option>...</option>
                </select>
            </div>
            <div class="col-md-2">
                <label for="inputZip" class="form-label">Deadline</label>
                <input type="text" class="form-control" id="inputZip"></input>
            </div>
            <div class="d-grid gap-2 d-md-block">
                <button class="btn btn-primary" type="button">Add Items</button>
                <button class="btn btn-primary" type="button">Submit</button>
            </div>
            </form>
            
            <FooterBar />
            </div>
            </div>
        </div>
    )
}
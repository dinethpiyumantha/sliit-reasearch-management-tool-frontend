import React from 'react'
import FooterBar from '../../components/footer-bar/FooterBar'
import AdminNavigationBar from '../../components/navigation-bar/AdminNavigationBar'
import NavigationBar from '../../components/navigation-bar/NavigationBar'

export default function UploadTemplates() {

    return (
        <div>
            <AdminNavigationBar />
            <div className="container mt-5">
            <div className="row d-flex justify-content-center">
            <form className="row g-3" style={{width: '75rem'}}>   
                <div className="row mb-3">
                <label for="inputEmail3" className="col-sm-2 col-form-label">Template Name</label>
                <div className="col-sm-10">
                    <input type="name of the template" className="form-control" id="inputEmail3"/>
                </div>
                </div>
                <div className="row mb-3">
                <label for="inputEmail3" className="col-sm-2 col-form-label">Description</label>
                <div className="col-sm-10">
                    <input type="descripton" className="form-control" id="inputEmail3"/>
                </div>
                </div>
                
                <div className="row mb-3">
                <label for="inputEmail3" className="col-sm-2 col-form-label">File</label>
                <div className="col-sm-10">
                    <input type="file" className="form-control" id="inputEmail3" multiple={false} />
                </div>
                </div>
                <div className="d-grid gap-2 d-md-block">
                <button className="btn btn-sm btn-success" type="button">Update</button>
                <button className="btn ms-2 btn-sm btn-danger" type="button">Cancel</button>
            </div>
            
            </form>
            </div>
            </div>
            <FooterBar />
        </div>
            
    )
}
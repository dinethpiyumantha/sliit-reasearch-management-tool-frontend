import React from 'react'
import FooterBar from '../../components/footer-bar/FooterBar'
import NavigationBar from '../../components/navigation-bar/NavigationBar'
import SideBar from '../../components/side-bar/SideBar'

export default function RequestSupervisors() {
  return (
    <div>
        <NavigationBar />
        <div className="container mt-md-5 pb-md-5">
            <div className="row">
                <SideBar />
                <div className="col-md-9 ps-md-5">
                  <form className="mb-4" style={{maxWidth: '30rem'}}>
                    <div className="form-group mb-3">
                      <label htmlFor="exampleInputEmail1">Request Supervisor</label>
                      <small className="alert alert-success p-1 ms-2">Approved</small>
                      <select className="form-control mt-3" disabled >
                        <option>1</option>
                      </select>
                      <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                      <input type="submit" className="btn btn-sm btn-primary" value="Request" disabled />
                    </div>
                  </form>
                  <div className="border-bottom mb-4"></div>
                  <form className="mb-4" style={{maxWidth: '30rem'}}>
                    <div className="form-group mb-3">
                      <label htmlFor="exampleInputEmail1">Request Co-Supervisor</label>
                      <small className="alert alert-warning p-1 ms-2">Pending</small>
                      <select className="form-control mt-3">
                        <option>1</option>
                      </select>
                      <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                      <input type="submit" className="btn btn-sm btn-primary" value="Request" />
                    </div>
                  </form>
                </div>
            </div>
        </div>
        <FooterBar />
    </div>
  )
}

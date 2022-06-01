import React from 'react'
import FooterBar from '../../components/footer-bar/FooterBar'
import NavigationBar from '../../components/navigation-bar/NavigationBar'
import SideBar from '../../components/side-bar/SideBar'

export default function SubmitDocument() {
  return (
    <div>
        <NavigationBar />
        <div className="container mt-md-5 pb-md-5">
            <div className="row">
                <SideBar />
                <div className="col-md-9 ps-md-5">
                  <form className="mb-4 card p-4" style={{maxWidth: '40rem', background: '#2125290a'}}>
                    <div className="d-flex gap-2"><div className="bg-dark text-white rounded-circle text-center" style={{padding: '.15rem 0', width: '1.7rem', height: '1.7rem'}}>1</div><h4>PP1 Submission</h4></div>
                    <small className="text-muted mb-3">Published at {`${'2022-10-11.00:00'}`}</small>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem dolorum blanditiis, maiores hic distinctio esse aperiam sapiente harum deleniti dicta dolore quod aspernatur ullam error.</p>
                    <div className="form-group mt-3">
                      <input type="file" accept=".jpg,.jpeg" className="form-control form-control-sm" multiple />
                      <div className="progress rounded-0 my-1" style={{height: '.3rem'}}>
                        <div className="progress-bar bg-success rounded-0" role="progressbar" style={{width: `${30}%`}}></div>
                      </div>
                      <span><small className="text-muted me-2">Deadline on {`${'2022-10-11.00:00'}`}</small><small className="text-success">Time Remaining 2hrs</small></span>
                    </div>
                    <div className="form-group mt-3">
                      <input type="button" className="btn btn-sm btn-primary" value="Submit" />
                    </div>
                  </form>
                </div>
            </div>
        </div>
        <FooterBar />
    </div>
  )
}

import React from 'react'
import FooterBar from '../../components/footer-bar/FooterBar'
import NavigationBar from '../../components/navigation-bar/NavigationBar'
import SideBar from '../../components/side-bar/SideBar'

export default function Chat() {
  return (
    <div>
        <NavigationBar />
        <div className="container mt-md-5 pb-md-5">
          <div className="row">
              <SideBar />
              <div className="col-md-9 ps-md-5">
                <h4 className="mb-3">Discussion</h4>
                <div className="row d-flex justify-content-start">
                  <div className="col-md-8 message-item mb-3">
                    <small>Dineth Piyumantha</small>
                    <p>Hello !</p>
                  </div>
                </div>
                <div className="row d-flex justify-content-end">
                  <div className="col-md-8 message-item-colored mb-3 text-white">
                    <small>Dineth Piyumantha</small>
                    <p>Hello !</p>
                  </div>
                </div>
                <div className="row mt-3 border-top py-3">
                  <textarea className="col-md-12 form-control" placeholder="Type your message here..."></textarea>
                  <button type="submit" className="btn btn-primary col-md-2 ml-md-auto mt-2">
                    <span className="me-2">Send</span>
                    <i class="fa fa-paper-plane"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        <FooterBar />
    </div>
  )
}

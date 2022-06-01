import React from 'react'
import FooterBar from '../../components/footer-bar/FooterBar'
import NavigationBar from '../../components/navigation-bar/NavigationBar'
import SideBar from '../../components/side-bar/SideBar'

export default function ProfileHome() {
  return (
    <div>
        <NavigationBar />
        <div className="container mt-5">
            <div className="row">
                <SideBar />
                <div className="col-md-8">
                </div>
            </div>
        </div>
        <FooterBar />
    </div>
  )
}

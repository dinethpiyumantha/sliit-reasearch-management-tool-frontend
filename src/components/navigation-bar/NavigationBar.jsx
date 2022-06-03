import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import Logo from '../../assets/images/logo.jpg';

export default function NavigationBar() {
    
    const location = useLocation();
    
    const [path, setpath] = useState(location.pathname);
    
    useEffect(() => {
        setpath(location.pathname);
    }, []);

  return (
    <div>
        <nav className="navbar fixed-top navbar-expand-lg bg-dark navbar-dark pb-0 border-bottom">
            <div className="container">
                <div className="nav-brand">RP</div>
                <button className="navbar-toggler mb-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/" className="nav-link nav-active" href="#">Home</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Home</a>
                        </li>
                    </ul>
                </div>
                <button className="btn btn-outline-light border-0 rounded-circle" type="button">
                    <i className="fa fa-bell"></i>
                </button>
            </div>
        </nav>
        <nav className="navbar mt-5 navbar-expand-lg bg-white navbar-light border-bottom pb-0">
            <div className="container">
                <div className="text-muted">
                    <img src={Logo} alt="logo" style={{height: '2rem'}}/>
                </div>
           
                <input className="form-control w-25" type="search" placeholder="Search" aria-label="Search" />
            </div>
        </nav>
    </div>
  )
}

import React, {useEffect, useState} from "react";
import {Link, useLocation} from "react-router-dom";
import Logo from "../../assets/images/logo.jpg";

export default function AdminNavigationBar() {

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
                <div className="collapse navbar-collapse" id="adminNavbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/admin" className="nav-link nav-active" href="#">Admin</Link>
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
                <div>
                    <div className="collapse navbar-collapse" id="adminNavbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-3">
                            <li className={(path == '/admin') ? 'nav-item nav-active pb-1' : 'nav-item pb-1'}>
                                <Link to="/admin" className={(path == '/admin') ? 'btn nav-item-btn-active' : 'btn'}>
                                    <i className="fa fa-users"></i>
                                    <span className="ms-1">Users</span>
                                </Link>
                            </li>
                            <li className={(path == '/admin/panelmembers') ? 'nav-item nav-active pb-1' : 'nav-item pb-1'}>
                                <Link to="/admin/panelmembers" className={(path == '/admin/panelmembers') ? 'btn nav-item-btn-active' : 'btn'}>
                                <i className="fas fa-user-tie"></i>
                                <span className="ms-1">Panel Memebers</span>
                            </Link>
                            </li>
                            <li className={(path == '/admin/submission') ? 'nav-item nav-active pb-1' : 'nav-item pb-1'}>
                                <Link to="/admin/submission" className={(path == '/admin/submission') ? 'btn nav-item-btn-active' : 'btn'}>
                                <i className="fas fa-file-signature"></i>
                                <span className="ms-1">Submissions</span>
                            </Link>
                            </li>
                            <li className={(path == '/admin/markingschemes') ? 'nav-item nav-active pb-1' : 'nav-item pb-1'}>
                                <Link to="/admin/markingschemes" className={(path == '/admin/markingschemes') ? 'btn nav-item-btn-active' : 'btn'}>
                                <i className="fas fa-file-signature"></i>
                                <span className="ms-1">Marking Schemes</span>
                            </Link>
                            </li>
                            <li className={(path == '/admin/templateupload') ? 'nav-item nav-active pb-1' : 'nav-item pb-1'}>
                                <Link to="/admin/templateupload" className={(path == '/admin/templateupload') ? 'btn nav-item-btn-active' : 'btn'}>
                                <i className="fas fa-file-signature"></i>
                                <span className="ms-1">Templates</span>
                            </Link>
                            </li>
                            
                        </ul>
                    </div>
                </div>
                <input className="form-control w-25" type="search" placeholder="Search" aria-label="Search" />
            </div>
        </nav>
        </div>
    )}
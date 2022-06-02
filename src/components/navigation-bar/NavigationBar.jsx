import React, { useEffect, useState, useContext } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import Logo from '../../assets/images/logo.jpg';

export default function NavigationBar() {

    const userContext = useContext(UserContext);
    
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
                <div>
                    <small className="text-white">{userContext.user.email}</small>
                    <button className="btn btn-outline-light border-0 rounded-circle" type="button">
                        <i className="fa fa-bell"></i>
                    </button>
                </div>
            </div>
        </nav>
        <nav className="navbar mt-5 navbar-expand-lg bg-white navbar-light border-bottom pb-0">
            <div className="container">
                <div className="text-muted">
                    <img src={Logo} alt="logo" style={{height: '2rem'}}/>
                </div>
                <div>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-3">
                            <li className={(path == '/') ? 'nav-item nav-active pb-1' : 'nav-item pb-1'}>
                                <Link to="/" className={(path == '/') ? 'btn nav-item-btn-active' : 'btn'}>
                                    <i className="fa fa-users"></i>
                                    <span className="ms-1">Profile</span>
                                </Link>
                            </li>
                            <li className={(path == '/group/supervisors') ? 'nav-item nav-active pb-1' : 'nav-item pb-1'}>
                                <Link to="/group/supervisors" className={(path == '/group/supervisors') ? 'btn nav-item-btn-active' : 'btn'}>
                                <i className="fas fa-user-tie"></i>
                                <span className="ms-1">Supervisors</span>
                            </Link>
                            </li>
                            <li className={(path == '/group/submissions') ? 'nav-item nav-active pb-1' : 'nav-item pb-1'}>
                                <Link to="/group/submissions" className={(path == '/group/submissions') ? 'btn nav-item-btn-active' : 'btn'}>
                                <i className="fas fa-file-signature"></i>
                                <span className="ms-1">Submissions</span>
                            </Link>
                            </li>
                            <li className={(path == '/group/discussion') ? 'nav-item nav-active pb-1' : 'nav-item pb-1'}>
                                <Link to="/group/discussion" className={(path == '/group/discussion') ? 'btn nav-item-btn-active' : 'btn'}>
                                <i className="fas fa-comment-dots"></i>
                                <span className="ms-1">Discussion</span>
                            </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <input className="form-control w-25" type="search" placeholder="Search" aria-label="Search" />
            </div>
        </nav>
    </div>
  )
}

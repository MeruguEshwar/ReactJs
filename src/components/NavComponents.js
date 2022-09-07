import React, { Component } from 'react'
import { Route, Routes, Link, BrowserRouter } from 'react-router-dom';
import Aboutcomponent from './Aboutcomponent';
import Contactus from './Contactus';
import Serviecomponent from './Serviecomponent';
import Homecomponents from './Homecomponents';


export class NavComponents extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <nav className="navbar navbar-expand-lg bg-primary mb-5">
                        <div className="container-fluid">
                            <a className="navbar-brand">Navbar</a>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <Link to="/" className="nav-link active" aria-current="page">Home</Link> 
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/service" className="nav-link active" aria-current="page">Service</Link> 
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/about" className="nav-link active" aria-current="page">AboutUs</Link> 
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/contact" className="nav-link active" aria-current="page">Contactus</Link> 
                                    </li>
                                </ul>
                                <form className="d-flex" role="search">
                                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                    <button className="btn btn-outline-success" type="submit">Search</button>
                                </form>
                            </div>
                        </div>
                    </nav>
                    <Routes>
                        <Route path="/" element={<Homecomponents />} />
                        <Route path="/service" element={<Serviecomponent />} />
                        <Route path="/about" element={<Aboutcomponent />} />
                        <Route path="/contact" element={<Contactus />} />
                    </Routes>
                </BrowserRouter>
            </div>
        )
    }
}

export default NavComponents

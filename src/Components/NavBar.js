import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar(props) {
  return (
          <nav className={`navbar navbar-expand-lg navbar-${props.Mode} bg-${props.Mode}`}>
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">{props.heading}</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">Link</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="/">Action</a></li>
                    <li><a className="dropdown-item" href="/">Another action</a></li>
                    <li><a className="dropdown-item" href="/">Something else here</a></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" aria-disabled="true" to="/about">About</Link>
                </li>
              </ul>
              <div className={`form-check form-switch mx-2 text-${props.Mode === 'light'?'dark':'light'}`}>
                <input className="form-check-input" onClick={props.onclick} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
              </div>
              <div className={`form-check form-switch mx-2 text-${props.Mode === 'light'?'dark':'light'}`}>
                <input className="form-check-input" onClick={props.green} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable green Mode</label>
              </div>
              <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
          </div>
      </nav>
  )
}

// NavBar.propTypes = {
//     title: propTypes.string,
// };
  
//  // Define defaultProps for the component
// NavBar.defaultProps = {
//     title: 'Default Title',
// };

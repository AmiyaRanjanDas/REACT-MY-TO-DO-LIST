// import PropTypes from 'prop-types'
import React from 'react';
import {Link} from "react-router-dom";

export default function header({mode,fn}) {

    return (
      <>
        <nav className="navbar navbar-expand-lg " style={(mode==='Dark Mode')?({background:'rgb(0 64 255)'}):({background:'rgb(0 32 126)'})}>
          <div className="container-fluid">
            <Link className="navbar-brand" to="/" style={{color:'white'}} >TO-DO-LIST</Link>
            <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item mx-2">
                  <Link className="nav-link active" aria-current="page" to="/" style={{color:'white'}}>HOME</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about" style={{color:'white'}}>ABOUT</Link>
                </li>
              </ul>
              <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" onClick={fn}/>
                  <label className="form-check-label" htmlFor="flexSwitchCheckChecked" style={{color:'white'}}>{mode}</label>
              </div>
            </div>
          </div>
        </nav>
      </>
    )
  }



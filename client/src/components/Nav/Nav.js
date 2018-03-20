import React from 'react';
import Logo from '../../assets/img/logo.gif';

class Nav extends React.Component {
  render() {
    return (
<div className="nav-container">
    <div className="bg-dark navbar-dark" data-sticky="top">
        <div className="container">
            <nav className="navbar navbar-expand-lg">
                <a className="navbar-brand" href="/">
                    <img src={Logo} width="30" height="30" alt=""/>
                  </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="icon-menu h4"></i>
                </button>
                <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a href="/tenant" className="nav-link">Tenant</a>
                        </li>
                        <li className="nav-item">
                            <a href="/manager" className="nav-link">Manager</a>
                        </li>
                        {/* <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/" id="componentsDropdown" role="button" data-toggle="dropdown">Test Link</a>
                            <div className="dropdown-menu" aria-labelledby="componentsDropdown">
                                <a className="dropdown-item" href="/">Link 1</a>
                                <a className="dropdown-item" href="/">Link 2</a>
                            </div>
                        </li> */}
                    </ul>
                    <ul className="navbar-nav">
                    <a href="/register" className="btn btn-outline-warning" role="button" aria-pressed="true">Register</a>
                    <a href="/signin" className="btn btn-outline-warning" role="button" aria-pressed="true">Sign In</a>
                    </ul>
                </div>
            </nav>
        </div>
    </div>
</div>
    );
  }
};

export default Nav;
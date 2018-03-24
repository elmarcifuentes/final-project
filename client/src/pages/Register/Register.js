import React from 'react';
import RegisterForm from './RegisterForm';
import BackImage from '../../assets/img/register-background.jpg';
import Logo from '../../assets/img/logo.gif'
import Avatar from '../../assets/img/kyle.jpeg';

const Register = (props) => (
    
  <div className="main-container">
  <section className="fullwidth-split">
      <div className="container-fluid">
          <div className="row no-gutters height-100 justify-content-center">
              <div className="col-12 col-lg-6 fullwidth-split-image bg-dark d-flex justify-content-center align-items-center">
                  <img alt="" src={BackImage} className="bg-image position-absolute opacity-30" />
                  <div className="col-12 col-sm-8 col-lg-9 text-center pt-5 pb-5">
                      <img alt="" src={Logo} width="30" height="30" className="mb-4 logo-lg" />
                      <span className="h3 mb-5">Lorem ipsum dolor sit amet, at eam habemus consequuntur.</span>

                      <div className="card text-left">
                          <div className="card-body">
                              <div className="media">
                                  <img alt="" src={Avatar} className="avatar" />
                                  <div className="media-body">
                                      <p className="mb-1">
                                          “Lorem ipsum dolor sit amet, at eam habemus consequuntur, no has brute quando expetendis. Verear officiis erroribus.”
                                      </p>
                                      <small>Kyle Kenny, Property Manager</small>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="col-12 col-sm-8 col-lg-6 fullwidth-split-text">
                  <RegisterForm />
              </div>
          </div>
      </div>
  </section>
</div>
  )
  
  export default Register;
import React from 'react';
import BackImage from '../../assets/img/register-background.jpg';
import Logo from '../../assets/img/logo.gif'
import Avatar from '../../assets/img/avatar-register.jpg';

const Register = () => (
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
                                      <small>Jane Doe, Property Manager</small>
                                  </div>
                              </div>
                          </div>
                      </div>

                  </div>
              </div>
              <div className="col-12 col-sm-8 col-lg-6 fullwidth-split-text">
                  <div className="col-12 col-lg-8 align-self-center">
                      <div className="text-center mb-5">
                          <h1 className="h2 mb-2">Register</h1>
                          <span>Register now and be part of NewsFlash!</span>
                      </div>
                      <form className="mb-4">
                          <div className="form-group">
                              <label for="signup-email">Email Address</label>
                              <input className="form-control form-control-lg" type="email" name="email" id="signup-email" placeholder="Email Address" />
                          </div>
                          <div className="form-group">
                              <label for="signup-password">Choose a password</label>
                              <input className="form-control form-control-lg" type="password" name="password" id="signup-password" placeholder="Enter a password" />
                              <small>At least seven characters with one numeral</small>
                          </div>
                          <div>
                              <div className="custom-control custom-checkbox">
                                  <input type="checkbox" className="custom-control-input" value="agree" name="agree-terms" id="check-agree"/>
                                  <label className="custom-control-label text-small" for="check-agree">I agree to the <a href="/">Terms &amp; Conditions</a>
                                  </label>
                              </div>
                          </div>
                          <div className="text-center mt-4">
                              <button type="submit" className="btn btn-lg btn-danger">Create Account</button>
                          </div>
                      </form>
                      <div className="text-center">
                          <span className="text-small">Already have an account? <a href="/signin">Log in here</a>
                          </span>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </section>
</div>
  )
  
  export default Register;
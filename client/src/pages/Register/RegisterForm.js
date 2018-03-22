import React from 'react';

const RegisterForm = () => (
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
)

export default RegisterForm;
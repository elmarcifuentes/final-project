import React from 'react';

const SignIn = () => (
<div className="main-container">
    <section className="space-sm">
        <div className="container align-self-start">
            <div className="row justify-content-center">
                <div className="col-12 col-md-8 col-lg-7">
                    <div className="card card-lg text-center">
                        <div className="card-body">
                            <div className="mb-5">
                                <h1 className="h2 mb-2">Sign In</h1>
                                <span>Sign in to your account to continue</span>
                            </div>
                            <div className="row no-gutters justify-content-center">
                                <form className="text-left col-lg-8">
                                    <div className="form-group">
                                        <label for="login-email">Email Address</label>
                                        <input className="form-control form-control-lg" type="email" name="email" id="login-email" placeholder="Email Address" />
                                    </div>
                                    <div className="form-group">
                                        <label for="login-password">Password</label>
                                        <input className="form-control form-control-lg" type="password" name="password" id="login-password" placeholder="Enter a password" />
                                        <small>Forgot password? <a href="/">Reset here</a>
                                          </small>
                                    </div>
                                    <div>
                                        <div className="custom-control custom-checkbox align-items-center">
                                            <input type="checkbox" className="custom-control-input" value="box-1" name="box-1" checked id="check-remember" />
                                            <label className="custom-control-label text-small" for="check-remember">Remember me next time</label>
                                        </div>
                                    </div>
                                    <div className="text-center mt-3">
                                        <button type="submit" className="btn btn-lg btn-danger">Log in</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="text-center">
                        <span className="text-small">Don't have an account yet? <a href="/register">Create one</a>
                          </span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
    );

export default SignIn;
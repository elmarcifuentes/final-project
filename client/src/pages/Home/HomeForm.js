import React from 'react';

const HomeForm = () => (
<div className="card">
    <div className="card-body">
        <form>
            <div className="form-group">
                <label for="exampleInputUsername">Username</label>
                <input type="text" className="form-control form-control-lg" id="exampleInputUsername" aria-describedby="usernameHelp" placeholder="Pick a username" />
            </div>
            <div className="form-group">
                <label for="exampleInputEmail">Email address</label>
                <input type="email" className="form-control form-control-lg" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Enter email" />
                <small id="emailHelp" className="form-text">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
                <label for="exampleInputPassword">Password</label>
                <input type="password" className="form-control form-control-lg" id="exampleInputPassword" placeholder="Password" />
            </div>
            <div className="mb-3">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" value="agree" name="agree-terms" id="check-agree" />
                    <label className="custom-control-label text-small" for="check-agree">I agree to the <a href="/">Terms &amp; Conditions</a>
                    </label>
                </div>
            </div>
            <button type="submit" className="btn btn-lg btn-danger btn-block">Sign up for Wingman</button>
        </form>
    </div>
</div>
)

export default HomeForm;
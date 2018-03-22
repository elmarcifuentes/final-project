import React from 'react';

const UpdateLogin = () => (
    <div>
    <div className="row mb-4">
    <div className="col">
        <h5>Account Details</h5>
    </div>
</div>
<div className="row">
    <div className="col-12 col-md-4 order-md-2">
        <div className="alert alert-info text-small" role="alert">
            <i className="icon-shield"></i>
            <span>
                Your information is always kept encrypted and can never be accessed by third parties.
            </span>
            <a href="/">See our privacy policy</a>
        </div>
    </div>
    <div className="col-12 col-md-8 order-md-1">
        <form className="row">
            <div className="col-6">
                <div className="form-group">
                    <label for="first-name">First Name:
                        <span className="text-red">*</span>
                    </label>
                    <input className="form-control form-control-lg" type="text" name="firstName" value="Sammy" id="first-name" />
                </div>
            </div>
            <div className="col-6">
                <div className="form-group">
                    <label for="last-name">Last Name:</label>
                    <input className="form-control form-control-lg" type="text" name="lastName" value="Roberts" id="last-name" />
                </div>
            </div>
            <div className="col-12">
                <div className="form-group">
                    <label for="username">Username:
                        <span className="text-red">*</span>
                    </label>
                    <input className="form-control form-control-lg" type="text" name="userName" id="username" />
                    <small>This will be displayed on your public profile</small>
                </div>
            </div>
            <div className="col-12">
                <div className="form-group">
                    <label for="emailaddress">Email Address:
                        <span className="text-red">*</span>
                    </label>
                    <input className="form-control form-control-lg" type="email" name="emailAddress" id="emailaddress" />
                    <small>Used to log in to your account</small>
                </div>
            </div>
            <div className="col-12">
                <div className="form-group">
                    <button className="btn btn-secondary" type="submit" disabled>Save changes</button>
                </div>
            </div>
        </form>
    </div>
</div>
</div>

)

export default UpdateLogin;
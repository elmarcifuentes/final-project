import React from 'react';

const UpdateContact = () => (
    <div>
    <div className="row mb-4">
    <div className="col">
        <h5>Profile Information</h5>
    </div>
</div>
<div className="row">
    <div className="col-12 col-md-4 order-md-2">
        <div className="alert alert-info text-small" role="alert">
            <i className="icon-user"></i>
            <span>
                    This information will appear on your public profile. A detailed public profile helps users with similar professional interests and location to connect with you.
                </span>
            <a href="/">View your public profile</a>
        </div>
    </div>
    <div className="col-12 col-md-8 order-md-1">
        <form className="row">
            <div className="col-6">
                <div className="form-group">
                    <label for="city">City:</label>
                    <input className="form-control form-control-lg" type="text" name="profileCity" value="Irvine" id="city" />
                </div>
            </div>
            <div className="col-6">
                <div className="form-group">
                    <label for="state">State:</label>
                    <input className="form-control form-control-lg" type="text" name="profileState" value="CA" id="state" />
                </div>
            </div>
            <div className="col-12">
                <div className="form-group">
                    <label for="website">Website:</label>
                    <input className="form-control form-control-lg" type="text" name="profileWebsite" id="website" />
                    <small>This will be displayed on your public profile</small>
                </div>
            </div>
            <div className="col-12">
                <div className="form-group">
                    <label for="twitter">Twitter Handle:</label>
                    <div className="input-group input-group-lg">
                        <div className="input-group-prepend">
                            <span className="input-group-text">@</span>
                        </div>
                        <input type="text" className="form-control" placeholder="Username" aria-label="twitterUsername" name="profileTwitter" id="twitter" />
                    </div>
                </div>
            </div>
            <div className="col-12">
                <div className="form-group">
                    <label for="about-me">About me:</label>
                    <textarea className="form-control form-control-lg" name="profileBio" rows="4" id="about-me"></textarea>
                </div>
            </div>
            <div className="col-12">
                <div className="form-group">
                    <div className="custom-control custom-checkbox custom-checkbox-switch">
                        <input type="checkbox" className="custom-control-input" name="profilePublic" id="public" />
                        <label className="custom-control-label" for="public">Make my profile public</label>
                    </div>
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

export default UpdateContact;
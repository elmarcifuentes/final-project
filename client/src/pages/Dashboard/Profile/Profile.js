import React from 'react';
import UserAvatar from '../../../assets/img/sammy.jpeg';
const axios = require('axios');

const request = require('request');

class Profile extends React.Component {

    constructor(props){
        super(props)

        this.state={
            firstName:'',
            lastName:'',
            username:'',
            address:{

            },
        };
    }
    

    componentDidMount(){
        console.log('componentDidMount')

        request.get('http://localhost:3001/user/read/userId=5ab4bbf7b1eb070cdd40f5f1', function(error, response,body){

            if(error){
                console.log(error);
            }

            //console.log(response.body);
            console.log(body);


        })
        // axios.get('https://localhost:3001/user/read/',{
        //     params: {
        //         //Hard-coded to test for ALICE user
        //         userId:'5ab364ef5eef856dca42d854'
        //     },
        //     proxy:{
        //         host:'localhost',
        //         port: 3001
        //     }
        // })
        //     .then( response =>{
        //         console.log(response)
        //     })

    }


    render() {



        return (
            <div className="tab-pane fade show active" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="media flex-wrap mb-0 align-items-center">
                                        <img alt="" src={UserAvatar} className="avatar avatar-lg mb-3 mb-md-0" />
                                        <div className="media-body">
                                            <form>
                                                <label className="custom-file mb-2" htmlFor="file2">
                                                    <input type="file" id="file2" className="custom-file-input height-0"/>
                                                    <span className="btn btn-primary"><i className="icon-upload-to-cloud">&nbsp;</i>Upload</span>
                                                </label>
                                        <div>
                                                    <small>For best results, use an image at least 256px by 256px in either .jpg or .png format</small>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                {/* <!--end of col--> */}
                            </div>
                            {/* <!--end of row--> */}
                            <hr/>
                            <div className="row mb-4">
                                <div className="col">
                                    <h5>Account Details</h5>
                                </div>
                                {/* <!--end of col--> */}
                            </div>
                            {/* <!--end of row--> */}
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
                                {/* <!--end of col--> */}
                                <div className="col-12 col-md-8 order-md-1">
                                    <form className="row">
                                        <div className="col-6">
                                            <div className="form-group">
                                                <label htmlFor="first-name">First Name:
                                                    <span className="text-red">*</span>
                                                </label>
                                                <input className="form-control form-control-lg" type="text" name="firstName" value="Sammy" id="first-name" />
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="form-group">
                                                <label htmlFor="last-name">Last Name:</label>
                                                <input className="form-control form-control-lg" type="text" name="lastName" value="Roberts" id="last-name" />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group">
                                                <label htmlFor="username">Username:
                                                    <span className="text-red">*</span>
                                                </label>
                                                <input className="form-control form-control-lg" type="text" name="userName" id="username" />
                                                <small>This will be displayed on your public profile</small>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group">
                                                <label htmlFor="emailaddress">Email Address:
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
                                {/* <!--end of col--> */}
                            </div>
                            {/* <!--end of row--> */}
                            <hr/>
                            <div className="row mb-4">
                                <div className="col">
                                    <h5>Profile Information</h5>
                                </div>
                                {/* <!--end of col--> */}
                            </div>
                            {/* <!--end of row--> */}
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
                                {/* <!--end of col--> */}
                                <div className="col-12 col-md-8 order-md-1">
                                    <form className="row">
                                        <div className="col-6">
                                            <div className="form-group">
                                                <label htmlFor="city">City:</label>
                                                <input className="form-control form-control-lg" type="text" name="profileCity" value="Irvine" id="city" />
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="form-group">
                                                <label htmlFor="state">State:</label>
                                                <input className="form-control form-control-lg" type="text" name="profileState" value="CA" id="state" />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group">
                                                <label htmlFor="website">Website:</label>
                                                <input className="form-control form-control-lg" type="text" name="profileWebsite" id="website" />
                                                <small>This will be displayed on your public profile</small>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group">
                                                <label htmlFor="twitter">Twitter Handle:</label>
                                                <div className="input-group input-group-lg">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text">@</span>
                                                    </div>
                                                    <input type="text" className="form-control" placeholder="Username" aria-label="twitterUsername" name="profileTwitter" id="twitter"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group">
                                                <label htmlFor="about-me">About me:</label>
                                                <textarea className="form-control form-control-lg" name="profileBio" rows="4" id="about-me"></textarea>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group">
                                                <div className="custom-control custom-checkbox custom-checkbox-switch">
                                                    <input type="checkbox" className="custom-control-input" name="profilePublic" id="public" />
                                                    <label className="custom-control-label" htmlFor="public">Make my profile public</label>
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
                                {/* <!--end of col--> */}
                            </div>
                            {/* <!--end of row--> */}
                        </div>
                        {/* <!--end of container--> */}
                    </div>
        );
    }
};

export default Profile;
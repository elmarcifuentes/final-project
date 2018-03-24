import React, { Component } from 'react';
import axios from "axios";

class RegisterForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            accountStatus: ""
        }
        this.submit = this.submit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }


    submit(e) {
        e.preventDefault();
        axios.post("/auth/register", this.state)
        .then(resp => {
            console.log(resp);
            this.props.history.push("/auth/signin");
        })
        .catch(err => {
            console.error(err);
        })
    }

      
    render() {
        return (
<div className="card">
    <div className="card-body">
        <form>
            <div className="form-group">
                <label>First Name</label>
                <input type="firstName" name="firstName" onChange={this.handleInputChange} className="form-control form-control-lg" id="exampleInputFirstName" aria-describedby="FirstNameHelp" placeholder="First Name" />
            </div>
            <div className="form-group">
                <label>Last Name</label>
                <input type="lastName" name="lastName" onChange={this.handleInputChange} className="form-control form-control-lg" id="exampleInputLastName" aria-describedby="LastNameHelp" placeholder="Last Name" />
            </div>
            <div className="form-group">
                <label>Username</label>
                <input type="username" name="username" onChange={this.handleInputChange} className="form-control form-control-lg" id="exampleInputUsername" aria-describedby="usernameHelp" placeholder="Pick a Username" />
            </div>
            <div className="form-group">
                <label>Status</label>
                <input type="accountStatus" name="accountStatus" onChange={this.handleInputChange} className="form-control form-control-lg" id="exampleInputStatus" aria-describedby="StatusHelp" placeholder="Tenant or Manager" />
            </div>
            <div className="form-group">
                <label>Email address</label>
                <input type="email" name="email" onChange={this.handleInputChange} className="form-control form-control-lg" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Email" />
                <small id="emailHelp" className="form-text">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
                <label>Password</label>
                <input type="password" name="password" onChange={this.handleInputChange} className="form-control form-control-lg" id="exampleInputPassword" placeholder="Password" />
            </div>
            <div className="mb-3">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" value="agree" name="agree-terms" id="check-agree" />
                    <label className="custom-control-label text-small">I agree to the <a href="/">Terms &amp; Conditions</a>
                    </label>
                </div>
            </div>
            <button type="submit" className="btn btn-lg btn-danger btn-block" onClick={this.submit}>NewsFlash Sign Up</button>
        </form>
    </div>
</div>
        );
    }
}

export default RegisterForm;
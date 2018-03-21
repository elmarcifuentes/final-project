import React from 'react';
import Profile from '../Profile/Profile';
import Billing from '../Billing/Billing';
import Documents from '../Documents/Documents';
import Announcements from '../Announcements/Announcements';
import Chat from '../Chat/Chat';

class Dashboard extends React.Component {
    render() {
        return (
            <div className="main-container">
            <section className="bg-white space-sm pb-4">
                <div className="container">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-auto">
                            <h1 className="h2">Tenant/Manager Dashboard</h1>
                        </div>
                        <div className="col-auto text-right">
                            <a href="/" className="btn btn-danger">Sign Out</a>
                        </div>
                    </div>
                </div>
            </section>
            <section className="flush-with-above space-0">
                <div className="bg-white">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <ul className="nav nav-tabs" id="myTab" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="true">Profile</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="billing-tab" data-toggle="tab" href="#billing" role="tab" aria-controls="billing" aria-selected="false">Billing</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="documents-tab" data-toggle="tab" href="#documents" role="tab" aria-controls="documents" aria-selected="false">Documents</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="announcements-tab" data-toggle="tab" href="#announcements" role="tab" aria-controls="announcements" aria-selected="false">Announcements</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="chat-tab" data-toggle="tab" href="#chat" role="tab" aria-controls="chat" aria-selected="false">Chat</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="flush-with-above height-80 d-block">
            <div class="tab-content">
            <Profile/>
            <Billing/>
            <Documents/>
            <Announcements/>
            <Chat/>
            </div>
            </section>
            </div>
        );
    }
};

export default Dashboard;
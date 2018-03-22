import React from 'react';
import Profile from '../Dashboard/Profile/index';
import Billing from '../Dashboard/Billing/Billing';
import Documents from '../Dashboard/Documents/Documents';
import Announcements from '../Dashboard/Announcements/index';
import Chat from '../Dashboard/Chat/Chat';

const Dashboard = () => (
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
            <div className="tab-pane fade show active" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                <Profile/>
            </div>
            <div class="tab-pane fade" id="billing" role="tabpanel" arialabelledby="billing-tab">
                <Billing/>
            </div>
            <div className="tab-pane fade" id="documents" role="tabpanel" arialabelledby="documents-tab">
                <Documents/>
            </div>
            <div class="tab-pane fade" id="announcements" role="tabpanel" arialabelledby="announcements-tab">
                <Announcements/>
            </div>
            <div class="tab-pane fade" id="chat" role="tabpanel" arialabelledby="chat-tab">
                <Chat/>
            </div>
        </div>
    </section>
</div>
)

export default Dashboard;
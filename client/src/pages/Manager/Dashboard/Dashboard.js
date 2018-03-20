import React from 'react';

class Manager extends React.Component {
    render() {
        return (
            <div className="main-container">
            <section className="bg-white space-sm pb-4">
                <div className="container">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-auto">
                            <h1 className="h2">Manager Dashboard</h1>
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
                                        <a className="nav-link active" id="overview-tab" data-toggle="tab" href="#general" role="tab" aria-controls="general" aria-selected="true">General</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="billing-tab" data-toggle="tab" href="#billing" role="tab" aria-controls="billing" aria-selected="false">Billing</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="security-tab" data-toggle="tab" href="#security" role="tab" aria-controls="security" aria-selected="false">Security</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="notifications-tab" data-toggle="tab" href="#notifications" role="tab" aria-controls="notifications" aria-selected="false">Notifications</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </div>
        );
    }
};

export default Manager;
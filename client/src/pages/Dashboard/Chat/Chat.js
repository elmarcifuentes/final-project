import React from 'react';
import UserAvatar from '../../../assets/img/avatar-register.jpg';

const Chat = () => (
    <div className="main-container">
    <section>
        <div className="container">
            <div className="row card flex-row">
                <div className="col-auto">
                    <form className="card-header d-none d-lg-block">
                        <input className="form-control form-control-lg" type="search" placeholder="Search chat" />
                    </form>
                    <div className="list-group list-group-chat list-group-flush">
                        <a href="/" className="list-group-item list-group-item-action active">
                            <div className="media">
                                <img alt="" src={UserAvatar} className="avatar avatar-sm m-0" />
                                <div className="media-body d-none d-lg-block ml-2">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <h6 className="mb-0">Daniel Cameron
                                                    <span className="badge badge-indicator badge-success"></span>
                                                </h6>
                                        <div>
                                            <small className="text-muted">1 hour ago</small>
                                        </div>
                                    </div>
                                    <span className="text-muted text-small col-11 p-0 text-truncate d-block">Let's keep those protoypes 100</span>
                                </div>
                            </div>
                        </a>
                        <a href="/" className="list-group-item list-group-item-action">
                            <div className="media">
                                <img alt="" src={UserAvatar} className="avatar avatar-sm m-0" />
                                <div className="media-body d-none d-lg-block ml-2">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <h6 className="mb-0">Mercy Ketteridge</h6>
                                        <div>
                                            <small className="text-muted">1 hour ago</small>
                                        </div>
                                    </div>
                                    <span className="text-muted text-small col-11 p-0 text-truncate d-block">How should I go about this issue I'm facing</span>
                                </div>
                            </div>
                        </a>
                        <a href="/" className="list-group-item list-group-item-action">
                            <div className="media">
                                <img alt="" src={UserAvatar} className="avatar avatar-sm m-0" />
                                <div className="media-body d-none d-lg-block ml-2">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <h6 className="mb-0">Sven Lansson</h6>
                                        <div>
                                            <small className="text-muted">2 hours ago</small>
                                        </div>
                                    </div>
                                    <span className="text-muted text-small col-11 p-0 text-truncate d-block">Can you send through the logo files?</span>
                                </div>
                            </div>
                        </a>
                        <a href="/" className="list-group-item list-group-item-action">
                            <div className="media">
                                <img alt="" src={UserAvatar} className="avatar avatar-sm m-0" />
                                <div className="media-body d-none d-lg-block ml-2">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <h6 className="mb-0">Bart Van Wissen</h6>
                                        <div>
                                            <small className="text-muted">7 hours ago</small>
                                        </div>
                                    </div>
                                    <span className="text-muted text-small col-11 p-0 text-truncate d-block">I'm collecting names for the annual event</span>
                                </div>
                            </div>
                        </a>
                        <a href="/" className="list-group-item list-group-item-action">
                            <div className="media">
                                <img alt="" src={UserAvatar} className="avatar avatar-sm m-0" />
                                <div className="media-body d-none d-lg-block ml-2">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <h6 className="mb-0">Vanessa Sampson</h6>
                                        <div>
                                            <small className="text-muted">7 hours ago</small>
                                        </div>
                                    </div>
                                    <span className="text-muted text-small col-11 p-0 text-truncate d-block">Are we all remembering to stay agile?</span>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                {/*
                <!--end of col-->*/}
                <div className="col">
                    <div className="card-header d-flex justify-content-between align-items-center">
                        <div className="media align-items-center">
                            <img alt="" src={UserAvatar} className="avatar avatar-sm" />
                            <div className="media-body">
                                <h6 className="mb-0 d-block">Daniel Cameron
                                            <span className="badge badge-indicator badge-success"></span>
                                        </h6>
                                <span className="text-muted text-small">last seen today at 2:15pm</span>
                            </div>
                        </div>
                        <div className="dropdown">
                            <button className="btn btn-outline-secondary dropdown-toggle dropdown-toggle-no-arrow" type="button" id="Button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="icon-chevron-down"></i>
                            </button>
                            <div className="dropdown-menu dropdown-menu-right dropdown-menu-sm" aria-labelledby="Button">
                                <a className="dropdown-item" href="/">Contact info</a>
                                <a className="dropdown-item" href="/">Mute</a>
                                <a className="dropdown-item" href="/">Clear messages</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="/">Delete chat</a>
                            </div>
                        </div>
                    </div>
                    {/*
                    <!--end card header-->*/}
                    <div className="card-body overflow-auto">
                        <div className="row justify-content-start">
                            <div className="col-auto">
                                <div className="card bg-secondary">
                                    <div className="card-body p-2">
                                        <p className="mb-0">
                                            Agreed, their after-sales support is second-to-none.
                                        </p>
                                        <div>
                                            <small className="opacity-60">1:08pm</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-end text-right">
                            <div className="col-auto">
                                <div className="card bg-primary text-white">
                                    <div className="card-body p-2">
                                        <p className="mb-0">
                                            Same! The guys at Medium Rare are also top blokes
                                        </p>
                                        <div>
                                            <i className="icon-check text-small"></i>
                                            <small className="opacity-60">1:07pm</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-start">
                            <div className="col-auto">
                                <div className="card bg-secondary">
                                    <div className="card-body p-2">
                                        <p className="mb-0">
                                            Yeah talk about speedy, it saves me so much time and effort {/* &#x1F44C; */}
                                        </p>
                                        <div>
                                            <small className="opacity-60">1:06pm</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-end text-right">
                            <div className="col-auto">
                                <div className="card bg-primary text-white">
                                    <div className="card-body p-2">
                                        <p className="mb-0">
                                            I know, right? We've been using Wingman for all our internal projects for a while now
                                        </p>
                                        <div>
                                            <i className="icon-check text-small"></i>
                                            <small className="opacity-60">1:05pm</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-start">
                            <div className="col-auto">
                                <div className="card bg-secondary">
                                    <div className="card-body p-2">
                                        <p className="mb-0">
                                            Of course, I'm not a fool!
                                        </p>
                                        <div>
                                            <small className="opacity-60">1:05pm</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-end text-right">
                            <div className="col-auto">
                                <div className="card bg-primary text-white">
                                    <div className="card-body p-2">
                                        <p className="mb-0">
                                            Awesome, did you make it with Wingman?
                                        </p>
                                        <div>
                                            <i className="icon-check text-small"></i>
                                            <small className="opacity-60">1:05pm</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-start">
                            <div className="col-auto">
                                <div className="card bg-secondary">
                                    <div className="card-body p-2">
                                        <p className="mb-0">
                                            Yes, all synced to the drive for you guys {/* &#x1F44D; */}
                                        </p>
                                        <div>
                                            <small className="opacity-60">1:04pm</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-end text-right">
                            <div className="col-auto">
                                <div className="card bg-primary text-white">
                                    <div className="card-body p-2">
                                        <p className="mb-0">
                                            Hey, what's up? Did you manage to get those prototypes together?
                                        </p>
                                        <div>
                                            <i className="icon-check text-small"></i>
                                            <small className="opacity-60">1:04pm</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-4">
                            <div className="col text-center">
                                <span className="badge badge-secondary">Conversation Started: Yesterday</span>
                            </div>
                            {/*
                            <!--end of col-->*/}
                        </div>
                    </div>
                    <div className="card-footer bg-secondary">
                        <form className="d-flex align-items-center">
                            <div className="input-group input-group-lg">
                                <div className="input-group-prepend">
                                    <button className="btn btn-secondary" type="button">
                                        <i className="icon-attachment"></i>
                                    </button>
                                </div>
                                <input className="form-control" type="text" placeholder="Type a message" name="message" />
                            </div>
                            <button className="btn btn-link pr-0">
                                {/* <span className="h3">&#x1F600;</span> */}
                            </button>
                        </form>
                    </div>
                </div>
                {/*
                <!--end of col-->*/}
            </div>
            {/*
            <!--end of row-->*/}
        </div>
        {/*
        <!--end of container-->*/}
    </section>
    {/*
    <!--end of section-->*/}
</div>
)

export default Chat;
import React from 'react';
import UserAvatar from '../../../assets/img/avatar-register.jpg';

class Chat extends React.Component {
    render() {
        return (
            <div class="tab-pane fade" id="chat" role="tabpanel" arialabelledby="chat-tab">
                    <div class="main-container">
            <section>
                <div class="container">
                    <div class="row card flex-row">
                        <div class="col-auto">
                            <form class="card-header d-none d-lg-block">
                                <input class="form-control form-control-lg" type="search" placeholder="Search chat" />
                            </form>
                            <div class="list-group list-group-chat list-group-flush">

                                <a href="/" class="list-group-item list-group-item-action active">
                                    <div class="media">
                                        <img alt="" src={UserAvatar} class="avatar avatar-sm m-0" />
                                        <div class="media-body d-none d-lg-block ml-2">
                                            <div class="d-flex justify-content-between align-items-center">
                                                <h6 class="mb-0">Daniel Cameron
                                                    <span class="badge badge-indicator badge-success"></span>
                                                </h6>
                                                <div>
                                                    <small class="text-muted">1 hour ago</small>
                                                </div>
                                            </div>
                                            <span class="text-muted text-small col-11 p-0 text-truncate d-block">Let's keep those protoypes 100</span>
                                        </div>
                                    </div>
                                </a>

                                <a href="/" class="list-group-item list-group-item-action">
                                    <div class="media">
                                        <img alt="" src={UserAvatar} class="avatar avatar-sm m-0" />
                                        <div class="media-body d-none d-lg-block ml-2">
                                            <div class="d-flex justify-content-between align-items-center">
                                                <h6 class="mb-0">Mercy Ketteridge</h6>
                                                <div>
                                                    <small class="text-muted">1 hour ago</small>
                                                </div>
                                            </div>
                                            <span class="text-muted text-small col-11 p-0 text-truncate d-block">How should I go about this issue I'm facing</span>
                                        </div>
                                    </div>
                                </a>

                                <a href="/" class="list-group-item list-group-item-action">
                                    <div class="media">
                                        <img alt="" src={UserAvatar} class="avatar avatar-sm m-0" />
                                        <div class="media-body d-none d-lg-block ml-2">
                                            <div class="d-flex justify-content-between align-items-center">
                                                <h6 class="mb-0">Sven Lansson</h6>
                                                <div>
                                                    <small class="text-muted">2 hours ago</small>
                                                </div>
                                            </div>
                                            <span class="text-muted text-small col-11 p-0 text-truncate d-block">Can you send through the logo files?</span>
                                        </div>
                                    </div>
                                </a>

                                <a href="/" class="list-group-item list-group-item-action">
                                    <div class="media">
                                        <img alt="" src={UserAvatar} class="avatar avatar-sm m-0" />
                                        <div class="media-body d-none d-lg-block ml-2">
                                            <div class="d-flex justify-content-between align-items-center">
                                                <h6 class="mb-0">Bart Van Wissen</h6>
                                                <div>
                                                    <small class="text-muted">7 hours ago</small>
                                                </div>
                                            </div>
                                            <span class="text-muted text-small col-11 p-0 text-truncate d-block">I'm collecting names for the annual event</span>
                                        </div>
                                    </div>
                                </a>

                                <a href="/" class="list-group-item list-group-item-action">
                                    <div class="media">
                                        <img alt="" src={UserAvatar} class="avatar avatar-sm m-0" />
                                        <div class="media-body d-none d-lg-block ml-2">
                                            <div class="d-flex justify-content-between align-items-center">
                                                <h6 class="mb-0">Vanessa Sampson</h6>
                                                <div>
                                                    <small class="text-muted">7 hours ago</small>
                                                </div>
                                            </div>
                                            <span class="text-muted text-small col-11 p-0 text-truncate d-block">Are we all remembering to stay agile?</span>
                                        </div>
                                    </div>
                                </a>

                            </div>
                        </div>
                        {/* <!--end of col--> */}
                        <div class="col">
                            <div class="card-header d-flex justify-content-between align-items-center">

                                <div class="media align-items-center">
                                    <img alt="" src={UserAvatar} class="avatar avatar-sm" />
                                    <div class="media-body">
                                        <h6 class="mb-0 d-block">Daniel Cameron
                                            <span class="badge badge-indicator badge-success"></span>
                                        </h6>
                                        <span class="text-muted text-small">last seen today at 2:15pm</span>
                                    </div>
                                </div>

                                <div class="dropdown">
                                    <button class="btn btn-outline-secondary dropdown-toggle dropdown-toggle-no-arrow" type="button" id="Button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i class="icon-chevron-down"></i>
                                    </button>
                                    <div class="dropdown-menu dropdown-menu-right dropdown-menu-sm" aria-labelledby="Button">
                                        <a class="dropdown-item" href="/">Contact info</a>
                                        <a class="dropdown-item" href="/">Mute</a>
                                        <a class="dropdown-item" href="/">Clear messages</a>
                                        <div class="dropdown-divider"></div>
                                        <a class="dropdown-item" href="/">Delete chat</a>
                                    </div>
                                </div>
                            </div>
                            {/* <!--end card header--> */}
                            <div class="card-body overflow-auto">

                                <div class="row justify-content-start">
                                    <div class="col-auto">
                                        <div class="card bg-secondary">
                                            <div class="card-body p-2">

                                                <p class="mb-0">
                                                    Agreed, their after-sales support is second-to-none.
                                                </p>
                                                <div>

                                                    <small class="opacity-60">1:08pm</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="row justify-content-end text-right">
                                    <div class="col-auto">
                                        <div class="card bg-primary text-white">
                                            <div class="card-body p-2">

                                                <p class="mb-0">
                                                    Same! The guys at Medium Rare are also top blokes
                                                </p>
                                                <div>

                                                    <i class="icon-check text-small"></i>

                                                    <small class="opacity-60">1:07pm</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="row justify-content-start">
                                    <div class="col-auto">
                                        <div class="card bg-secondary">
                                            <div class="card-body p-2">

                                                <p class="mb-0">
                                                    Yeah talk about speedy, it saves me so much time and effort 
                                                    {/* &#x1F44C; */}
                                                </p>
                                                <div>

                                                    <small class="opacity-60">1:06pm</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="row justify-content-end text-right">
                                    <div class="col-auto">
                                        <div class="card bg-primary text-white">
                                            <div class="card-body p-2">

                                                <p class="mb-0">
                                                    I know, right? We've been using Wingman for all our internal projects for a while now
                                                </p>
                                                <div>

                                                    <i class="icon-check text-small"></i>

                                                    <small class="opacity-60">1:05pm</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="row justify-content-start">
                                    <div class="col-auto">
                                        <div class="card bg-secondary">
                                            <div class="card-body p-2">

                                                <p class="mb-0">
                                                    Of course, I'm not a fool!
                                                </p>
                                                <div>

                                                    <small class="opacity-60">1:05pm</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="row justify-content-end text-right">
                                    <div class="col-auto">
                                        <div class="card bg-primary text-white">
                                            <div class="card-body p-2">

                                                <p class="mb-0">
                                                    Awesome, did you make it with Wingman?
                                                </p>
                                                <div>

                                                    <i class="icon-check text-small"></i>

                                                    <small class="opacity-60">1:05pm</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="row justify-content-start">
                                    <div class="col-auto">
                                        <div class="card bg-secondary">
                                            <div class="card-body p-2">

                                                <p class="mb-0">
                                                    Yes, all synced to the drive for you guys 
                                                    {/* &#x1F44D; */}
                                                </p>
                                                <div>

                                                    <small class="opacity-60">1:04pm</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="row justify-content-end text-right">
                                    <div class="col-auto">
                                        <div class="card bg-primary text-white">
                                            <div class="card-body p-2">

                                                <p class="mb-0">
                                                    Hey, what's up? Did you manage to get those prototypes together?
                                                </p>
                                                <div>

                                                    <i class="icon-check text-small"></i>

                                                    <small class="opacity-60">1:04pm</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="row mb-4">
                                    <div class="col text-center">
                                        <span class="badge badge-secondary">Conversation Started: Yesterday</span>
                                    </div>
                                    {/* <!--end of col--> */}
                                </div>
                            </div>
                            <div class="card-footer bg-secondary">
                                <form class="d-flex align-items-center">
                                    <div class="input-group input-group-lg">
                                        <div class="input-group-prepend">
                                            <button class="btn btn-secondary" type="button">
                                                <i class="icon-attachment"></i>
                                            </button>
                                        </div>
                                        <input class="form-control" type="text" placeholder="Type a message" name="message" />
                                    </div>
                                    <button class="btn btn-link pr-0">
                                        {/* <span class="h3">&#x1F600;</span> */}
                                    </button>
                                </form>
                            </div>
                        </div>
                        {/* <!--end of col--> */}
                    </div>
                    {/* <!--end of row--> */}
                </div>
                {/* <!--end of container--> */}
            </section>
            {/* <!--end of section--> */}
        </div>
            </div>
        );
    }
};

export default Chat;
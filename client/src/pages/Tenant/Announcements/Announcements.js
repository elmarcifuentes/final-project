import React from 'react';
import CardImage from '../../../assets/img/announcement.jpg';

class Announcements extends React.Component {
    render() {
        return (
            <div class="tab-pane fade" id="announcements" role="tabpanel" arialabelledby="announcements-tab">
                                    <div class="container">
                            <ul class="row feature-list feature-list-sm">

                                <li class="col-12 col-md-6 col-lg-4">
                                    <div class="card">
                                        <a href="">
                                            <img class="card-img-top" src={CardImage} alt=""/>
                                        </a>
                                        <div class="card-body">
                                            <a href="">
                                                <h4 class="card-title">Bench</h4>
                                                <p class="card-text text-body">Accounting for creative people</p>
                                            </a>
                                        </div>
                                        <div class="card-footer card-footer-borderless d-flex justify-content-between">
                                            <div class="text-small">
                                                <ul class="list-inline">
                                                    <li class="list-inline-item"><i class="icon-heart mr-1"></i> 373</li>
                                                    <li class="list-inline-item"><i class="icon-message mr-1"></i> 62</li>
                                                </ul>
                                            </div>
                                            <div class="dropup">
                                                <button class="btn btn-sm btn-outline-primary dropdown-toggle dropdown-toggle-no-arrow" type="button" id="BenchButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <i class="icon-dots-three-horizontal"></i>
                                                </button>
                                                <div class="dropdown-menu dropdown-menu-sm" aria-labelledby="BenchButton">
                                                    <a class="dropdown-item" href="">Save</a>
                                                    <a class="dropdown-item" href="">Share</a>
                                                    <a class="dropdown-item" href="">Comment</a>
                                                    <div class="dropdown-divider"></div>
                                                    <a class="dropdown-item" href="">Report</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                {/* <!--end of col--> */}

                                <li class="col-12 col-md-6 col-lg-4">
                                    <div class="card">
                                        <a href="">
                                            <img class="card-img-top" src={CardImage} alt=""/>
                                        </a>
                                        <div class="card-body">
                                            <a href="">
                                                <h4 class="card-title">Kin</h4>
                                                <p class="card-text text-body">The digital fashion assistant</p>
                                            </a>
                                        </div>
                                        <div class="card-footer card-footer-borderless d-flex justify-content-between">
                                            <div class="text-small">
                                                <ul class="list-inline">
                                                    <li class="list-inline-item"><i class="icon-heart mr-1"></i> 84</li>
                                                    <li class="list-inline-item"><i class="icon-message mr-1"></i> 21</li>
                                                </ul>
                                            </div>
                                            <div class="dropup">
                                                <button class="btn btn-sm btn-outline-primary dropdown-toggle dropdown-toggle-no-arrow" type="button" id="KinButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <i class="icon-dots-three-horizontal"></i>
                                                </button>
                                                <div class="dropdown-menu dropdown-menu-sm" aria-labelledby="KinButton">
                                                    <a class="dropdown-item" href="">Save</a>
                                                    <a class="dropdown-item" href="">Share</a>
                                                    <a class="dropdown-item" href="">Comment</a>
                                                    <div class="dropdown-divider"></div>
                                                    <a class="dropdown-item" href="">Report</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                {/* <!--end of col--> */}

                                <li class="col-12 col-md-6 col-lg-4">
                                    <div class="card">
                                        <a href="">
                                            <img class="card-img-top" src={CardImage} alt=""/>
                                        </a>
                                        <div class="card-body">
                                            <a href="">
                                                <h4 class="card-title">Paydar</h4>
                                                <p class="card-text text-body">Location based touch payments</p>
                                            </a>
                                        </div>
                                        <div class="card-footer card-footer-borderless d-flex justify-content-between">
                                            <div class="text-small">
                                                <ul class="list-inline">
                                                    <li class="list-inline-item"><i class="icon-heart mr-1"></i> 253</li>
                                                    <li class="list-inline-item"><i class="icon-message mr-1"></i> 19</li>
                                                </ul>
                                            </div>
                                            <div class="dropup">
                                                <button class="btn btn-sm btn-outline-primary dropdown-toggle dropdown-toggle-no-arrow" type="button" id="PaydarButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <i class="icon-dots-three-horizontal"></i>
                                                </button>
                                                <div class="dropdown-menu dropdown-menu-sm" aria-labelledby="PaydarButton">
                                                    <a class="dropdown-item" href="">Save</a>
                                                    <a class="dropdown-item" href="">Share</a>
                                                    <a class="dropdown-item" href="">Comment</a>
                                                    <div class="dropdown-divider"></div>
                                                    <a class="dropdown-item" href="">Report</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                {/* <!--end of col--> */}

                                <li class="col-12 col-md-6 col-lg-4">
                                    <div class="card">
                                        <a href="">
                                            <img class="card-img-top" src={CardImage} alt=""/>
                                        </a>
                                        <div class="card-body">
                                            <a href="">
                                                <h4 class="card-title">pipeline.js</h4>
                                                <p class="card-text text-body">Snappy UI interaction library with flexible API</p>
                                            </a>
                                        </div>
                                        <div class="card-footer card-footer-borderless d-flex justify-content-between">
                                            <div class="text-small">
                                                <ul class="list-inline">
                                                    <li class="list-inline-item"><i class="icon-heart mr-1"></i> 84</li>
                                                    <li class="list-inline-item"><i class="icon-message mr-1"></i> 25</li>
                                                </ul>
                                            </div>
                                            <div class="dropup">
                                                <button class="btn btn-sm btn-outline-primary dropdown-toggle dropdown-toggle-no-arrow" type="button" id="pipeline.jsButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <i class="icon-dots-three-horizontal"></i>
                                                </button>
                                                <div class="dropdown-menu dropdown-menu-sm" aria-labelledby="pipeline.jsButton">
                                                    <a class="dropdown-item" href="">Save</a>
                                                    <a class="dropdown-item" href="">Share</a>
                                                    <a class="dropdown-item" href="">Comment</a>
                                                    <div class="dropdown-divider"></div>
                                                    <a class="dropdown-item" href="">Report</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                {/* <!--end of col--> */}

                                <li class="col-12 col-md-6 col-lg-4">
                                    <div class="card">
                                        <a href="">
                                            <img class="card-img-top" src={CardImage} alt=""/>
                                        </a>
                                        <div class="card-body">
                                            <a href="">
                                                <h4 class="card-title">Pitstop</h4>
                                                <p class="card-text text-body">Browser-based project management</p>
                                            </a>
                                        </div>
                                        <div class="card-footer card-footer-borderless d-flex justify-content-between">
                                            <div class="text-small">
                                                <ul class="list-inline">
                                                    <li class="list-inline-item"><i class="icon-heart mr-1"></i> 90</li>
                                                    <li class="list-inline-item"><i class="icon-message mr-1"></i> 34</li>
                                                </ul>
                                            </div>
                                            <div class="dropup">
                                                <button class="btn btn-sm btn-outline-primary dropdown-toggle dropdown-toggle-no-arrow" type="button" id="PitstopButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <i class="icon-dots-three-horizontal"></i>
                                                </button>
                                                <div class="dropdown-menu dropdown-menu-sm" aria-labelledby="PitstopButton">
                                                    <a class="dropdown-item" href="">Save</a>
                                                    <a class="dropdown-item" href="">Share</a>
                                                    <a class="dropdown-item" href="">Comment</a>
                                                    <div class="dropdown-divider"></div>
                                                    <a class="dropdown-item" href="">Report</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                {/* <!--end of col--> */}

                                <li class="col-12 col-md-6 col-lg-4">
                                    <div class="card">
                                        <a href="">
                                            <img class="card-img-top" src={CardImage} alt=""/>
                                        </a>
                                        <div class="card-body">
                                            <a href="">
                                                <h4 class="card-title">Sidekick</h4>
                                                <p class="card-text text-body">Holistic fitness tracking</p>
                                            </a>
                                        </div>
                                        <div class="card-footer card-footer-borderless d-flex justify-content-between">
                                            <div class="text-small">
                                                <ul class="list-inline">
                                                    <li class="list-inline-item"><i class="icon-heart mr-1"></i> 221</li>
                                                    <li class="list-inline-item"><i class="icon-message mr-1"></i> 14</li>
                                                </ul>
                                            </div>
                                            <div class="dropup">
                                                <button class="btn btn-sm btn-outline-primary dropdown-toggle dropdown-toggle-no-arrow" type="button" id="SidekickButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <i class="icon-dots-three-horizontal"></i>
                                                </button>
                                                <div class="dropdown-menu dropdown-menu-sm" aria-labelledby="SidekickButton">
                                                    <a class="dropdown-item" href="">Save</a>
                                                    <a class="dropdown-item" href="">Share</a>
                                                    <a class="dropdown-item" href="">Comment</a>
                                                    <div class="dropdown-divider"></div>
                                                    <a class="dropdown-item" href="">Report</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                {/* <!--end of col--> */}

                            </ul>
                            {/* <!--end of row--> */}
                        </div>
            </div>
        );
    }
};

export default Announcements;
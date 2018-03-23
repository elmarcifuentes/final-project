import React from "react";
import Logo from '../../assets/img/logo.gif';

class Footer extends React.Component {
    render() {
        return (
            <footer class="footer-short">
            <div class="container">
                <hr/>
                <nav class="row justify-content-between align-items-center">
                    <div class="col-auto">
                        <ul class="list-inline">
                            <li class="list-inline-item">
                                <a href="/">
                                    <img alt="" src={Logo} width="30" height="30" />
                                </a>
                            </li>
                            <li class="list-inline-item">
                                <a href="/tenant">Tenant</a>
                            </li>
                            <li class="list-inline-item">
                                <a href="/manager">Manager</a>
                            </li>
                        </ul>
                    </div>
                    <div class="col-auto text-sm-right">
                        <ul class="list-inline">
                            <li class="list-inline-item">
                                <a href="/"><i class="socicon-twitter"></i></a>
                            </li>
                            <li class="list-inline-item">
                                <a href="/"><i class="socicon-facebook"></i></a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div class="row">
                    <div class="col">
                        <small>&copy; 2018 NewsFlash All Rights Reserved</small>
                    </div>
                </div>
            </div>
        </footer>
        );
    }
};

export default Footer;

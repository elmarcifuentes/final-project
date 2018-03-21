import React from 'react';
import Visa from '../../../assets/img/logo-visa.svg';
import Amex from '../../../assets/img/logo-amex.svg';

class Billing extends React.Component {
    render() {
        return (
            <div class="tab-pane fade" id="billing" role="tabpanel" arialabelledby="billing-tab">
                        <div class="container">
                            <div class="row mb-4">
                                <div class="col">
                                    <h5>Payment Methods</h5>
                                </div>
                                {/* <!--end of col--> */}
                            </div>
                            {/* <!--end of row--> */}
                            <div class="row">
                                <div class="col-12">
                                    <form>
                                        <table class="table align-items-center">
                                            <thead>
                                                <tr>
                                                    <th scope="col">Card Type</th>
                                                    <th scope="col">Card Number</th>
                                                    <th scope="col">Default Payment Method</th>
                                                    <th scope="col">Remove</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row">
                                                        <img alt="" src={Visa} class="avatar avatar-sm" />
                                                    </th>
                                                    <td>
                                                        <span class="d-block">&bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull; 8372</span>
                                                        <small class="text-muted">Exp: 06/22</small>
                                                    </td>
                                                    <td>
                                                        <div class="custom-control custom-radio">
                                                            <input id="radio1" name="payment-default" type="radio" class="custom-control-input" checked />
                                                            <label class="custom-control-label" for="radio1"></label>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <button type="submit" class="btn btn-sm btn-danger"><i class="icon-squared-cross"></i> Remove card</button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">
                                                        <img alt="" src={Amex} class="avatar avatar-sm avatar-square" />
                                                    </th>
                                                    <td>
                                                        <span class="d-block">&bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull; 1225</span>
                                                        <small class="text-muted">Exp: 07/21</small>
                                                    </td>
                                                    <td>
                                                        <div class="custom-control custom-radio">
                                                            <input id="radio2" name="payment-default" type="radio" class="custom-control-input"/>
                                                            <label class="custom-control-label" for="radio2"></label>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <button type="submit" class="btn btn-sm btn-danger"><i class="icon-squared-cross"></i> Remove card</button>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <button class="btn btn-primary">Add new card</button>
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

export default Billing;
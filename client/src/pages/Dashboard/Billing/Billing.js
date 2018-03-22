import React from 'react';
import CreditCard from './CreditCard';

const Billing = () => (
    <div class="container">
    <div class="row mb-4">
        <div class="col">
            <h5>Payment Methods</h5>
        </div>
    </div>
    
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
                        <CreditCard />
                        <CreditCard />
                    </tbody>
                </table>
                <button class="btn btn-primary">Add new card</button>
            </form>
        </div>
    </div>
</div>
)

export default Billing;
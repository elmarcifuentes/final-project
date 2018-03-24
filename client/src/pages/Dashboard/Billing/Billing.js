import React from 'react';
import CreditCard from './CreditCard';

const Billing = () => (
    <div className="container">
    <div className="row mb-4">
        <div className="col">
            <h5>Payment Methods</h5>
        </div>
    </div>
    
    <div className="row">
        <div className="col-12">
            <form>
                <table className="table align-items-center">
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
                <button className="btn btn-primary">Add new card</button>
            </form>
        </div>
    </div>
</div>
)

export default Billing;
import React from 'react';
import Amex from '../../../assets/img/logo-amex.svg';

const creditCard = {
    cardNum: '.... .... .... 8372',
    exp: '06/22'
}

const CreditCard = () => (
    <tr>
    <th scope="row">
        <img alt="" src={Amex} className="avatar avatar-sm avatar-square" />
    </th>
    <td>
        <span className="d-block">{creditCard.cardNum}</span>
        <small className="text-muted">Exp: {creditCard.exp}</small>
    </td>
    <td>
        <div className="custom-control custom-radio">
            <input id="radio1" name="payment-default" type="radio" className="custom-control-input" checked />
            <label className="custom-control-label"></label>
        </div>
    </td>
    <td>
        <button type="submit" className="btn btn-sm btn-danger"><i className="icon-squared-cross"></i> Remove card</button>
    </td>
</tr>
)

export default CreditCard;
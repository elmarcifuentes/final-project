import React from 'react';
import Amex from '../../../assets/img/logo-amex.svg';

const creditCard = {
    cardNum: '.... .... .... 8372',
    exp: '06/22'
}

const CreditCard = () => (
    <tr>
    <th scope="row">
        <img alt="" src={Amex} class="avatar avatar-sm avatar-square" />
    </th>
    <td>
        <span class="d-block">{creditCard.cardNum}</span>
        <small class="text-muted">Exp: {creditCard.exp}</small>
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
)

export default CreditCard;
import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
   const { Currency } = useContext(AppContext);
    // ['£', '$','€', '₹']
   return (
        <select className="currency-select" id="inputGroupSelect04">
        <option defaultValue>Choose...</option>
        <option value="$" name="dollar">$ Dollar</option>
        <option value="£" name="pound">£ Pound</option>
        <option value="€" name="euro">€ Euro</option>
        <option value="₹" name="ruppee">₹ Ruppee</option>       
        </select>
   );
};

export default Currency;
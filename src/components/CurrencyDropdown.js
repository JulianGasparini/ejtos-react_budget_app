import React, { useContext, useState} from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { dispatch, currency } = useContext(AppContext); // Currency should be lowercase if it's a property of context.
    const [currentCurrency, setCurrentCurrency] = useState(currency);

    const handleEventInput = (event) => {
        const newCurrency = event.target.value; // Get the new selected value from the select box
        setCurrentCurrency(newCurrency); // Update the local state
        dispatch({
            type: 'CHG_CURRENCY',
            payload: newCurrency,
        });
    }

   return (
    <div class="currencybox">   
    <span>Currency:
        <select
            className="currency-select"
            id="inputGroupSelect04"
            onChange={handleEventInput}
            value={currentCurrency}>

        <option value="$" name="dollar">$ Dollar</option>
        <option value="£" name="pound">£ Pound</option>
        <option value="€" name="euro">€ Euro</option>
        <option value="₹" name="ruppee">₹ Ruppee</option>       
        </select>
        </span>
    </div>
   );
};

export default Currency;
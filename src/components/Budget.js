import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, dispatch, currency } = useContext(AppContext);
    
    const [inputBudget, setInputBudget] = useState(budget);

    useEffect(() => {
    setInputBudget(budget)}, [budget]);
    
    const handleInputChange = (e) => {
        const newBudget = Number(e.target.value);
        setInputBudget(newBudget);    
        // Dispatching the setBudget action
        dispatch({
            type: 'SET_BUDGET',
            payload: newBudget,
        });
    };

    return (
        <div className='alert alert-secondary'>
            <span>
                Budget: {currency}
                <input
                type='number'
                value={inputBudget}
                onChange={handleInputChange}
                step='10'
                ></input>
            </span>
        </div>
    );
};
export default Budget;
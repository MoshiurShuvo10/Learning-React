import React from 'react';
import { add, sub, mul, div } from './CalculatorService';

function Calculator() {
    return (
        <div>
            <h3>Sum of 100 and 50 is {add(100, 50)}</h3>
            <h3>Diff of 200 and 5 is {sub(200, 5)}</h3>
            <h3>Product of 0 and 5 is {mul(0, 5)}</h3>
            <h3>Div of 10000 and 500 is {div(1000, 500)}</h3>
        </div>
    );
}

export default Calculator; 
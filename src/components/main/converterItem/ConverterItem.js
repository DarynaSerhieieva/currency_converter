import React from "react";

import { CurrencyInput } from "./CurrencyInput";
import { CurrencySelect } from "./CurrencySelect";

import './ConverterItem.css';

const ConverterItem = ({data, item: { amount, currency }, handlerAmount, handlerCurrencies}) => {

    return(
        <div className="converter__item">
            <CurrencyInput value={amount} handlerAmount={handlerAmount}/>
            <CurrencySelect data={data} value={currency} handlerCurrencies={handlerCurrencies}/>
        </div>
    );
};

export default ConverterItem;

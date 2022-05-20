import React from "react";

const CurrencyElement = ({currency, value}) => {
    return(
        <>
            <div className="currency__item">
                <div className="currency__name">{currency}</div>
                <div>{value}</div>
            </div>
        </>
    );
};

export default CurrencyElement;

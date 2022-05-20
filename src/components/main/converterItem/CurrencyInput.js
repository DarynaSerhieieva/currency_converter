import React from "react";

export const CurrencyInput = ({value, handlerAmount}) => {

    return(
        <>
            <input onChange={handlerAmount()} value={value} className="convecter__input" type="number"/>
        </>
    );
};

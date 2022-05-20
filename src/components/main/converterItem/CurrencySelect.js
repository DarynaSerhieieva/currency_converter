import React from "react";
import uniqid from 'uniqid';


export const CurrencySelect = ({data, value, handlerCurrencies}) => {

    return(
        <>
            <select onChange={handlerCurrencies()} value={value} className="convecter__select">
                {
                    data.map(element => {
                        return(
                            <option key={uniqid()} value={element}>{element}</option>
                        )
                    })
                }
            </select>
        </>
    )
}
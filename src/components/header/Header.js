import React from "react";
import uniqid from 'uniqid';

import { money } from "../helper/helpers";
import CurrencyElement from "./CurrencyElement";

import './Header.css';

const Header = ({ data }) => {
    const headerCurrency = ['USD', 'EUR'].map(name => {
        return Object.keys(data).filter(element => {
            if (name === element){
                return element;
            }
        })
    })
    
    return(
        <>
            <header className="header">
                <div className="header__logo">Converter</div>
                <div className="currency">
                    {
                        headerCurrency.map(element => {
                            return(
                                <CurrencyElement key={uniqid()} currency={element} value={money(1 / data[element])}/>
                            )
                        })
                    }
                </div>
            </header>
        </>
    );
};

export default Header;

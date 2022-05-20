import React from "react";
import ConverterItem from "./converterItem/ConverterItem";

const Main = ({ data, currencies, handlerAmountFrom, handlerAmountTo, handlerCurrenciesFrom, handlerCurrenciesTo })  => {

    return(
        <>
            <main className="converter">
               <ConverterItem
                    data={data}
                    item={currencies.from}
                    handlerAmount={handlerAmountFrom}
                    handlerCurrencies={handlerCurrenciesFrom}
               /> 
               <ConverterItem
                    data={data}
                    item={currencies.to}
                    handlerAmount={handlerAmountTo}
                    handlerCurrencies={handlerCurrenciesTo}
               /> 
            </main>
        </>
    );
};

export default Main;

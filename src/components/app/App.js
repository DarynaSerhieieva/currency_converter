import React, { Component } from "react";

import { isEmpty, money, fetchApi } from "../helper/helpers";
import Header from "../header/Header";
import Loader from "../loader/Loader";
import Main from "../main/Main";

import './App.css';

class App extends Component {
    state = {
        defaultData: {},
        data: {},
        currencies: {
            from: { currency: 'UAH', amount: 1 },
            to: { currency: 'USD', amount: 0 }
        }
    };

    componentDidMount = () => {
        const { from: { amount }, to: { currency } } = this.state.currencies
        fetchApi('https://v6.exchangerate-api.com/v6/a8c9ba42fee214f007495dfc/latest/UAH')
        .then(res => {
            this.setState({
                defaultData: res.conversion_rates, 'data': res.conversion_rates,
                currencies: {
                    ...this.state.currencies,
                    to: { ...this.state.currencies.to, amount: money(amount * +res.conversion_rates[currency]) }
                }
            })
        })
    };

    handlerAmountFrom = () => e => {
        const { data, currencies: { to, from } } = this.state;
        const { value } = e.target;

        this.setState({
            currencies: {
                from: { ...from, amount: value },
                to: { ...to, amount: money(value * +data[to.currency]) }
            }
        });
    }

    handlerAmountTo = () => e => {
        const { data, currencies: { to, from } } = this.state;
        const { value } = e.target;

        this.setState({
            currencies: {
                from: { ...from, amount: money(value / +data[to.currency]) },
                to: { ...to, amount: value }
            }
        });
    }

    handlerCurrenciesFrom = () => e => {
        const { value } = e.target;
        const { from: { amount, currency } } = this.state.currencies;

        fetchApi(`https://v6.exchangerate-api.com/v6/a8c9ba42fee214f007495dfc/latest/${value}`)
        .then(res => {
            this.setState({
                data: res.conversion_rates,
                currencies: {
                    from: { ...this.state.currencies.from, currency: value },
                    to: { ...this.state.currencies.to, amount: money(amount * +res.conversion_rates[currency]) }
                }
            })
        })

    }

    handlerCurrenciesTo = () => e => {
        const { value } = e.target;
        const { data, currencies: { from: { amount } } } = this.state;

        this.setState({
            currencies: {
                ...this.state.currencies,
                to: { ...this.state.currencies.to, currency: value, amount: money(amount * +data[value]) }
            }
        })
    }

    render = () => {
        const { defaultData, data, currencies } = this.state;
        const { handlerAmountFrom, handlerAmountTo, handlerCurrenciesFrom, handlerCurrenciesTo } = this;
        
        return(
            <>
                <div className="wrapper">
                {
                    isEmpty(defaultData)?
                    <Loader/>:
                    <>
                        <Header data={defaultData}/>
                        <Main 
                            data={Object.keys(data)}
                            currencies={currencies}
                            handlerAmountFrom={handlerAmountFrom}
                            handlerAmountTo={handlerAmountTo}
                            handlerCurrenciesFrom={handlerCurrenciesFrom}
                            handlerCurrenciesTo={handlerCurrenciesTo}
                        /> 
                    </>
                }
                </div>
            </>
        )
    };
};

export default App;

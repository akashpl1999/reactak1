import React, { useState } from 'react'

import { Convert } from "easy-currencies";

//import CurrencyConverter from 'react-currency-conv';

import "./style.css"

const Currency = () => {







    const [data, setdata] = useState([

        "INR",
        "IDR",
        "ILS",
        "MXN",
        "USD",
        "ZAR",

        "NZD",
       " NOK",

       " CNY",
        "BGN",
        "TRY",
        "PLN",
        "SGD",
        "CHF",
        "THB",
        "JPY",
        "HRK",
        "RUB",
        "BRL",
        "CAD",
        "HKD",
        "ISK",
       " PHP",
        "DKK",
        "HUF",
        "CZK",
        "RON",
        "SEK",
        "AUD",
        "EUR",
       "MYR",
       "KRW",
        "GBP"
        
    ])



    const [flag, setflag] = useState(false)

    const [amount1, setamount1] = useState(1)

    const [amount2, setamount2] = useState(1)

    const [currency1, setcurrency1] = useState("INR")

    const [currency2, setcurrency2] = useState("USD")



    const handleChange1 = (e) => { setcurrency1(e.target.value) }


    const handleChange2 = (e) => { setcurrency2(e.target.value) }



    const main = async () => {
        const value = await Convert(amount1).from(currency1).to(currency2);



        setamount2(value)
        console.log(value);
        setflag(true)




    }


    return (
        <div>

            <div>
                


            <div className="form-group">
                <label className="text-muted">  FROM</label>
                <select value={currency1} onChange={handleChange1} className="form-control" name="cat"
                >
                    <option>please select</option>
                    {data && data.map((c) => (
                        <option value={c}>{c}</option>
                    ))}

                </select>

            </div>

            <div className="form-group">
                <label className="text-muted">TO</label>
                <select value={currency2} onChange={handleChange2} className="form-control" name="cat"
                >
                    <option>please select</option>
                    {data && data.map((c) => (
                        <option value={c}>{c}</option>
                    ))}

                </select>

            </div>


            <div>
                <label> AMOUNT</label>

                <input type="number" value={amount1} onChange={(e) => setamount1(e.target.value)} />
                       {currency1}
            </div>




            <button onClick={main}>submit</button>

          
            </div>

            {
                flag &&
                <div>

                  <input className='amount' value={`${amount2} ${currency2} `}/>
               </div>
            }
        </div>
        
    )
}

export default Currency
import { ReactNode, useEffect, useState } from "react";

// Full API Response
// {
//     "data": {
//         "AED": {
//             "symbol": "AED",
//             "name": "United Arab Emirates Dirham",
//             "symbol_native": "د.إ",
//             "decimal_digits": 2,
//             "rounding": 0,
//             "code": "AED",
//             "name_plural": "UAE dirhams",
//             "type": "fiat",
//             "countries": [
//                 "AE"
//             ]
//         },
//         "AFN": {
//             "symbol": "Af",
//             "name": "Afghan Afghani",
//             "symbol_native": "؋",
//             "decimal_digits": 0,
//             "rounding": 0,
//             "code": "AFN",
//             "name_plural": "Afghan Afghanis",
//             "type": "fiat",
//             "countries": [
//                 "AF"
//             ]
//         },
//         "...": {}
//     }
// }

// after checking on console log, the response actually returns something like this 
// {data: 
//         {ADA : {code: 'ADA', value: 2.2475150439}
//         {AED : {code: 'AED', value: 3.6728304612}
//         {AFN : {code: 'AFN', value: 67.9574522574}
//         etc...
// }

export interface TopLevel {
    data: Data;
}

export interface Data {
    [key: string]: Currency; // Allows any currency code (like "AED" or "ADA") as a key
}

export interface Currency {
    value: number;
    symbol:         string;
    name:           string;
    symbol_native:  string;
    decimal_digits: number;
    rounding:       number;
    code:           string;
    name_plural:    string;
    type:           string;
    countries:      string[];
}


function CurrencyList() {
    const [currencies, setCurrencies] = useState<TopLevel | null>(null);

    useEffect(() => {
        currencyfunc()
    }, [])

    async function currencyfunc(){
        let api = await fetch("https://api.currencyapi.com/v3/latest?apikey=cur_live_fCYKD58gnai65LyNO6fT0iw7CYX3oAuSvdv5gNKp")
        let apijson = await api.json()
        console.log(apijson)
        setCurrencies(apijson)
        
    }

    return currencies;
}

export default CurrencyList;
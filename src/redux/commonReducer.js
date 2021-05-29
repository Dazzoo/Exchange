import { ExchangeAPI } from './API'
const COMMON_SET_CURRENCY_LIST = 'COMMON/SET-CURRENCY-LIST'
const COMMON_SET_CURRENT_COEFFICIENT = 'COMMON/SET-CURRENT-COEFFICIENT'
const COMMON_SET_CURRENCY_PARSE = 'COMMON/SET-CURRENCY-PARSE'

let initialState = {
    currencyList: null,
    currencyParse: null,
    currentCoefficient: 1

}

const commonReducer = (state = initialState, action) => {
    switch (action.type){
        case COMMON_SET_CURRENCY_LIST:
            return{...state,
                currencyList: action.currencyList
            }
        case COMMON_SET_CURRENT_COEFFICIENT:
            return{...state,
                currentCoefficient: action.coef
            }
        case COMMON_SET_CURRENCY_PARSE:
            return{...state,
                currencyParse: action.parseList
            }
        default:
            return state;
    }
}



export const SetCurrencyList = (currencyList) => ({type: COMMON_SET_CURRENCY_LIST, currencyList })
export const SetCurrentCoefficient = (coef) => ({type: COMMON_SET_CURRENT_COEFFICIENT, coef })
export const SetCurrencyParseList = (parseList) => ({type: COMMON_SET_CURRENCY_PARSE, parseList })

export const GetCurrencyList = () => async (dispatch) => {
    try {
        let response = await ExchangeAPI.getCurrenciesList()
        dispatch(SetCurrencyList(response))
    } catch (error) {
        alert(error.message)
        console.log(error.message)
    }
}

export const GetCurrentCoefficient = (fromCurrency, toCurrency) => async (dispatch) => {
    try {
        let response = await ExchangeAPI.getCurrencyСoefficient(fromCurrency, toCurrency)
        dispatch(SetCurrentCoefficient(response))
    } catch (error) {
        alert(error.message)
        console.log(error.message)
    }
}

export const GetCurrencyParseList = (fromCurrency) => async (dispatch) => {
    try {
        let response = await ExchangeAPI.getParseAllValues(fromCurrency)
        dispatch(SetCurrencyParseList(response))
    } catch (error) {
        alert(error.message)
        console.log(error.message)
    }
}

export default commonReducer
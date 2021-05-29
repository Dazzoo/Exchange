import * as axios from 'axios'

const instance = axios.create({
    withCredentials: false
}) // API KEY = f908909d6e61710838c7   OR   3d97b8cfb61a8b3a78b2   OR   baf6ea6181cd1e78e86f    881eb329e9dc025abcd6   31db4efb38325b7fa37f

const APIKeysList = ["f908909d6e61710838c7", "3d97b8cfb61a8b3a78b2", "baf6ea6181cd1e78e86f", "881eb329e9dc025abcd6", "31db4efb38325b7fa37f"]
let randomAPI = APIKeysList[Math.floor(Math.random()*APIKeysList.length)]


export const ExchangeAPI = {
    async getCurrencyСoefficient(fromCurrency, toCurrency){
        let Currencies = (`${fromCurrency}_${toCurrency}`)
        let response = await instance.get(`https://free.currconv.com/api/v7/convert?apiKey=${randomAPI}&q=${Currencies}`)
        let params = response.data.results[Currencies]
        return params.val
    },
    async getParseAllValues(fromCurrency){
        let currenciesToParse = ["USD", "EUR", "RUB", "GBP", "UAH", "BTC"]
        let Parse = new Map()
        for(let i = 0; i < currenciesToParse.length; i++){
            let coefs = await this.getCurrencyСoefficient(fromCurrency, currenciesToParse[i])
            Parse.set(currenciesToParse[i], coefs)
        }
        let ParseObj = Object.fromEntries(Parse.entries())
        return ParseObj
    },
    async getCurrenciesList(){
        let CurrenciesList = []
        let response = await instance.get(`https://free.currconv.com/api/v7/currencies?apiKey=${randomAPI}`)
        for(let r in response.data.results){
            CurrenciesList.push(r)
        }
        return CurrenciesList
    }

}

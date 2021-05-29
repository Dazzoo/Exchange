import React, {useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '15ch',
        },
    },
}))

const Parse = (props) => {

    const [Currency, setCurrency] = useState("USD")

    useEffect(() => {
        props.GetCurrencyParseList(Currency)
    },[Currency])
    if(!props.currencyParse){
        return (
            <div>Loading...</div>
        )
    }

    const handleCurrencyFROM = (event) => {
        setCurrency(event.target.value)
    }

    return (
        <div>
            <TextField
                id="standard-select-currency"
                select
                label="Currency"
                value={Currency}
                onChange={handleCurrencyFROM}
                helperText="Price per 1"
            >
                {props.currencyList.map((currency) => (
                    <MenuItem key={currency} value={currency}>
                        {currency}
                    </MenuItem>
                ))}
            </TextField>

            {Object.entries(props.currencyParse).map(([key, value]) => <div>{value} {key}</div>)}
        </div>
    )
}

export default Parse
import React, {useState, useEffect} from 'react'
import {connect} from "react-redux"
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '15ch',
        },
    },
}))


const Convert = (props) => {
    useEffect(() => {
        props.GetCurrencyList()
    },[])

    const classes = useStyles()
    const [currencyFROM, setCurrencyFROM] = useState('UAH');
    const [currencyTO, setCurrencyTO] = useState('UAH');
    const [valueFROM, setValueFROM] = useState('');
    const [valueTO, setValueTO] = useState('');

    useEffect(() => {
        props.GetCurrentCoefficient(currencyFROM, currencyTO)
    },[currencyFROM, currencyTO])

    useEffect(() => {
        setValueTO(valueFROM * props.currentCoefficient)
    },[props.currentCoefficient])

    const handleCurrencyFROM = (event) => {
        setCurrencyFROM(event.target.value)
        setValueTO(valueFROM * props.currentCoefficient)
    }
    const handleCurrencyTO = (event) => {
        setCurrencyTO(event.target.value)
        setValueTO(valueFROM * props.currentCoefficient)
    }
    const handleValueFROM = (event) => {
        setValueFROM(event.target.value)
        setValueTO(event.target.value * props.currentCoefficient)
    }
    if(!props.currencyList){
        return (
            <div>Loading...</div>
        )
    }

    return (
        <div>

        <form className={classes.root} noValidate autoComplete="off">

        <TextField id="standard-basic" value={valueFROM} onChange={handleValueFROM}  label="From" />
            <TextField
        id="standard-select-currency"
        select
        label="Currency"
        value={currencyFROM}
        onChange={handleCurrencyFROM}
        helperText="Please select your currency"
            >
            {props.currencyList.map((currency) => (
                <MenuItem key={currency} value={currency}>
        {currency}
        </MenuItem>
        ))}
        </TextField>

        <TextField id="standard-basic" value={valueTO} label="To" />
            <TextField
        id="standard-select-currency"
        select
        label="Currency"
        value={currencyTO}
        onChange={handleCurrencyTO}
        helperText="Please select your currency"
            >
            {props.currencyList.map((currency) => (
                <MenuItem key={currency} value={currency}>
        {currency}
        </MenuItem>
        ))}
        </TextField>

        </form>
        </div>

    )
}

export default Convert
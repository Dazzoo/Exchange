import logo from './logo.svg';
import React from 'react'
import './App.css';
import {connect} from "react-redux"
import {HashRouter, Route, Redirect} from "react-router-dom";
import Convert from './Components/Convert'
import Parse from  './Components/Parse'
import NavBar from './Components/NavBar/NavBar'
import {GetCurrencyList, GetCurrentCoefficient, GetCurrencyParseList} from './redux/commonReducer'


function App(props) {


  return (
    <div className="App">
        <NavBar/>
        <Route path='/' render={() => <Redirect from="/" to="/convert" />} />
        <Route path='/convert' render={() => <Convert {...props} />} />
        <Route path='/parse' render={() => <Parse {...props} />} />
    </div>
  );
}

const mapStateToProps = (state) => {
    return {
        currencyList: state.commonData.currencyList,
        currentCoefficient: state.commonData.currentCoefficient,
        currencyParse: state.commonData.currencyParse
    }
}

const AppContainer = connect(mapStateToProps, {GetCurrencyList, GetCurrentCoefficient, GetCurrencyParseList})(App)

export default AppContainer;

var {Redux} = require('miniprogram-redux');
var reducer = require('./reducer.js');
import promiseMiddleware from 'redux-promise-middleware'
var reducer = require('./reducer.js')

let store = Redux.createStore(reducer, Redux.applyMiddleware(promiseMiddleware()));

module.exports = store;
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {Provider} from 'react-redux'
import reducer from './reducer'
import {configureStore} from '@reduxjs/toolkit'

const store = configureStore({reducer})
ReactDOM.render(
<Provider store={store}>
<App/>
</Provider>
,document.getElementById('root'));
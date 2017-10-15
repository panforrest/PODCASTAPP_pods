// <Provider store=store.currentStore()>
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Featured } from './components/layout'
import { Provider } from 'react-redux'
import store from './stores'

const app = (
  <Provider store={store.initialize()}>
    <Featured />
  </Provider>
)

ReactDOM.render(app, document.getElementById('root'))
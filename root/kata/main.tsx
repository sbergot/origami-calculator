import React from 'react'
import ReactDOM from 'react-dom'
import { boot } from '../appStart';
import '../index.css'
import App from './App'

boot();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

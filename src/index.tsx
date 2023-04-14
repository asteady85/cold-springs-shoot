import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

// Enable hot module replacement, this will only happen in dev
if (module.hot) {
  module.hot.accept()
}

ReactDOM.render(<App />, document.getElementById('root'))

import React from 'react'
import ReactDOM from 'react-dom'
import App from './App/App'

ReactDOM.render(<App loggedIn={window.isLoggedIn}/>, document.getElementById('root'));

import React from 'react'
import Main from '../Main/Main'
import Login from '../Login/Login'
import styles from './App.css'
import { Button } from 'semantic-ui-react'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: props.loggedIn
        };
        this.toggleLogged = this.toggleLogged.bind(this)
    }
    toggleLogged() {
        let isLoggedIn = this.state.isLoggedIn;
        this.setState({
            isLoggedIn: !isLoggedIn
        })
    }

    render() {
        return (
            <div>
                <Button onClick={this.toggleLogged}>toggle</Button>
                {this.state.isLoggedIn ? <Main/> : <Login/>}
            </div>
        )
    }
}

export default App;

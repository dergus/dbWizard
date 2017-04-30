import React from 'react'
import { Button } from 'semantic-ui-react'
import Login from '../Login/Login'
import styles from './App.css'

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
            <div className={styles.app}>
                <Button onClick={this.toggleLogged}>isLoggedIn</Button>
                {
                    this.state.isLoggedIn
                    ? <h1>Databases</h1>
                    : <Login/>
                }
            </div>
        )
    }
}

export default App;

import React from 'react'
import { Button } from 'semantic-ui-react'
import Header from '../Header/Header'
import SideBar from '../SideBar/SideBar'
import Content from '../Content/Content'
import Footer from '../Footer/Footer'
import styles from './Main.css'

class Main extends React.Component {
    render() {
        return (
            <div className={styles.main}>
                <Header/>
                <SideBar/>
                <Content/>
                <Footer/>
            </div>
        );
    }
}

export default Main

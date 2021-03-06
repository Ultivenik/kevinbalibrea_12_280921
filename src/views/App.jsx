import React from 'react'
import Navbar from './Navbar/Navbar'
import VerticalBar from './VerticalBar/VerticalBar'
import Dashbord from './Dashbord/Dashbord'
import Error from './Error/Error'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

/**
 * application root
 * have <Navbar />, <VerticalBar />, <Dashbord /> as children
    render the main page architecture
 * @component
 */
export default function App() {
    return (
        <React.Fragment>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Navbar />
                        <main>
                            <VerticalBar />
                            <Dashbord />
                        </main>
                    </Route>
                    <Route>
                        <Error/>
                    </Route>
                </Switch>
            </Router>
        </React.Fragment>
    )
}
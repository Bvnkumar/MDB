import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Welcome from '../pages/welcome/welcomeContainer'
import { Sidebar } from '../pages/sidebar/sidebarComponent'
import Artists from '../pages/artists/artistsContainer'
import Albums from '../pages/albums/albumsContainer'
export default class RouterConfig extends React.Component {
    render() {
        return (<div className="d-flex">
            <Router>
                <Switch>
                    <Route path="/" exact component={Welcome} />
                    <Route path="/welcome" component={Welcome} />
                    <Route path="/artists" component={Artists} />
                    <Route path="/albums/:pathParam" component={Albums} />
                </Switch>
                <Sidebar />
            </Router></div>)
    }

}
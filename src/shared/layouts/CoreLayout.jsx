
import React, { lazy } from 'react'
import {
    Route,
    Switch,
    Redirect
} from 'react-router-dom'
import { routerPath } from '../../constants'
import logo from '../../assets/cheerLogo.png'

const Home = lazy(() => import('../../components/Home'))
const Team = lazy(() => import('../../components/Team'))

const CoreLayout = props => {
    return (
        <div className="app-core">
            <header className="App-header">
                <img src={logo} className="img-logo" alt="logo" />
                <p>Etusivu</p>
                <p>Joukkueet</p>
                <p>Työkalut</p>
            </header>
            <main>{props.children}</main>
        </div>
    )
}

const RenderSwitchCore = () => {
    return (
        <CoreLayout>
            <Switch>
                <Route path={routerPath.team} component={Team} />
                <Route path={routerPath.home} component={Home} />
                <Redirect to="/" />
            </Switch>
        </CoreLayout>
    )
}

export default RenderSwitchCore
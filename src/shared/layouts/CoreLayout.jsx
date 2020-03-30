
import React, { lazy } from 'react'
import {
    useHistory,
    Route,
    Switch,
    Redirect
} from 'react-router-dom'
import { routerPath } from '../../constants'
import logo from '../../assets/cheerLogo.png'
import MenuComponent from '../components/Menu'


const Home = lazy(() => import('../../components/Home'))
const Team = lazy(() => import('../../components/Team'))

const CoreLayout = props => {
    const menuItems = ['Etusivu', 'Joukkueet', 'Työkalut']
    let history = useHistory()

    const goToFrontPage = () => {
        history.push('/')
    }

    const goToTeamPage = () => {
        history.push('/joukkue')
    }

    const goToToolsPage = () => {
        history.push('/')
    }

    const menuRoutes = ['/', '/joukkue', '/']

    return (
        <div className="app-core">
            <header className="App-header">
                <img src={logo} className="img-logo" alt="logo" />
                <div className="menu-items">
                    <p onClick={goToFrontPage}>Etusivu</p>
                    <p onClick={goToTeamPage}>Joukkueet</p>
                    {/* <p onClick={goToToolsPage}>Työkalut</p> */}
                </div>
                <MenuComponent routes={menuRoutes}>{menuItems}</MenuComponent>

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
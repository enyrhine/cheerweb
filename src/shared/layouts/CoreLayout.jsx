import React, { lazy, Suspense } from 'react'
import { useNavigate, Route, Routes } from 'react-router-dom'
import { routerPath } from '../../constants'
import logo from '../../assets/cheerLogo.png'
import MenuComponent from '../components/Menu'

const Home = lazy(() => import('../../components/Home'))
const Team = lazy(() => import('../../components/Team'))

const CoreLayout = props => {
  const menuItems = ['Etusivu', 'Joukkueet', 'Työkalut']
  let navigate = useNavigate()

  const goToFrontPage = () => {
    navigate('/')
  }

  const goToTeamPage = () => {
    navigate('/joukkue')
  }

  //   const goToToolsPage = () => {
  //     navigate('/')
  //   }

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
    <>
      <CoreLayout />
      <Routes>
        <Route
          path={routerPath.home}
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path={routerPath.team}
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Team />
            </Suspense>
          }
        />
      </Routes>
    </>
  )
}

export default RenderSwitchCore

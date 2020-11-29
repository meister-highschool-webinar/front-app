import React, { useState, useEffect } from 'react'
import { create } from 'mobx-persist'
import { Provider } from 'mobx-react'
import ReactGA from 'react-ga'
import { Router, Route, Switch, Redirect } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { stores } from 'stores'
import { AdminLoginPage, AdminMainPage, LoginPage, LoginSuccessPage, SignupPage, MainPage } from 'pages'
import { getTokenVerification } from 'utils/token'
import { GA_CODE } from 'config/config.json'

const browserHistory = createBrowserHistory()
ReactGA.initialize(GA_CODE)

browserHistory.listen((location) => {
  ReactGA.set({ page: location.pathname } )
  ReactGA.pageview(location.pathname)
})

const App = () => {
  const [storeLoaded, setStoreLoaded] = useState(false)

  useEffect(() => {
    const hydrate = create()
    async function hydrateStore() {
      await hydrate('userStore', stores.userStore)
      await hydrate('chatStore', stores.chatStore)
      await hydrate('luckyStore', stores.luckyStore)
    }
    hydrateStore().then(() => setStoreLoaded(true))
  }, [])

  return (
    <Provider {...stores}>
      <Router history={browserHistory}>
        <Route path={'/adminLogin'} component={AdminLoginPage} />
        <Route path={'/admin'} render={() => (getTokenVerification().length > 0 ? <AdminMainPage /> : <Redirect to={'/adminLogin'} />)} />
        {storeLoaded ? (
          <Switch>
            <Route exact path={'/'} component={MainPage} />
            <Route path={'/login'} component={LoginPage} />
            <Route path={'/loginSuccess'} component={LoginSuccessPage} />
            <Route path={'/signup'} component={SignupPage} />
          </Switch>
        ) : null}
      </Router>
    </Provider>
  )
}

export default App

import React, { useState, useEffect } from 'react'
import { create } from 'mobx-persist'
import { Provider } from 'mobx-react'
import { Router, Route, Switch, Redirect } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { stores } from 'stores'
import { AdminLoginPage, AdminMainPage, LoginPage, MainPage } from 'pages'

import GetTokenVerification from 'token/GetTokenVerification'
const browserHistory = createBrowserHistory()

const App = () => {
  const [storeLoaded, setStoreLoaded] = useState(false)

  useEffect(() => {
    const hydrate = create()
    async function hydrateStore() {
      await hydrate('userStore', stores.userStore)
      await hydrate('chatStore', stores.chatStore)
    }
    hydrateStore().then(() => setStoreLoaded(true))
  }, [])

  return (
    <Provider {...stores}>
      <Router history={browserHistory}>
        <Route path={'/adminLogin'} component={AdminLoginPage} />
        <Route path={'/admin'} render={() => (GetTokenVerification() !== null ? <AdminMainPage /> : <Redirect to={'/adminLogin'} />)} />
        {storeLoaded ? (
          <Switch>
            <Route exact path={'/'} component={MainPage} />
            <Route path={'/login'} component={LoginPage} />
          </Switch>
        ) : null}
      </Router>
    </Provider>
  )
}

export default App

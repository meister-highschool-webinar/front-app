import React from 'react'
import { create } from 'mobx-persist'
import { Provider, observer, useLocalStore } from 'mobx-react'
import { Router, Route, Switch, render, Redirect } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { stores } from 'stores'
import * as Pages from 'pages'
import Header from 'components/Header/Header'
import MainPage from 'pages/MainPage'
import TestPage from './pages/TestPage'
import LoginPage from './pages/LoginPage'
import AdminLoginPage from './pages/AdminLoginPage'
import AdminPage from './pages/AdminMainPage'
import GetTokenVerification from 'token/GetTokenVerification'
const browserHistory = createBrowserHistory()
const hydrate = create()

const App = observer(() => {
  const store = useLocalStore(() => ({
    storeLoaded: false,
    setStoreLoaded: (load) => (store.storeLoaded = load),
  }))

  React.useEffect(() => {
    const load = async () => {
      await hydrate('userStore', stores.userStore).then(() => {
        store.setStoreLoaded(true)
      })
    }
    load()
  }, [store])

  return (
    <Provider {...stores}>
      <Router history={browserHistory}>
        <Route path={'/adminLogin'} component={AdminLoginPage} />
        <Route path={'/admin'} render={() => (GetTokenVerification() !== null ? <Pages.AdminMainPage /> : <Redirect to={'/adminLogin'} />)} />
        <Route path={'/example'} component={TestPage} />
        {/* 추후 로그인 기능이 개발이 되면 token검증을 이용해서 redirect 하는 방식으로 사용하면 좋을거 같아요 */}
        {/* <Route path={'/example'} render={() => (!TOKEN_EMPTY() ? <pages.examplePage /> : <Redirect to="/login" />)} /> */}
        {/* <Header /> */}
        {store.storeLoaded ? (
          <Switch>
            <Route exact path={'/'} component={MainPage} />
            <Route path={'/test'} component={TestPage} />
            <Route path={'/login'} component={LoginPage} />
          </Switch>
        ) : null}
      </Router>
    </Provider>
  )
})

export default App
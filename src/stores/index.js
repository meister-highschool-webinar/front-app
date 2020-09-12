import React from 'react'
import AppStore from './AppStore'
import UserStore from './UserStore'
import ChatStore from './ChatStore'
import SurveyStore from './SurveyStore'
import LuckyStore from './LuckyStore'
import WebinarInfoStore from './WebinarInfoStore'
import WebinarTimeTableStore from './WebinarTimeTableStore'
import AdminStore from './AdminStore'

export const stores = {
  appStore: new AppStore(),
  userStore: new UserStore(),
  chatStore: new ChatStore(),
  surveyStore: new SurveyStore(),
  luckyStore: new LuckyStore(),
  AdminStore: new AdminStore(),
  WebinarInfoStore: new WebinarInfoStore(),
  WebinarTimeTableStore: new WebinarTimeTableStore(),
}

export const storesContext = React.createContext({
  ...stores,
})

export const useStores = () => {
  const store = React.useContext(storesContext)
  if (!store) {
    throw new Error('useStore must be used within a StoreProvider')
  }
  return store
}

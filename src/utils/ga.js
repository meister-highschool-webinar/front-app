import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import ReactGA from 'react-ga'
import { GA_CODE } from 'config/config.json'

const usePageTracking = (name) => {
  const location = useLocation()
  const [initialized, setInitialized] = useState(false)

  useEffect(() => {
    if (!window.location.href.includes('localhost')) {
      ReactGA.initialize(GA_CODE, { gaOptions: { name: name } })
      setInitialized(true)
    }
  }, [])

  useEffect(() => {
    if (initialized) {
      ReactGA.set({ page: location.pathname })
      ReactGA.pageview(location.pathname + location.search)
    }
  }, [initialized, location])
}

export default usePageTracking

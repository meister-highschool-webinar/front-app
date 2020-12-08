import axios from 'axios'

import { DEV_SERVER, TEST_SERVER, PROD_SERVER } from 'config/config.json'

// let URL = process.env.NODE_ENV === 'production' ? `${PROD_SERVER}/api` : `${DEV_SERVER}/api`
let URL
const host = window.location.hostname
switch (host) {
  case 'test-front-app-meister-highschool-webinar.endpoint.ainize.ai':
    URL = `${DEV_SERVER}/api`
    break
  case 'master-backend-meister-highschool-webinar.endpoint.ainize.ai':
  case 'www.sw-webinar.com':
    URL = `${PROD_SERVER}/api`
    break
  default:
    URL = `${TEST_SERVER}/api`
}

const axiosApi = (url, method = 'GET', data, options = {}) => {
  data = method.toUpperCase() === 'GET' ? { params: { ...data } } : { data }

  const defaultConfing = {
    url: URL + url,
    method,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }
  const config = {
    ...defaultConfing,
    ...data,
    ...options,
  }
  return axios(config).then((response) => {
    const { data } = response
    return data
  })
}

export default axiosApi

import axios from 'axios'
import { setServerUrl } from './server'

// let URL = process.env.NODE_ENV === 'production' ? `${PROD_SERVER}/api` : `${DEV_SERVER}/api`
const host = window.location.hostname
let URL = setServerUrl(host) + '/api'

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
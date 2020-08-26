import axiosApi from './axios'

export const testApi = (data) => {
  return axiosApi('/test', 'POST', data, {})
}

export const getTimeTable = () => {
  return axiosApi('/timetable-list', 'GET')
}

export const getWebinarInfo = () => {
  return axiosApi('/webinar-info', 'GET')
}

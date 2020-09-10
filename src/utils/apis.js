import axiosApi from './axios'
import axios from 'axios'

export const testApi = (data) => {
  return axiosApi('/test', 'POST', data, {})
}

// {schoolName, grade, sclass, number, studentId, studentName} = data
export const loginApi = (data) => {
  return axiosApi('/auth/login', 'POST', data)
}

export const getTimeTable = () => {
  return axiosApi('/timetable-list', 'GET')
}

export const getWebinarInfo = () => {
  return axiosApi('/webinar-info', 'GET')
}

export const getQna = () => {
  return axiosApi('/qna', 'GET')
}

export const getFile = (name) => {
  axios.defaults.headers['x-access-token'] = sessionStorage.getItem('adminToken')
  return axiosApi(`/auth/file-download?dataName=${name}`, 'GET')
}

export const createWebinarInfo = (data) => {
  axios.defaults.headers['x-access-token'] = sessionStorage.getItem('adminToken')
  return axiosApi('/auth/webinar', 'POST', data)
}

export const adminLogin = (data) => {
  return axiosApi('/auth/admin-login', 'POST', data)
}

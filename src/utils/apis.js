import axiosApi from './axios'
import axios from 'axios'

export const testApi = (data) => {
  return axiosApi('/test', 'POST', data, {})
}

// {schoolName, grade, sclass, number, studentId, studentName} = data
export const loginApi = (data) => {
  return axiosApi('/auth/login', 'POST', data)
}

// export const logout = () => {
//   return axiosApi('/auth/logout')
// }

export const signup = (data) => {
  return axiosApi('/auth/signup', 'POST', data)
}

export const getUserInfo = (data) => {
  return axiosApi('/user-info', 'POST', data)
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

export const getWinnerList = () => {
  return axiosApi('/winner', 'GET')
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

export const createTimetable = (data) => {
  return axiosApi('/auth/timetable', 'POST', data)
}

export const startLuckyDraw = (data) => {
  axios.defaults.headers['x-access-token'] = sessionStorage.getItem('adminToken')
  return axiosApi('/auth/luckdraw/start', 'POST', data)
}

export const resetLuckyDraw = () => {
  axios.defaults.headers['x-access-token'] = sessionStorage.getItem('adminToken')
  return axiosApi('/auth/luckdraw/reset', 'PATCH')
}

export const initChatLogs = (type) => {
  switch(type) {
    case 'chat':
      return initChatLog()
    case 'qna':
      return initQnaLog()
  }
}

export const initChatLog = () => {
  axios.defaults.headers['x-access-token'] = sessionStorage.getItem('adminToken')
  return axiosApi('/auth/remove_all_chat', 'GET')
}

export const initQnaLog = () => {
  axios.defaults.headers['x-access-token'] = sessionStorage.getItem('adminToken')
  return axiosApi('/auth/remove_all_qna', 'GET')
}
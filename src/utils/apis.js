import axiosApi from './axios'

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

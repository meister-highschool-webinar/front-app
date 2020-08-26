import axiosApi from './axios'

export const testApi = (data) => {
  return axiosApi('/test', 'POST', data, {})
}

// {schoolName, grade, sclass, number, studentId, studentName} = data
export const loginApi = (data) => {
  return axiosApi('/auth/login', 'POST', data)
}

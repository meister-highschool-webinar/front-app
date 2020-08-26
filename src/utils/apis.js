import axiosApi from './axios'

export const testApi = (data) => {
  return axiosApi('/test', 'POST', data, {})
}

export const loginApi = (schoolName, grade, sclass, number, studentId, studentName) => {
  return axiosApi('/auth/login', 'POST', {
    schoolName,
    grade,
    class: sclass,
    number,
    studentId,
    studentName,
  })
}

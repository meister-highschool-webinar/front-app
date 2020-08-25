import axiosApi from './axios'

export const testApi = (data) => {
  return axiosApi('/test', 'POST', data, {})
}

export const loginApi = (data) => {
  return axiosApi('/auth/login', 'POST', {
    "schoolName" : data[0],
    "grade": parseInt(data[1].grade),
    "class": parseInt(data[1].sclass),
    "number": parseInt(data[1].number),
    "studentId" : parseInt(`${data[1].grade}${data[1].sclass}${data[1].number < 10 ? `0${data[1].number}` : data[1].number}`),
    "studentName": data[1].name    
  })
}

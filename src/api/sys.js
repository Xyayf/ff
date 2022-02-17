import request from '@/utils/request.js'
export const login = (phone, pwd) => {
  return request({
    url: '/login/cellphone',
    params: {
      phone,
      md5_password: pwd
    },
    method: 'get'
  })
}

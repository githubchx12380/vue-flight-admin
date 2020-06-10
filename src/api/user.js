import request from '@/utils/request'

export function login(data) {  
  return request({
    url: '/user/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}

//获取全部用户
export function userall() {
  return request({
    url:'/user/all',
  })
}

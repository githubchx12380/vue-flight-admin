import request from '@/utils/request'


//登录
export function fetchLogin(body) {
  return request({
    url: '/user/login',
    method: 'post',
    params: body
  })
}


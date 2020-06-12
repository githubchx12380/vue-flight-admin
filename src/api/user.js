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

//封禁用户,解封用户
export function state_user(id) {
  return request({
    url:'/user/state',
    params:{
      id
    }
  })
}

//修改个人资料
export function update_info(data) {
    return request({
      method:'post',
      url:'/user/update',
      data
    })
}


import request from '@/utils/request'

//城市列表
export function CityList() {
  return request({
    url:'/air/citylist'
  })
}


//航班列表
export function flight_list(params) {
  return request({
    url: '/air/flightlist',
    method: 'get',
    params
  })
}

//删除航班
export function delete_flight(id) {
  return request({
    url:'/air/deleteflight',
    method:'post',
    data:{
      id
    }
  })
}

//新增航班
export function insert_flight(data) {
  return request({
    method:'post',
    url:'/air/insetflight',
    data
  })
}


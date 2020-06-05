

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



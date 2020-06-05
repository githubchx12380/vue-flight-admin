

import request from '@/utils/request'

//城市列表
export function CityList() {
  return request({
    url:'/city/citylist'
  })
}


//航班列表
export function flight_list() {
  return request({
    url: '/flight/list',
    method: 'get',
  })
}



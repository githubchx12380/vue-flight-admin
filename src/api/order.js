import request from '@/utils/request'


//获取所有订单
export function get_OrderData(body) {
  return request({
      url:'/order/orderlist'
  })
}


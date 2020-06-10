import request from '@/utils/request'


//获取所有订单
export function get_OrderData(state) {
  return request({
      url:'/order/orderlist',
      params:{
        buy_state:state
      }
  })
}


//获取某位用户订单
export function userItem_order(id) {
  return request({
    url:'/order/useritem_order',
    params:{
      id
    }
  })
}


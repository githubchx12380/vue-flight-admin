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


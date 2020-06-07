import request from '@/utils/request'

//美食列表
export const strat_list = (query) => {
    return request({
        url:'/strat/list',
        params:query
    })
}
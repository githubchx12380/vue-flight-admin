import request from '@/utils/request'


export const vacation_list = () => {
    return request({
        url:'/air/vacation/list'
    })
}
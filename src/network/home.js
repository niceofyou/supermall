import {request} from './request'

//获取banner数据
export function HomeMultidata(){
   return request({
     url:'/home/multidata'
   })
}

//获取goods数据
export function HomeGoods(type,page){
  return request({
    url:'/home/data',
    params:{
      type,
      page
    }
  })
}
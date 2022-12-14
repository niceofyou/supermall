import {request} from './request'

//获取datail的banner数据
export function getDetails(iid){
  return request({
    url:'/detail',
    params:{
      iid
    }
  })
}

export class Goods{
  constructor(itemInfo,columns,services){
    this.title=itemInfo.title
    this.desc=itemInfo.desc
    this.newPrice=itemInfo.price
    this.oldPrice=itemInfo.oldPrice
    this.discount=itemInfo.discountDesc
    this.columns=columns
    this.services=services
    this.realPrice=itemInfo.lowNowPrice
  }
}
export class Store{
  constructor(shopInfo,){
   this.logo=shopInfo.shopLogo
   this.name=shopInfo.name
   this.cSells=shopInfo.cSells
   this.cGoods=shopInfo.cGoods
   this.score=shopInfo.score
  }

}
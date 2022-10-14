export function debounce(func,delay){
  let timer=null
  //注意这里timer=null只调用一次
  return function(...args){
   if(timer) clearTimeout(timer)
   timer=setTimeout(()=>{
     func.apply(this,args)
   },delay)
  }
}
import axios from 'axios'

//1:创建实列
export function request(config){
  const instance=axios.create({
    baseURL:'http://152.136.185.210:7878/api/hy66',
    // baseURL:'www.blogry.cn/index',
    timeout:2000
  })

  //2:拦截器
  //2.1请求拦截的作用
  instance.interceptors.request.use(config=>{
     return config
    },err=>{
      console.log(err)
  })

  //2.2响应拦截
  instance.interceptors.response.use(res=>{
    return res.data
   },err=>{
    console.log(err)
 })

 //3 发送请求
  return instance(config)
  //instance返回的就是一个promise
}



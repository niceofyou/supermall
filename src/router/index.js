import { createRouter, createWebHistory } from 'vue-router'
const Home=()=>import('views/home/Home.vue')
const Category=()=>import('views/category/Category.vue')
const Cart=()=>import('views/cart/Cart.vue')
const Profile=()=>import('views/profile/Profile.vue')
const Details=()=>import('views/details/Details.vue')

const routes = [
  {
    path:'',
    redirect:'/home'
    

  },
  {
    path:'/home',
    component:Home,
    meta:{title:'首页'},

  },
  {
    path:'/category',
    component:Category,
    meta:{title:'分类'},

  },
  {
    path:'/cart',
    component:Cart,
    meta:{title:'购物车'},

  },
  {
    path:'/profile',
    component:Profile,
    meta:{title:'档案'},

  },
  {
    path:'/detail/:iid',
    component:Details,
    meta:{title:'详情'},

  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to,from,next)=>{

  document.title=to.matched[0].meta.title
  
  // console.log(to);
  // console.log('+++++++');

  next()
})

export default router

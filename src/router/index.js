import Vue from 'vue'
import VueRouter from 'vue-router'
import Router from 'vue-router'

const Home = () => import('../views/home/Home')
const Category = () => import('../views/category/Category')
const Cart = () => import('../views/cart/Cart')
const Profile = () => import('../views/profile/Profile')

//安装插件
Vue.use(Router)
//创建路由对象

const  routes= [
    {
      path: '/',
      name: ' App',
      component: Home
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/category',
      component: Category
    },
    {
      path: '/profile',
      component: Profile
    },
    {
      path: '/cart',
      component: Cart
    }
  ],
  //这里为什么不能加const
 router = new VueRouter({
    routes,
    mode:'history'
  })

export default router

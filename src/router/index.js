import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Product from '@/views/product'
import cart from '@/views/cart'
import feature from '@/components/feature'
import login from '@/components/login'
import singleProduct from '@/components/singleProduct'
import electronics from '@/components/electronics'
// import jewelery from '@/components/jewelery'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/product',
      name: 'Product',
      component: Product
    },
    
    {
      path: '/product/category/:item',
      name: 'electronics',
      component: electronics,
    },
    {
      path: '/cart',
      name: 'cart',
      component: cart
    },
    {
      path: '/feature',
      name: 'feature',
      component: feature
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/singleProduct/:id',
      name: 'singleProduct',
      component: singleProduct
    },
    

  ],
  mode:'history'
})

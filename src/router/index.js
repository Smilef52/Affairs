import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import User from '@/pages/user/home/Home'
import Message from '@/pages/message/Message'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/user',
      name: 'User',
      component: User
    }, {
      path: '/message',
      name: 'Message',
      component: Message
    }
  ]
})
